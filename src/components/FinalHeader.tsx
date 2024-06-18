"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderLogo from "../../public/final_header_logo.png";
import Link from "next/link";
import { Download, AlignJustify } from "lucide-react";

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

  const removeHoverClick = () => {
    setHoveredItem(null);
    setClickedItem(null);
  };

  return (
    <div>
      <div className="mxl:h-20">
        <div></div>
        <div className="fixed h-30 left-0 w-full z-[5000] ">
          <div className="flex bg-[#FCFCFC] justify-between shadow-mobileShadow py-2 max-md:justify-between">
            <div className="flex w-1/5 justify-start items-center max-mxl:hidden">
              <Link
                href="/home"
                onClick={removeHoverClick}
                className="logo ml-[80px]  flex gap-2"
              >
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
              <div className=" gap-[68px] flex font-medium justify-center text-black/80 font-inter text-xl mt-2">
                <Link href="/merchant" className="flex flex-col ">
                  <span
                    onMouseEnter={() => handleMouseEnter("merchant")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("merchant")}
                    className={`merchant p-3 cursor-pointer flex justify-center items-center hover:text-[#C5393A] ${
                      hoveredItem === "merchant" || clickedItem === "merchant"
                        ? "text-[#C5393A]"
                        : ""
                    }`}
                  >
                    Merchant
                  </span>

                  {clickedItem === "merchant" && (
                    <div className="rounded-t border-[#C5393A] border-b-8"></div>
                  )}

                  {clickedItem !== "merchant" && (
                    <div className="rounded-t border-[#FCFCFC] border-b-8"></div>
                  )}
                </Link>

                <Link href="/pricing" className="flex flex-col">
                  <span
                    onMouseEnter={() => handleMouseEnter("pricing")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("pricing")}
                    className={`pricing p-3 cursor-pointer flex justify-center items-center hover:text-[#C5393A]  duration-400 ${
                      hoveredItem === "pricing" || clickedItem === "pricing"
                        ? "text-[#C5393A]"
                        : ""
                    }`}
                  >
                    Pricing
                  </span>

                  {clickedItem === "pricing" && (
                    <div className="rounded-t border-[#C5393A] border-b-8"></div>
                  )}
                </Link>

                <div className="flex flex-col">
                  <Link
                    href="/about"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("about")}
                    className={`about p-3 cursor-pointer flex justify-center items-center hover:text-[#C5393A]  duration-400 ${
                      hoveredItem === "about" || clickedItem === "about"
                        ? "text-[#C5393A]"
                        : ""
                    }`}
                  >
                    About Us
                  </Link>

                  {clickedItem === "about" && (
                    <div className="rounded-t border-[#C5393A] border-b-8"></div>
                  )}
                </div>

                <div className="flex flex-col">
                  <span
                    onMouseEnter={() => handleMouseEnter("blog")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("blog")}
                    className={`blog p-3 cursor-pointer flex justify-center items-center hover:text-[#C5393A]  duration-400 ${
                      hoveredItem === "blog" || clickedItem === "blog"
                        ? "text-[#C5393A]"
                        : ""
                    }`}
                  >
                    Blog
                  </span>

                  {clickedItem === "blog" && (
                    <div className="rounded-t border-[#C5393A] border-b-8"></div>
                  )}
                </div>
              </div>
            </div>

            <div className="download w-1/5 flex items-center justify-end max-mxl:hidden">
              <button className="px-4 py-3 text-[#FCFCFC] font-inter mr-[80px] bg-[#C5393A] rounded-[30px] font-medium text-[18px] max-mxl:hidden">
                <div className="flex gap-[10px] justify-center">
                  <Download />
                  <div>Download App</div>
                </div>
              </button>
            </div>

            <div className="flex justify-evenly w-full mxl:hidden py-3">
              <div className="mxl:hidden ">
                <AlignJustify className=" text-[#C5393A] h-[22px] w-[22px] " />
              </div>

              <div className="px-8">
                <Link href="/home" className="flex gap-2">
                  <Image
                    className="h-[22px] w-[22px]"
                    src={HeaderLogo}
                    alt="Rewardwise-logo"
                  />
                  <span className="text-[#C43939] font-[595] font-lato text-[18px]">
                    Rewardwise
                  </span>
                </Link>
              </div>

              <div className="text-[#C5393A] mxl:hidden ">
                <Download className="h-[22px] w-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalHeader;
