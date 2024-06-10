"use client";

import React, { useState } from "react";

type SetIsMerchantDropdownVisible = (isVisible: boolean) => void;
const MerchantDropdown = ({ setIsMerchantDropdownVisible }: { setIsMerchantDropdownVisible: SetIsMerchantDropdownVisible }) => {
    return (
        <div
            className="Merchant_Dropdown flex justify-center fixed align-middle items-center z-[500] mt-[105px] w-[100vw]">
            <div
                onMouseEnter={() => setIsMerchantDropdownVisible(true)}
                onMouseLeave={() => setIsMerchantDropdownVisible(false)}
                className="flex justify-center align-middle gap-6 rounded-xl bg-[#FCFCFC] shadow-md px-8 py-3"
            >
                <div className="industry w-26">
                    <div className="w-24">
                        <span className="text-[15px] font-[550]">Industry</span>
                    </div>

                    <div className="text-[14px] items flex flex-col mt-3 font-[350]">
            <span
                className="mt-2 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Restaurants
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Retail
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Education
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Salon & Spa
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Tours & Travels{" "}
            </span>
                    </div>
                </div>

                <div className="Membership w-32">
                    <div className="w-28 ">
                        <span className="text-[15px] font-[550]">Membership</span>
                    </div>

                    <div className="text-[14px] items flex flex-col mt-3 font-[350]">
            <span
                className="mt-2 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Gyms
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Clubs
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Library
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Others
            </span>
                    </div>
                </div>

                <div className="industry w-26">
                    <div className="w-24 ">
                        <span className="text-[15px] font-[550]">Resources</span>
                    </div>

                    <div className="text-[14px] items flex flex-col mt-3 font-[350]">
            <span
                className="mt-2 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Learn
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              ROI (Return on
              <br/>
              Investment)
              <br/>
              Calculator
            </span>
                    </div>
                </div>

                <div className="industry w-26">
                    <div className="w-24 ">
                        <span className="text-[15px] font-[550]">Help</span>
                    </div>

                    <div className="text-[14px] items flex flex-col mt-3 font-[350]">
            <span
                className="mt-2 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              Getting Started
            </span>
                        <span
                            className="mt-3 cursor-pointer hover:border-[#C43939] hover:text-[#C43939] hover:border-r-4 rounded-sm transition hover:scale-110 duration-400">
              FAQ's
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantDropdown;