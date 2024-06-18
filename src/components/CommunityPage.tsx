import Image from "next/image";
import overlay from "../../public/overlay.svg";
import MerchantReview from "@/components/merchantReview";
import Steps from "@/components/Steps";
import Slider from "@/components/Slider";
import Stepone from "../../public/one.png";
import imageone from "../../public/StepOneMain.png";
import steptwo from "../../public/two.png";
import imagetwo from "../../public/StepTwoMain.png";
import stepthree from "../../public/three.png";
import imagethree from "../../public/StepThreeMain.png";
import stepfour from "../../public/four.png";
import imagefour from "../../public/StepFourMain.jpeg";
import { Button } from "@/components/ui/button";
import React from "react";
import redOne from "../../public/one.png";
import redTwo from "../../public/Stepper indicatorstepone.png";
import redThree from "../../public/Stepper indicatorstepthree.png";
import redFour from "../../public/Stepper indicatorstepfour.png";
import MerchantMobile from "../../public/MerchantMobile.png"
const list = [
  {
    img: [Stepone, redOne],
    imgMain: imageone,
    title: "Get Started: Create Your Merchant Account",
    text: `Simply provide your business information and get instant access to a powerful suite of loyalty tools.`,
  },
  {
    img: [steptwo, redTwo],
    imgMain: imagetwo,
    title: "List Your Products & Services",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools.",
  },
  {
    img: [stepthree, redThree],
    imgMain: imagethree,
    title: "Drive Sales with Targeted Offers & Promotions",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools.",
  },
  {
    img: [stepfour, redFour],
    imgMain: imagefour,
    title: "Earnings & Insights: Track Your Success",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools.",
  },
];
export default function Buss() {
  return (
    <>
      <div className="bg-white py-16 mt-8 font-inter">
        <div className="text-center">
          <div className="relative p-2">
            <div className="relative flex justify-center items-center max-sm:gap-1">
              <div className="relative text-center">
                <Image
                  className="absolute max-sm:ml-2 xl:inset-4 max-sm:inset-1 md:inset-4"
                  src={overlay}
                  alt="Background"
                />
                <h1 className="relative max-md:text-4xl xl:ml-2 text-[62px] font-bold text-[rgba(0,0,0,0.80)] px-5 pl-5 md:px-12">
                  Welcome
                </h1>
              </div>
              <div>
                <h1 className="text-[62px] max-md:text-4xl max-sm:mr-4 font-bold text-[rgba(0,0,0,0.80)]">
                  to the
                </h1>
              </div>
            </div>
            <div className="flex justify-center font-bold xl:leading-[80px] md:gap-5 max-md:flex-col max-md:leading-[48px]">
              <h1 className="text-[76px] text-[#C5393A] max-md:text-[44px]">
                Rewardwise
              </h1>
              <h1 className="text-[62px] xl:mt-1 md:mt-3 text-[rgba(0,0,0,0.80)] max-md:text-4xl">
                community
              </h1>
            </div>
          </div>

          <div className="max-sm:px-10">
            <p className="max-sm:hidden mt-4 text-[22px] xl:text-2xl xl:leading-6 font-normal text-[rgba(0,0,0,0.70)]">
              Rewardwise empowers local businesses like shops, restaurants,
              vendors, and
            </p>

            <p className="max-sm:hidden xl:mt-2 text-[22px] xl:text-2xl xl:leading-6 font-normal text-[rgba(0,0,0,0.80)]">
              educational classes to attract customers, boosting sales and
              generating leads.
            </p>

            <p className="sm:hidden text-[22px] mt-4 font-normal text-[rgba(0,0,0,0.70)]">
              Rewardwise empowers local businesses like shops, restaurants,
              vendors and educational classes to attract customers, boosting
              sales and generating leads.
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/b340/5c7c/dccf1910fca4fbea4a1009a1ef1a706b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiSaWP~QXz2wavfFDr~VX87yS5moM1i05tSgyjwdjlBN5r4JGGXeboqQRGOD~zc2RVUj8KKR2MtWs8CxlUDmOsWeE2xQw~ai4I7qHZbui7Yu3fUv3ZrDn8liFdBgXSDHuodPt9RkoyGrkFo7I7-wXSxfZeT26iYa8ogDyKpciMBCwbOg09R7A1FQ4Q98yZ~t0~bVOpj853Weg4G8N65K3ESXHaPqPG5TZ5Kmm~i2Bu0w6iv0BtNit~uKsANkVerI~5LekafXM9KnyvHIAmZrClhCEn0cOZZcAoBd~i~CZLwj0y3k3VGHrSJ5PNSQqkOEuTH-sxp565coVASFlxmwaQ__"
            alt="Community"
            className="md:px-20 max-sm:hidden"
          />
          <Image
            src={MerchantMobile}
            className="sm:hidden object-cover"
            alt="MerchantMobile"
          ></Image>
        </div>
        <div className="mt-20 border-[2px] border-[#E3E3E3] bg-white xl:rounded-[36px] rounded-[24px] m-5 xl:mb-20 xl:px-20 xl:py-10 shadow-custom ">
          <div className="flex flex-wrap-reverse gap-3 p-6 xl:gap-5 justify-evenly text-center ">
            <div>
              <h2 className="text-[62px] max-sm:text-[40px] font-bold text-[#3947C4]">
                94%
              </h2>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Customer
              </p>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Satisfaction
              </p>
            </div>
            <div>
              <h2 className="text-[62px] max-sm:text-[40px] font-bold text-[#3947C4]">
                32M
              </h2>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Active
              </p>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Users
              </p>
            </div>
            <div>
              <h2 className="text-[62px] max-sm:text-[40px] font-bold text-[#3947C4]">
                90+
              </h2>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Seller
              </p>
              <p className="text-2xl max-sm:text-[18px] font-bold text-[#514F6E]">
                Community
              </p>
            </div>
            <div>
              <h2 className="text-[62px] max-sm:text-[40px] font-bold text-[#3947C4]">
                50%
              </h2>
              <p className="text-2xl max-sm:text-[18px] font-semibold text-[#514F6E] ">
                Purchase
              </p>
              <p className="text-2xl max-sm:text-[18px] font-semibold text-[#514F6E] ">
                Frequency
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-6xl font-bold text-center text-gray-900 mb-20">
          Grow your Business with{" "}
          <span className="text-red-600">RewardWise</span>
        </h2>
        <Steps stepList={list} />
        <MerchantReview />
      </div>

      <div className="mt-12 bg-[#C5393A] flex justify-center items-center gap-10 text-white text-center py-4 h-[168px]">
        <h3 className="text-4xl font-medium mt-1">Ready to get started?</h3>
        <Button className="bg-white mt-[3px] text-red-600 font-medium py-2 px-4 rounded-3xl hover:bg-gray-100">
          Download App
        </Button>
      </div>
    </>
  );
}
