// components/ShoppingBanner.tsx

import React from 'react';
import Image from 'next/image';
import google from '../../public/GooglePlay.png'
import apple from '../../public/AppStore.png'
import yellowImage from '../../public/yellow_section_image.png'
import mainPagePic from '../../public/hero_section.png'
import aurbhi from '../../public/aur bhiaurBhi.png'
import Slider from "@/components/Slider";
import Steps from "@/components/Steps";
import Trumpet from '../../public/Trumpet.png'
import V1 from '../../public/Vector 45pur.png'
import V2 from '../../public/Vector 44pursl.png'
import V3 from '../../public/Vector 43purs.png'
import Jumping from '../../public/youngWomanJumping.png'
import Binoculars from '../../public/handHoldingBinoculars.png'
import main2 from '../../public/Main.png'
import Stepone from "../../public/one.png";
import imageone from "../../public/StepOneMain.png";
import steptwo from "../../public/two.png";
import imagetwo from "../../public/StepTwoMain.png";
import stepthree from "../../public/three.png";
import imagethree from "../../public/StepThreeMain.png";
import stepfour from "../../public/four.png";
import imagefour from "../../public/StepFourMain.jpeg";
const list = [{
    img: Stepone,
    imgMain: imageone,
    title: "Download App from Google Play Store",
    text: `Download the app from the <a href="#" className="text-[#bd1e59]">Google Play Store</a> and SignUp or Login to your account.`
}, {
    img: steptwo,
    imgMain: imagetwo,
    title: "Shop",
    text: "Browse and shop for café treats, restaurant meals, electronics, fashion, and more, all in one convenient app, mirroring your favorite local or preferred stores."
}, {
    img: stepthree,
    imgMain: imagethree,
    title: "Scan",
    text: "Simply scan the shop's QR code via the app and complete your payment securely through online mode."
}, {
    img: stepfour,
    imgMain: imagefour,
    title: "Redeem",
    text: "Maximize your savings by enjoying exclusive offers, discounts, vouchers, and loyalty rewards from businesses, while simultaneously boosting the coin value for the respective shop."
}]


const ShoppingBanner = () => {
    return(
        <>
            <div className="relative max-w-[100%] mb-[120px] overflow-x-hidden">
                <div className="mt-[10px] p-3 flex gap-1 justify-between items-center max-md:justify-center">
                    <div className=" shopping z-10 ml-10">
                        <div className="text-5xl font-bold text-start text-[#272727]">Ab pay karna</div>
                        <div className="text-start text-[33px] mt-2 font-semibold text-[#272727]">
                            <h2 className="ml-[80px] max-w-[200px] -rotate-6 mt-1 relative right-4">
                                <Image src={aurbhi} alt='aurbhi'/>
                            </h2>
                        </div>
                        <div className="text-5xl font-bold text-start flex gap-2">
                            <span className='text-[#272727]'>hua </span>
                            <span className="relative top-6 text-4xl -rotate-6 font-handwritten">^</span>
                            <span className="text-[#C43939]">Mazedarr!</span>
                        </div>
                        <div className="mt-6 text-start font-semibold font-lato text-[#000] text-[22px] z-50">
                            Unlock rewards and on every transaction.<br/>
                            Only on RewardWise!
                        </div>
                        <div className="Download mt-[350px]">
                            <div className="font-semibold text-center max-w-[80%] font-lato">
                                Download The App NOW!
                            </div>
                            <div className="button flex justify-between items-center mt-[10px]">
                                <div className=' max-w-[180px]'>
                                    <Image src={google} alt='google'/>
                                </div>
                                <div className='max-w-[190px]'>
                                    <Image src={apple} alt='appstore'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative ml-6 z-0'>
                        <Image
                            src={mainPagePic}
                            alt="mainPic"
                            className='max-md:absolute max-md:hidden'
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#FBE74E] mb-[30px] p-4 w-[100%] overflow-hidden">
                <div className="flex justify-evenly flex-wrap items-center gap-7">
                    <div className="max-w-[600px] scale-125 ">
                        <Image
                            src={yellowImage}
                            alt="Happy Shopper"
                        />
                    </div>
                    <div className="">
                        <div className="flex items-start">
                            <div className="text-7xl font-passionOne mr-1 max-md:mb-4">&#8220;</div>
                            <div className="text-4xl font-lato leading-relaxed max-md:text-3xl max-md:leading-normal">
                                I deserve the bonuses that <br/>
                                come with my spending. Why <br/>
                                not take advantage of all the <br/>
                                extras available to me?
                                <span className="text-7xl ml-2 font-passionOne">&#8221;</span>
                            </div>
                        </div>
                        <footer className="mt-12 text-right max-w-[83%]">
                            <p className="text-2xl font-lato">- Nisha, Mumbai</p>
                        </footer>
                    </div>
                </div>
            </div>

            <Slider/>
            <h3 className="text-xl ml-16 font-light text-black max-md:max-w-full">Join your favourite loyalty
                program</h3>
            <h3 className=" text-2xl ml-16 font-medium text-black max-md:max-w-full">In just 4 steps</h3>
            <Steps stepList={list}/>

            <div className='p-[20px]'>
                <div className=' text-5xl p-[20px] mx-[100px] max-md:mx-6 text-center font-semibold'>
                    Join the <span className=' text-[#C5393A]'>loyalty programs</span> that rewards you on <span
                    className='text-[#C5393A]'>every transaction</span>
                </div>
            </div>
            <div className='bg-[#FFCB33] relative flex justify-between overflow-hidden'>
                <div className='left relative flex justify-center items-center right-5'>
                    <Image src={Jumping} alt='jumping' height={450} width={450}
                           className='z-10 scale-[1.2] relative max-md:absolute top-1 -right-28 mt-40 mb-40'/>
                    <Image src={V1} alt='V1' className='absolute scale-[1.5] -left-14'/>
                    <Image src={V2} alt='V2' className=' absolute scale-[1.1] -left-32 top-24 z-20'/>
                    <Image src={V3} alt='V3' className=' absolute  -left-44'/>
                </div>
                <div className='center flex flex-col items-center justify-center gap-28 mt-16 mb-32'>
                    <div className='flex flex-col items-end mt-7'>
                        <Image src={main2} alt='Exp1' className='scale-[1.2] z-0 relative left-16 bottom-6'/>
                    </div>
                    <div className=''>
                        <div className=' text-right text-2xl'>Download the app now:</div>
                        <Image width={180} height={70} src={google} alt='google'/>
                    </div>
                </div>
                <div className='right flex flex-col justify-between'>
                    <Image src={Trumpet} className='relative self-end' width={252} height={283} alt='trumpet'/>
                    <Image src={Binoculars} width={350} height={250} className='scale-[1.2] relative' alt='binoculars'/>
                </div>
            </div>

        </>

    );


}

export default ShoppingBanner;