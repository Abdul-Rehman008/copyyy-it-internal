import React from "react";
import Slider from "react-slick";
import { IconRefresh } from "@tabler/icons-react";
import "./style.scss"; // Optional: Add styles here
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const trades = [
  {
    symbol: "BTC",
    type: "LONG",
    tp: "TP 2/4",
    return: "9990%",
    color: "green",
  },
  {
    symbol: "1000xSATS",
    type: "LONG",
    tp: "TP 2/6",
    return: "2%",
    color: "green",
  },
  { symbol: "XRP", type: "SHORT", tp: "TP 0/5", return: "-35%", color: "red" },
  {
    symbol: "1000xSATS",
    type: "LONG",
    tp: "TP 2/6",
    return: "2%",
    color: "green",
  },
  { symbol: "XRP", type: "SHORT", tp: "TP 0/5", return: "-35%", color: "red" },
  { symbol: "JASMY", type: "LONG", tp: "TP 1/3", return: "0%", color: "gray" },
];

const sliderSettings = {
  dots: true,
  // centerMode: false,
  infinite: true,
  // rtl: true,
  // initialSlide: 1,
  // centerPadding: "100px",
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  cssEase: "linear",
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1199,
      sliderSettings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      sliderSettings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      sliderSettings: {
        slidesToShow: 1,
      },
    },
  ],
};

const LiveTrades = () => {
  return (
    <section className="liveTradesWrapper bg-white rounded-3 shadow-black ps-4 pe-0 pb-4 my-5">
      <div className="d-flex gap-5 align-items-center mb-3 ps-1 p-4">
        <h5 className="mb-0 fw-bold">
          Live Trades: <span className="text-dark">12</span>
        </h5>
        <button className="btn btn-dark btn-sm d-flex align-items-center gap-1">
          Refresh <IconRefresh size={16} />
        </button>
      </div>

      <Slider {...sliderSettings}>
        {trades.map((trade, idx) => (
          <div key={idx} className="pe-4">
            <div className="liveTradingCard d-flex flex-row justify-content-between align-items-center p-3 rounded-3">
              {/* <div> */}
              <div>
                <h6 className="mb-1">{trade.symbol}</h6>
                <div className="cardText small">
                  {trade.type} <span className="ms-1">{trade.tp}</span>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center fw-bold tradingStats"
                  style={{
                    borderColor:
                      trade.color === "green"
                        ? "#0fb700"
                        : trade.color === "red"
                        ? "#ff0027"
                        : "#aaa",
                  }}
                >
                  {trade.return}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="historyCta">
        <Link to="#">See History &gt;</Link>
      </div>
    </section>
  );
};

export default LiveTrades;
