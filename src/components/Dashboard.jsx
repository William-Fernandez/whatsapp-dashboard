// Create a dashboard with 3 cards showing total messages, total bookings, new clients using Tailwind
import React from 'react';
import FeedbackTable from './FeedbackTable.jsx';

export default function Dashboard({ data }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A]">
                    <h2 className="text-xl font-semibold mb-4 text-[#1E3A8A]">Total Messages</h2>
                    <p className="text-3xl font-bold text-[#1E3A8A]">{data.totalMessages}</p>
                </div>
                <div className="bg-[#E0F7EF] p-6 rounded-lg shadow-lg border-l-4 border-[#10B981]">
                    <h2 className="text-xl font-semibold mb-4 text-[#065F46]">Total Bookings</h2>
                    <p className="text-3xl font-bold text-[#10B981]">{data.totalBookings}</p>
                </div>
                <div className="bg-[#FEF3C7] p-6 rounded-lg shadow-lg border-l-4 border-[#F59E0B]">
                    <h2 className="text-xl font-semibold mb-4 text-[#B45309]">New Clients</h2>
                    <p className="text-3xl font-bold text-[#F59E0B]">{data.newClients}</p>
                </div>
            </div>
            <FeedbackTable feedback={data.feedback} />
        </div>
    );
}