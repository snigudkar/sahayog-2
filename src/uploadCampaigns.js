import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDY5Bqxb-ONJ_yIyPkvM9s6UhTehbDiDdg",
//     authDomain: "sahayogngo-d3839.firebaseapp.com",
//     databaseURL: "https://sahayogngo-d3839-default-rtdb.firebaseio.com/",
//     projectId: "sahayogngo-d3839",
//     storageBucket: "sahayogngo-d3839.firebasestorage.app",
//     messagingSenderId: "788822487122",
//     appId: "1:788822487122:web:8a366ecef5f865c1f32f8b",
//     measurementId: "G-VQVZPN7RTV"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAuNwvEfgeTMpJdEZhVkWJpX0PjZwdXQVM",
  authDomain: "login-page-923f8.firebaseapp.com",
  databaseURL: "https://login-page-923f8-default-rtdb.firebaseio.com/",
  projectId: "login-page-923f8",
  storageBucket: "login-page-923f8.firebasestorage.app",
  messagingSenderId: "784857233109",
  appId: "1:784857233109:web:594bb2dfe13780a0e4545c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const campaigns = [
  {
    title: "Support Education for Underprivileged Kids",
    description: "₹500 can buy a child's school kit!",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    amount: 500,
    goal: 50000,
    raised: 0
  },
  {
    title: "Help Provide Free Medical Care to Rural Areas",
    description: "Every ₹1,000 sponsors a health checkup!",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    amount: 1000,
    goal: 100000,
    raised: 0
  },
  {
    title: "Plant Trees & Restore Green Cover",
    description: "₹300 helps plant & maintain a sapling!",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    amount: 300,
    goal: 30000,
    raised: 0
  },
  {
    title: "Provide Meals for the Needy",
    description: "₹50 can provide a nutritious meal to someone in need.",
    image: "https://images.unsplash.com/photo-1529692236671-f1a3a2ed0b5b",
    amount: 50,
    goal: 25000,
    raised: 0
  },
  {
    title: "Support Skill Training for Women",
    description: "₹800 funds a week-long skill training program.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    amount: 800,
    goal: 80000,
    raised: 0
  },
  {
    title: "Build Shelters for the Homeless",
    description: "₹2,000 contributes to building safe shelters.",
    image: "https://images.unsplash.com/photo-1560185007-aadf00ce9215",
    amount: 2000,
    goal: 200000,
    raised: 0
  }
];

function uploadCampaigns() {
  const db = getDatabase(app);
  const campaignsRef = ref(db, "campaigns");
  
  campaigns.forEach(campaign => {
    const newCampaignRef = push(campaignsRef);
    set(newCampaignRef, campaign)
      .then(() => {
        console.log("Campaign uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading campaign:", error.message);
      });
  });
}

uploadCampaigns();
