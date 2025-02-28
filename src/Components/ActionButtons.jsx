import React from "react";

export const ActionButtons = () => {
  const actions = [
    { name: "Wire Transfer", icon: "Svg/cash-svgrepo-com.svg" },
    { name: "Pay Bills", icon: "Svg/bill-list-svgrepo-com.svg" },
    { name: "Recharge Wallet", icon: "Svg/wallet-svgrepo-com.svg" },
    { name: "Mobile Recharge", icon: "Svg/smartphone-svgrepo-com.svg" },
    { name: "Buy Crypto", icon: "Svg/buy-crypto-svgrepo-com.svg" },
    { name: "Deposit Funds", icon: "Svg/atm-deposit-svgrepo-com.svg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 bg-white rounded-md shadow-md  mx-4 mt-6">
      {actions.map((action, index) => (
        <button
          key={index}
          className="p-4 text-center rounded-lg shadow-sm flex flex-col items-center justify-center"
        >
          <img
            src={action.icon}
            alt={`${action.name} icon`}
            className="w-10 h-10 mb-2"
          />
          <p className="text-sm whitespace-nowrap">{action.name}</p>
        </button>
      ))}
    </div>
  );
};
