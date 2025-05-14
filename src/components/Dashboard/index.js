import React from "react";
import AccountSummary from "./AccountSummary"
import LiveTrades from "./LiveTrades";
import AccountStatus from "./AccountStatus";

const Dashboard = () => {
  return (
    <>
      <AccountSummary />
       <LiveTrades />
     <AccountStatus />
    </>
  );
};

export default Dashboard;
