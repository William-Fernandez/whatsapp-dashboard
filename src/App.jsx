import React from "react";
import "../src/App.css";
import Dashboard from "./components/Dashboard.jsx";
import data from "./data/data.json";

export default function App() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] p-6 md:p-12">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#1E3A8A]">
                WhatsApp Business Dashboard
            </h1>
            <Dashboard data={data} />
        </div>
    );
}
