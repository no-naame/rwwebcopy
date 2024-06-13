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
import {Button} from "@/components/ui/button";
import React from "react";
import redOne from "../../public/one.png";
import redTwo from "../../public/Stepper indicatorstepone.png";
import redThree from "../../public/Stepper indicatorstepthree.png";
import redFour from "../../public/Stepper indicatorstepfour.png";
const list = [{
    img: [Stepone,redOne],
    imgMain: imageone,
    title: "Get Started: Create Your Merchant Account",
    text: `Simply provide your business information and get instant access to a powerful suite of loyalty tools.`
}, {
    img: [steptwo,redTwo],
    imgMain: imagetwo,
    title: "List Your Products & Services",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools."
}, {
    img: [stepthree,redThree],
    imgMain: imagethree,
    title: "Drive Sales with Targeted Offers & Promotions",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools."
}, {
    img: [stepfour,redFour],
    imgMain: imagefour,
    title: "Earnings & Insights: Track Your Success",
    text: "Simply provide your business information and get instant access to a powerful suite of loyalty tools."
}]
export default function Buss() {
    return (
        <>
        <div className="bg-[#FCFCFC] p-8 mt-8 font-inter">
            <div className="text-center">
                <div className="relative p-2">
                    <h1 className="text-6xl max-sm:text-4xl xl:text-7xl font-bold text-black">
                        Say hello to the
                    </h1>
                    <div className="relative flex justify-center items-center flex-wrap">
                        <div className="relative text-center mt-2 max-sm:w-[300px]">
                            <Image
                                className="absolute top-0 left-0 ml-2 px-2 max-sm:p-2"
                                src={overlay}
                                alt="Background"
                            />
                            <h1 className="relative max-sm:text-4xl text-6xl xl:text-7xl my-4 mt-2 font-bold text-black px-10">
                                Rewardwise
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-6xl max-sm:text-4xl xl:text-7xl font-bold text-black">
                                community
                            </h1>
                        </div>
                    </div>
                </div>
                <p className="mt-2 text-2xl max-sm:text-lg font-bold text-[#1F1F1F]">
                    Rewardwise empowers local businesses like shops, restaurants,
                </p>
                <p className="mt-2 text-2xl max-sm:text-lg font-bold text-[#1F1F1F]">
                    vendors, and educational classes to attract customers,
                </p>
                <p className="mt-2 text-2xl max-sm:text-lg font-bold text-[#1F1F1F]">
                    boosting sales and generating leads.
                </p>
            </div>
            <div className="mt-2">
                <img
                    src="https://s3-alpha-sig.figma.com/img/b340/5c7c/dccf1910fca4fbea4a1009a1ef1a706b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiSaWP~QXz2wavfFDr~VX87yS5moM1i05tSgyjwdjlBN5r4JGGXeboqQRGOD~zc2RVUj8KKR2MtWs8CxlUDmOsWeE2xQw~ai4I7qHZbui7Yu3fUv3ZrDn8liFdBgXSDHuodPt9RkoyGrkFo7I7-wXSxfZeT26iYa8ogDyKpciMBCwbOg09R7A1FQ4Q98yZ~t0~bVOpj853Weg4G8N65K3ESXHaPqPG5TZ5Kmm~i2Bu0w6iv0BtNit~uKsANkVerI~5LekafXM9KnyvHIAmZrClhCEn0cOZZcAoBd~i~CZLwj0y3k3VGHrSJ5PNSQqkOEuTH-sxp565coVASFlxmwaQ__"
                    alt="Community"
                    className="px-16"
                />
            </div>
            <div
                className="mt-20 border-[2px] border-[#E3E3E3] bg-white rounded-[36px] mb-20 px-20 py-10 shadow-custom ">
                <div className="flex flex-wrap gap-5 justify-evenly text-center ">
                    <div>
                        <h2 className="text-[62px] font-bold text-[#3947C4]">94%</h2>
                        <p className="text-2xl font-bold text-[#514F6E]">Customer</p>
                        <p className="text-2xl font-bold text-[#514F6E]">Satisfaction</p>
                    </div>
                    <div>
                        <h2 className="text-[62px] font-bold text-[#3947C4]">32M</h2>
                        <p className="text-2xl font-bold text-[#514F6E]">Active</p>
                        <p className="text-2xl font-bold text-[#514F6E]">Users</p>
                    </div>
                    <div>
                        <h2 className="text-[62px] font-bold text-[#3947C4]">90+</h2>
                        <p className="text-2xl font-bold text-[#514F6E]">Seller</p>
                        <p className="text-2xl font-bold text-[#514F6E]">Community</p>
                    </div>
                    <div>
                        <h2 className="text-[62px] font-bold text-[#3947C4]">50%</h2>
                        <p className="text-2xl font-semibold text-[#514F6E] ">Purchase</p>
                        <p className="text-2xl font-semibold text-[#514F6E] ">Frequency</p>
                    </div>
                </div>
            </div>

        <h2 className="text-6xl font-bold text-center text-gray-900 mb-20">
            Grow your Business with <span
            className="text-red-600">RewardWise</span>
        </h2>
        <Steps stepList={list}/>
        <MerchantReview/>

        </div>
    <div
        className="mt-12 bg-[#C5393A] flex justify-center items-center gap-10 text-white text-center py-4 h-[168px]">
        <h3 className="text-4xl font-medium mt-1">Ready to get started?</h3>
        <Button className="bg-white mt-[3px] text-red-600 font-medium py-2 px-4 rounded-3xl hover:bg-gray-100">
            Download App
        </Button>
    </div>
</>


)
    ;
}