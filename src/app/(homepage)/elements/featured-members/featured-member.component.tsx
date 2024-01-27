"use client";
import React from "react";
import Slider from "react-slick";
import "./featured-members.css";
import { IFeatureMember } from "@/types";
import MemberCard from "@/components/molecules/member-card";

const FeaturedMemberComponent = ({ featureMemberList }: any) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="pt-70 md:pt-64 pb-32 relative overflow-hidden">
        <div className="main-container">
          <h2 className="text-white-heading text-24 font-semibold leading-32 mb-16">
            Featured Members ✨
          </h2>
        </div>
        <div className="feature-member-slider">
          <Slider {...settings}>
            {featureMemberList.map((val: IFeatureMember, i: number) => (
              <MemberCard
                key={`feature_member_key_${i}`}
                {...val}
                type="featured"
              />
            ))}
          </Slider>

          {featureMemberList?.length == 0 && (
            <div className="main-container">
              <p className="text-white-heading text-16 font-normal leading-24">
                Currently, there are no featured members.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedMemberComponent;
