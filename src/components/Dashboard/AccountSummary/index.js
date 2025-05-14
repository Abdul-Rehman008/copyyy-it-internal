import React from "react";
import "./style.scss";
import { IconEyeOff } from "@tabler/icons-react";
import tradingLogo from "../../../assets/img/tradingLogo.svg";
import { ProgressBar } from "react-bootstrap";

const statData = [
  {
    title: "Avg. Trade (ROI%)",
    value: "146%",
    color: "pink",
    icon: "bi-graph-up-arrow",
    progress: 146,
    variant: "danger",
  },
  {
    title: "Performance YTD",
    value: "322",
    color: "blue",
    icon: "bi-bar-chart-line",
    progress: 322,
    variant: "info",
  },
  {
    title: "Win Rate",
    value: "87%",
    color: "green",
    icon: "bi-check-circle",
    progress: 87,
    variant: "success",
  },
  {
    title: "Monthly Growth",
    value: "23%",
    color: "red",
    icon: "bi-graph-up",
    progress: 23,
    variant: "warning",
  },
];

const AccountSummary = () => {
  return (
    <section className="d-flex flex-lg-nowrap flex-wrap  justify-content-between accountSummaryWrapper">
      {/* Left Block */}
      <div className="bg-white rounded-3 shadow-black d-flex flex-sm-row flex-column justify-content-between align-items-sm-center flex-grow-1 p-4">
        <div className="accountSummaryContent">
          <h4 className="summaryHeading">
            Your trading account <IconEyeOff size={16} className="ms-1" />
          </h4>
          <p className="currency">Binance Futures USDT</p>
          <h6 className="pricing">
            <span>$</span>2769
          </h6>
          <p className="summaryHistory">
            +123,67% <span>since last week</span>
          </p>
        </div>
        {/* Stat blocks (mapped) */}
        <div className="statsBlock d-flex flex-wrap ms-sm-4">
          {statData.map((stat, index) => (
            <div key={index} className="tradingStats">
              <div className={`tradingContent text-${stat.color}`}>
                <img src={tradingLogo} alt="tradingLogo" />
                <p className="mb-0">{stat.title}</p>
              </div>
              <div className="statsPercentage">{stat.value}</div>
              <ProgressBar
                now={stat.progress > 100 ? 100 : stat.progress}
                variant={stat.variant}
                style={{ height: "6px" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Block */}
      <div className="projectAccount">
        <div className="text-project">
          Projected Account
          <br />
          <strong>Next Year</strong>
        </div>
        <div className="projectAccountStats my-2 rounded-circle d-flex flex-column align-items-center justify-content-center text-white fw-bold">
          <div className="price">$12,765</div>
          <div className="statsValue">+9986%</div>
        </div>
        <div className="text-trading">Amongst all trading groups</div>
      </div>
    </section>
  );
};

export default AccountSummary;
