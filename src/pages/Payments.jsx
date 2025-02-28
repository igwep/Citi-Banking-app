import React, { useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useAuth } from "../context/AuthContext";

const PaymentsPage = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("Utility Pay"); // State to handle active tab

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-red-500">User not authenticated!</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 font-lato min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="lg:ml-64  md:px-4 flex-grow p-6">
        {/* Tabs */}
        <div className="bg-white shadow-md -mt-20 md:mt-0 relative rounded-md ">
        <div className="flex bg-customLightBlue space-x-4 p-4 rounded-t-md mt-4">
          <button
            onClick={() => setActiveTab("Utility Pay")}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeTab === "Utility Pay" ? "bg-blue-100 text-customColor" : "text-gray-500 hover:text-customColor"
            }`}
          >
            Utility Pay
          </button>
          <button
            onClick={() => setActiveTab("Card Payments")}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeTab === "Card Payments" ? "bg-blue-100 text-customColor" : "text-gray-500 hover:text-customColor"
            }`}
          >
            Card Payments
          </button>
          <button
            onClick={() => setActiveTab("One Time Pay")}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeTab === "One Time Pay" ? "bg-blue-100 text-customColor" : "text-gray-500 hover:text-customColor"
            }`}
          >
            One Time Pay
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "Utility Pay" && (
  <div className="grid grid-cols-2 sm:grid-cols-4   border border-gray-100">
    {[
      { name: "Electricity", icon: "/Svg/electricity-svgrepo-com.svg" },
      { name: "Landline", icon: "/Svg/home-telephone-svgrepo-com.svg" },
      { name: "Mobile", icon: "/Svg/mobile-phone-svgrepo-com.svg" },
      { name: "Gas", icon: "/Svg/gas-svgrepo-com.svg" },
      { name: "DTH", icon: "/Svg/antenna-svgrepo-com.svg" },
      { name: "Data Card", icon: "/Svg/flash-drive-svgrepo-com.svg" },
      
    ].map((option) => (
      <div
        key={option.name}
        className="flex flex-col items-center text-center border border-gray-100 p-4"
      >
        <img src={option.icon} alt={option.name} className="w-12 h-12" />
        <span className="mt-2 text-gray-700">{option.name}</span>
      </div>
    ))}
  </div>
)}


        {activeTab === "Card Payments" && (
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Card Payments</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex justify-between items-center">
                <span>Pay Credit Card Bill</span>
                <button className="bg-customColor text-white py-2 px-4 rounded-lg">Pay Now</button>
              </li>
              <li className="flex justify-between items-center">
                <span>Pay Loan EMI</span>
                <button className="bg-customColor text-white py-2 px-4 rounded-lg">Pay Now</button>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "One Time Pay" && (
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">One Time Payments</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Recipient Name</label>
                <input
                  type="text"
                  placeholder="Enter recipient name"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-600">Account Number</label>
                <input
                  type="text"
                  placeholder="Enter account number"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-600">Amount</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <button type="submit" className="w-full bg-customColor text-white py-2 px-4 rounded-lg">
                Pay Now
              </button>
            </form>
          </div>
        )}
        </div>

        {/* Payment Reminder */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/Svg/power-svgrepo-com.svg" alt="Bill Reminder" className="w-10 h-10" />
              <p className="text-gray-800 font-medium">Direct Energy bill payment is due on 12 July</p>
            </div>
            <button className="text-customColor py-2 px-4 rounded-lg">Pay Now</button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Transaction History</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between">
              <span>Verizon Mobile Bill Pay</span>
              <span className="text-red-500">-142.36</span>
            </li>
            <li className="flex justify-between">
              <span>Netflix Subscription</span>
              <span className="text-red-500">-15.99</span>
            </li>
            <li className="flex justify-between">
              <span>Salary Credited</span>
              <span className="text-green-500">+3000.00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaymentsPage;
