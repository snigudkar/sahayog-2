import React from 'react'
import { Calendar } from "lucide-react";
import { upcomingEvents } from "../constants";

const Events = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Events
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Upcoming{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Events
          </span>
        </h2>
      </div>
      
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {upcomingEvents.map((event, index) => (
          <div key={event.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 border border-neutral-700 rounded-xl hover:border-orange-500 transition-all duration-300 h-full">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                    e.target.onerror = null;
                  }}
                />
                {event.featured && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {event.title}
              </h3>

              <div className="flex items-center text-neutral-400 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{event.date} | {event.time}</span>
              </div>

              <p className="text-neutral-300 mb-6 line-clamp-3">
                {event.description}
              </p>

              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Location:</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Time:</span>
                  <span>{event.time}</span>
                </div>
                {event.seats && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Available Seats:</span>
                    <span className="text-orange-500">{event.seats}</span>
                  </div>
                )}
              </div>

              <button
                className="w-full px-4 py-3 mt-6 text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition duration-200 flex items-center justify-center"
                onClick={() => window.location.href = `/event/${event.id}`}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
