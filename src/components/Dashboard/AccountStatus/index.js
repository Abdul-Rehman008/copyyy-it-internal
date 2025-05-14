// src/components/AccountStatus.jsx
import React from "react";
import Slider from "react-slick";
import { IconCheck, IconX } from "@tabler/icons-react";
import "./style.scss";
import infoIcon from '../../../assets/img/infoIcon.png'
import binanceLogo from "../../../assets/img/binanceLogo.svg";

const statusItems = [
  {
    title: "Exchange connected",
    status: "success",
    subtitle: (
      <img src={binanceLogo} alt="binance" style={{ height: "15px" }} />
    ),
  },
  {
    title: "Subscribed",
    subtitle: "Tier 2  $99/month",
    status: "success",
  },
  {
    title: "Minimum Funding",
    subtitle: (
      <>
        Required: $500 <img src={infoIcon} alt="infoIcon" />
      </>
    ),
    status: "fail",
  },
  {
    title: "Review Submitted",
    subtitle: "Submit Now >",
    status: "fail",
  },
  {
    title: "Security (OTP) Setup",
    status: "success",
  },
];

const AccountStatus = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="accountStatusWrapper mt-5">
      <h2 className="px-4">Status</h2>
      <Slider {...settings}>
        {statusItems.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="accountStatusCard position-relative shadow-sm bg-white p-3 h-100">
              <div
                className={`status-badge bg-${
                  item.status === "success"
                    ? "green-gardient"
                    : "orange-gardient"
                }`}
              >
                {item.status === "success" ? (
                  <IconCheck size={14} color="white" />
                ) : (
                  <IconX size={14} color="white" />
                )}
              </div>
              <h6 className="mb-1">{item.title}</h6>
              <p className="status-card-text">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AccountStatus;
