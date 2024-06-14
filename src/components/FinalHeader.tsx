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
    const [hoveredItem, setHoveredItem] = useState(null);
    const [clickedItem, setClickedItem] = useState(null);

    const handleMouseEnter = (item: any) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleClick = (item: any) => {
        setClickedItem(item);
    };

    return (
        <div>
            <div className="h-24">
                <div className="fixed h-4 bg-white left-0 w-full z-[5000]"></div>
                <div className="fixed mt-4 h-30 left-0 w-full z-[5000]">
                    <div
                        className="flex max-mxl:justify-evenly bg-[#FCFCFC] justify-between shadow-top-bottom py-2 max-md:justify-between">
                        <div className="flex w-1/5 justify-start items-center">
                            <Link href="/" className="logo ml-[80px] max-mxl:ml-2 flex gap-2">
                                <Image
                                    className="h-8 w-8"
                                    src={HeaderLogo}
                                    alt="Rewardwise-logo"
                                />
                                <span className="text-[#C53939] font-[550] font-lato text-[23px] mt-1">
                  Rewardwise
                </span>
                            </Link>
                        </div>

                        <div className="elements flex w-3/5 justify-center align-middle max-mxl:hidden">
                            <div
                                className=" gap-[68px] flex font-medium justify-center text-black/80 font-inter text-xl mt-2">
                                <Link href="/merchant" className="flex flex-col ">
                  <span
                      onMouseEnter={() => handleMouseEnter("merchant")}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick("merchant")}
                      className={`merchant p-3 cursor-pointer flex justify-center items-center hover:text-[#C43939] ${
                          hoveredItem === "merchant" || clickedItem === "merchant"
                              ? "text-[#C43939]"
                              : ""
                      }`}
                  >
                    Merchant
                  </span>

                                    {clickedItem === "merchant" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}

                                    {clickedItem !== "merchant" && (
                                        <div className="rounded-t border-[#FCFCFC] border-b-8"></div>
                                    )}
                                </Link>

                                <div className="flex flex-col">
                  <Link
                      href="/pricing"
                      onMouseEnter={() => handleMouseEnter("pricing")}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick("pricing")}
                      className={`pricing p-3 cursor-pointer flex justify-center items-center hover:text-[#C43939]  duration-400 ${
                          hoveredItem === "pricing" || clickedItem === "pricing"
                              ? "text-[#C43939]"
                              : ""
                      }`}
                  >
                    Pricing
                  </Link>

                                    {clickedItem === "pricing" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <Link
                                        href="/about"
                                        onMouseEnter={() => handleMouseEnter("about")}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleClick("about")}
                                        className={`about p-3 cursor-pointer flex justify-center items-center hover:text-[#C43939]  duration-400 ${
                                            hoveredItem === "about" || clickedItem === "about"
                                                ? "text-[#C43939]"
                                                : ""
                                        }`}
                                    >
                                        About Us
                                    </Link>

                                    {clickedItem === "about" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                  <span
                      onMouseEnter={() => handleMouseEnter("blog")}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick("blog")}
                      className={`blog p-3 cursor-pointer flex justify-center items-center hover:text-[#C43939]  duration-400 ${
                          hoveredItem === "blog" || clickedItem === "blog"
                              ? "text-[#C43939]"
                              : ""
                      }`}
                  >
                    Blog
                  </span>

                                    {clickedItem === "blog" && (
                                        <div className="rounded-t border-[#C43939] border-b-8"></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="download w-1/5 flex items-center justify-end">
                            <button
                                className="px-4 py-3 text-[#FCFCFC] max-mxl:text-sm font-inter max-mxl:mr-2 mr-[80px] bg-[#C5393A] rounded-[30px] font-medium text-[18px]">
                                <div className="flex gap-[10px] justify-center">
                                    <Download className="max-mxl:hidden"/>
                                    <div className="max-mxl:w-24">Download App</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalHeader;