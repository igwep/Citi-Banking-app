import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TransactionsHistoryPage = () => {
  const { user, loading } = useAuth();
  const [transactionsToShow, setTransactionsToShow] = useState(6);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-red-500">User not authenticated!</h2>
      </div>
    );
  }

  // Sort transactions by date (newest first)
  const transactions = [...(user.transactions || [])].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  const showLoadMore = transactions.length > transactionsToShow;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
  };

  const loadMoreTransactions = () => {
    setTransactionsToShow(prev => prev + 6);
  };

  return (
    <div className="bg-gray-100 font-lato min-h-screen flex flex-col">
      {/* Account Summary */}
      <div className="bg-customColor relative flex justify-evenly items-center text-white h-56">
        <div className="absolute overflow-hidden inset-0">
          <Link
            to="/dashboard"
            className="absolute top-4 cursor-pointer left-4 z-50 text-white"
          >
            <ArrowBackIcon sx={{ color: 'white' }} />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-lg">Savings A/c {user.accountNumber?.slice(-10) || '9876543210'}</p>
          <div className="flex flex-col items-center">
            <p className="text-sm mt-1">Available Balance</p>
            <h2 className="text-4xl mt-2">${user.balance?.toFixed(2) || 0.00}</h2>
          </div>
        </div>
      </div>

      {/* Transactions History */}
      <div className="bg-white mt-4 p-4 mx-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-700">Transactions History</h2>
        <ul className="divide-y divide-gray-200 mt-4">
          {transactions.slice(0, transactionsToShow).map((transaction, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">
                      {formatDate(transaction.date)}
                    </p>
                    <p className="text-gray-800 font-medium">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {transaction.recipientBank}
                      {transaction.recipientAccount && (
                        <span className="ml-2 text-gray-400">
                          ••••{transaction.recipientAccount.slice(-4)}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    transaction.status === "Completed" 
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {transaction.status}
                  </span>
                </div>
                <p className="text-sm mt-2 text-gray-500">
                  Transaction Type: {transaction.type}
                </p>
              </div>
              <p
                className={`font-semibold ml-4 ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>

        {showLoadMore && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMoreTransactions}
              className="bg-customColor hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Load More Transactions
            </button>
          </div>
        )}
      </div>

      {/* Filter Button */}
      <button className="fixed bottom-6 right-6 bg-customColor text-white p-4 rounded-full shadow-lg">
        {/* Filter icon remains the same */}
      </button>
    </div>
  );
};

export default TransactionsHistoryPage;