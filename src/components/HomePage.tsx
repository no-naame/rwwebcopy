import React from 'react';
import Image from 'next/image';
import google from '../../public/GooglePlay.png'
import googles from '../../public/GooglePlay.png'
import apple from '../../public/AppStore.png'
import yellowImage from '../../public/yellow_section_image.png'
import homepage from '../../public/Hompage.png'
import aurbhi from '../../public/aur bhiaurBhi.png'
import maurbhi from '../../public/Mobileaurbhi.png'
import newImage from '../../public/newPartFinal.png'
import Slider from "@/components/Slider";
import Steps from "@/components/Steps";
import Stepone from "../../public/Stepper indicator.png";
import imageone from "../../public/StepOneMain.png";
import steptwo from "../../public/two.png";
import imagetwo from "../../public/StepTwoMain.png";
import stepthree from "../../public/three.png";
import imagethree from "../../public/StepThreeMain.png";
import stepfour from "../../public/four.png";
import imagefour from "../../public/StepFourMain.jpeg";
import redOne from "../../public/one.png"
import redTwo from "../../public/Stepper indicatorstepone.png"
import redThree from "../../public/Stepper indicatorstepthree.png"
import redFour from "../../public/Stepper indicatorstepfour.png"
const list = [{
    img: [Stepone,redOne],
    imgMain: imageone,
    title: "Download App from Google Play Store",
    text: `Download the app from the <a href="#" className="text-[#bd1e59]">Google Play Store</a> and SignUp or Login to your account.`
}, {
    img: [steptwo,redTwo],
    imgMain: imagetwo,
    title: "Shop",
    text: "Browse and shop for café treats, restaurant meals, electronics, fashion, and more, all in one convenient app, mirroring your favorite local or preferred stores."
}, {
    img: [stepthree,redThree],
    imgMain: imagethree,
    title: "Scan",
    text: "Simply scan the shop's QR code via the app and complete your payment securely through online mode."
}, {
    img: [stepfour,redFour],
    imgMain: imagefour,
    title: "Redeem",
    text: "Maximize your savings by enjoying exclusive offers, discounts, vouchers, and loyalty rewards from businesses, while simultaneously boosting the coin value for the respective shop."
}]


const ShoppingBanner = () => {
    return(
        <>
            <div className="relative max-w-[100%] max-md:hidden block">
                <div className="px-3 relative mt-[100px] mb-[150px] 2xl:ml-[200px] 2xl:mr-[200px] flex justify-start items-center max-md:justify-center">
                    <div className=" shopping z-10 ml-[80px] max-xl:scale-[0.9] ">
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
                            Unlock rewards and on every transaction.<br />
                            Only on RewardWise!
                        </div>
                        <div className="Download mt-[170px]">
                            <div className="font-semibold text-left font-lato text-[28px]">
                                <span className=' text-[#C43939]'>Download</span> the app now!
                            </div>
                            <div className="button mt-[28px] relative right-3">
                                <div className=' max-w-[180px] '>
                                    <Image src={google} alt='google'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' absolute max-w-[70%] mt-[180px] max-sm:hidden max-lg:mt-[50px] 2xl:scale-75 2xl:left-[625px] left-[425px] overflow-hidden'>
                        <Image
                            src={homepage}
                            alt="mainPic"
                        />
                    </div>
                </div>
            </div>
            <div className='homepage relative max-md:block hidden mt-[61px] mb-7'>
                <div className='flex justify-center items-center flex-col relative mx-6'>
                    <div className=' pb-6 max-md:pb-2 flex flex-col '>
                        <div className='max-2sm:text-[36px] text-[44px] text-center font-bold'>Ab pay karna</div>
                        <div className=" ml-10">
                            <h2 className=" max-w-[90px] scale-105 max-h-[25px] -rotate-6 mt-1">
                                <Image src={maurbhi} alt='aurbhi'/>
                            </h2>
                        </div>
                        <div className="max-2sm:text-[36px] text-[44px] font-bold text-start flex gap-2">
                            <span className='text-[#272727]'>hua </span>
                            <span className="relative top-6 text-4xl -rotate-6 font-handwritten">^</span>
                            <span className="text-[#C43939]">Mazedarr!</span>
                        </div>
                    </div>
                    <div className=' text-center text-[20px]'>
                        Unlock rewards and cashback on every transaction.<br/>
                        Only on RewardWise!
                    </div>
                    <div className='relative'>
                        <Image src={homepage} alt='homepage'/>
                    </div>
                    <div className="Download relative bottom-4 flex flex-col items-center">
                        <div className="font-semibold text-left font-lato text-xl">
                            <span className=' text-[#C43939]'>Download</span> the app now!
                        </div>
                        <div className="button relative">
                            <div className=' max-w-[130px] '>
                                <Image src={google} alt='google'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FBE74E] mb-[30px] px-4 w-[100%] overflow-hidden block max-2sm:hidden">
                <div className="flex justify-center items-end max-lg:items-center max-lg:flex-col max-md:gap-10 gap-[56px]">
                    <div className="max-w-[350px] ml-[90px] max-lg:ml-0  scale-125">
                        <Image
                            src={yellowImage}
                            alt="Happy Shopper"
                        />
                    </div>
                    <div className=" mr-[100px] mb-7 max-xl:mb-0 max-lg:mr-0">
                        <div className="flex items-start ">
                            <div className="text-5xl font-passionOne mr-1 max-md:mb-4">&#8220;</div>
                            <div className="text-3xl font-lato max-lg:text-3xl max-lg:text-center">
                                I deserve the bonuses that come with my spending. Why not
                                take advantage of all the extras available to me?
                                <span className="text-5xl ml-2 font-passionOne">&#8221;</span>
                            </div>
                        </div>
                        <footer className="mt-9 text-right">
                            <p className="text-2xl font-lato">- Nisha, Mumbai</p>
                        </footer>
                    </div>
                </div>
            </div>
            <div className='bg-[#FBE74E] mb-[30px] w-[100%]  overflow-hidden hidden max-2sm:block'>
                <div className='flex '>
                    <div className='relative top-1 max-w-[150px] max-h-[112px] scale-x-[-1]'>
                        <Image
                            src={yellowImage}
                            alt="Happy Shopper"
                        />
                    </div>
                    <div className=" mt-[32px] mr-[15px]">
                        <div className="flex items-start ">
                            <div className="text-xl font-passionOne relative bottom-2">&#8220;</div>
                            <div className="text-[12px] font-lato relative">
                                I deserve the bonuses that come with my spending. Why not
                                take advantage of all the extras available to me? <span className='relative'><span className=' font-passionOne text-xl absolute bottom-0 -top-2 left-1'>&#8221;</span></span>

                            </div>
                        </div>
                        <footer className=" text-right">
                            <p className="text-[10px] mr-2 font-lato">- Nisha, Mumbai</p>
                        </footer>
                    </div>
                </div>
            </div>

            <Slider/>
            <h3 className="text-xl mt-10 ml-16 font-light text-black max-md:max-w-full">Join your favourite loyalty
                program</h3>
            <h3 className=" text-2xl ml-16 font-medium text-black max-md:max-w-full">In just 4 steps</h3>
            <Steps stepList={list}/>

            <div className='p-[20px]'>
                <div className=' max-2sm:text-[22px] max-2sm:font-medium text-5xl p-[20px] mx-[100px] max-2sm:mx-0 max-2sm:p-0 max-md:text-4xl max-md:mx-6 text-center font-semibold'>
                    Join the <span className=' text-[#C5393A]'>loyalty programs</span> that rewards you on <span className='text-[#C5393A]'>every transaction</span>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className='relative flex flex-col '>
                    <div className='relative'>
                        <Image src={newImage} width={5000} alt='image' className='z-[-1]'/>
                    </div>
                    <div className='absolute left-[40%] top-[70%] max-md:left-[35%] max-md:top-[60%] max-sm:left-[25%] max-2sm:left-[18%] max-2sm:top-[50%] max-2sm:scale-[0.8] flex justify-center'>
                        <div className='flex flex-col gap-5 max-md:scale-75 max-sm:scale-50 items-center justify-center'>
                            <div className='text-[23px]'>Download the app now:</div>
                            <div className='relative max-w-[150px] max-h-[60px] scale-125 self-start'>
                                <Image src={googles} alt='googlePlay'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );


}

export default ShoppingBanner;