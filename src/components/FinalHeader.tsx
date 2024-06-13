"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderLogo from "../../public/final_header_logo.png";
import MerchantDropdown from "./MerchantDropdown";
// import Download from "../../public/Download.png";
import { stringify } from "querystring";
import Link from "next/link";
import {Download} from "lucide-react";

const FinalHeader = () => {
    const [isMerchantDropdownVisible, setIsMerchantDropdownVisible] =
        useState(false);

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item: any) => {
        closeMerchant();
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const openMerchant = () => {
        handleMouseEnter("merchant");
        setIsMerchantDropdownVisible(true);
    };

    const closeMerchant = () => {
        setIsMerchantDropdownVisible(false);
    };

    return (
        <div>
            <div className="h-24 p-[20px]">
                <div className="fixed h-30 left-0 w-full z-[5000]">
                    <div className="flex bg-[#FCFCFC] justify-between shadow-md py-6 max-md:justify-between">
                        <div className="flex w-1/5 justify-center items-center max-md:w-2/5 max-md:ml-2">
                            <Link href="/" className="logo flex gap-2">
                                <Image
                                    className="h-8 w-8"
                                    src={HeaderLogo}
                                    alt="Rewardwise-logo"
                                />
                                <span className="logo_text text-[#C43939] font-medium font-lato text-[23px] mt-1">
                  Rewardwise
                </span>
                            </Link>
                        </div>

                        <div className="elements flex w-3/5 justify-center align-middle max-md:hidden">
                            <div className=" gap-6 flex font-medium font-inter text-xl ">
                                <div className="flex flex-col">
                  <Link
                      href="/merchant"
                      onMouseEnter={openMerchant}
                      onMouseLeave={handleMouseLeave}
                      className={`merchant md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 ${
                          hoveredItem === "merchant" ? "text-[#C43939]" : ""
                      }`}
                  >
                    Merchant
                  </Link>

                                    {hoveredItem === "merchant" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                  <Link
                      href="/pricing"
                      onMouseEnter={() => handleMouseEnter("pricing")}
                      onMouseLeave={handleMouseLeave}
                      className={`pricing md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 ${
                          hoveredItem === "pricing" ? "text-[#C43939]" : ""
                      }`}
                  >
                    Pricing
                  </Link>

                                    {hoveredItem === "pricing" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <Link
                                        href="/About"
                                        onMouseEnter={() => handleMouseEnter("about")}
                                        onMouseLeave={handleMouseLeave}
                                        className={`about md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 ${
                                            hoveredItem === "about" ? "text-[#C43939]" : ""
                                        }`}
                                    >
                                        About
                                    </Link>
                                    {hoveredItem === "about" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                  <span
                      onMouseEnter={() => handleMouseEnter("customer")}
                      onMouseLeave={handleMouseLeave}
                      className={`customer md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 ${
                          hoveredItem === "customer" ? "text-[#C43939]" : ""
                      }`}
                  >
                    Blog
                  </span>
                                    {hoveredItem === "customer" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="download w-1/5 flex items-center max-md:w-3/5 max-md:justify-end max-md:mr-4">

                            <button
                                className="px-4 h-10 text-[#FCFCFC]   font-inter bg-[#C5393A] rounded-3xl font-normal text-[18px]">

                                <div className="flex gap-2 py-2"><Download/> Download App</div>

                            </button>
                        </div>
                    </div>
                </div>
                {/*{isMerchantDropdownVisible && (*/}
                {/*    <MerchantDropdown*/}
                {/*        setIsMerchantDropdownVisible={setIsMerchantDropdownVisible}*/}
                {/*    />*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default FinalHeader;