import React, { useState, useEffect } from "react";
import app from "../firebase.js";
import { getDatabase, ref, get, update } from "firebase/database";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [donations, setDonations] = useState({});
  const [campaignKeys, setCampaignKeys] = useState([]); // Store Firebase keys

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, "campaigns");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const campaignsData = Object.values(snapshot.val());
          const keys = Object.keys(snapshot.val()); // Get Firebase keys
          setCampaignKeys(keys);
          setCampaigns(campaignsData);
          const initialDonations = {};
          campaignsData.forEach((_, index) => {
            initialDonations[index] = "";
          });
          setDonations(initialDonations);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        alert("Failed to load campaigns");
      }
    };

    fetchCampaigns();
  }, []);

  const handleDonationChange = (index, value) => {
    setDonations((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleDonate = async (index, campaign) => {
    const amount = Number(donations[index]);
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    try {
      const db = getDatabase(app);
      const campaignRef = ref(db, `campaigns/${campaignKeys[index]}`);

      // Update the raised amount in Firebase
      const newRaisedAmount = (campaign.raised || 0) + amount;
      await update(campaignRef, {
        raised: newRaisedAmount,
      });

      // Update local state
      const updatedCampaigns = [...campaigns];
      updatedCampaigns[index] = {
        ...campaign,
        raised: newRaisedAmount,
      };
      setCampaigns(updatedCampaigns);

      // Clear the donation input
      setDonations((prev) => ({
        ...prev,
        [index]: "",
      }));

      alert(`Thank you for donating ₹${amount} to ${campaign.title}`);
    } catch (error) {
      console.error("Error processing donation:", error);
      alert("Failed to process donation");
    }
  };

  return (
    <div>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Campaigns
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Your Contributions Can{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Change Lives!
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg p-4"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{campaign.title}</h3>
              <p className="text-neutral-400 mt-2">{campaign.description}</p>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-orange-500 font-semibold">
                    Goal: ₹{campaign.goal?.toLocaleString() || "0"}
                  </p>
                  <p className="text-neutral-400">
                    Raised: ₹{campaign.raised?.toLocaleString() || "0"}
                  </p>
                </div>

                <div className="w-full bg-neutral-800 h-2 rounded-full mt-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{
                      width: `${
                        ((campaign.raised || 0) / (campaign.goal || 1)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-neutral-400 mt-4">
                Suggested donation: ₹{campaign.amount?.toLocaleString() || "0"}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <input
                  type="number"
                  value={donations[index] || ""}
                  onChange={(e) => handleDonationChange(index, e.target.value)}
                  placeholder="Enter amount"
                  className="px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-900 text-white w-full"
                  min="0"
                />
                <button
                  onClick={() => handleDonate(index, campaign)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-800 transition-colors whitespace-nowrap"
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
