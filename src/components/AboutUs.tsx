import React from "react";
import Image from "next/image";
import aboutusFrame from "../../public/aboutUsFrame.png";
import overlay from "../../public/overlay.svg";
import rewardwise from "../../public/Rewardwise.png";
import octicon from "../../public/octiconCover.png";
import rocket from "../../public/Rocketcover.png";
import Team from "@/components/team";

const AboutUs = () => {
    return (
        <>
            <div className="py-10">
                <div className="flex justify-evenly px-12 max-xl:flex-col-reverse max-xl:items-center">
                    <div className="mt-16">
                        <div
                            className="text-[76px] leading-[96px] max-md:text-5xl max-sm:text-3xl max-sm:gap-4 text-black/80 font-bold">
                            <h1 className="max-md:ml-[45%]">Hi.</h1>
                            <div className="flex max-md:justify-center">
                                <h1>We're</h1>
                                <div className="relative">
                                    <h1 className="px-10 max-md:px-4">Rewardwise</h1>
                                    <Image
                                        src={overlay}
                                        alt="Overlay"
                                        className="absolute max-md:inset-0 inset-2 -z-10"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-[22px] mt-6 font-normal text-black/80">
                            <p className="max-sm:ml-[10%]">
                                Rewardwise is a passionate team of{" "}
                                <span className="text-[#3947C4] ">developers,</span>
                            </p>
                            <p className="text-[#3947C4] max-sm:ml-[10%]">
                                designers, architects, and product specialists,{" "}
                            </p>
                            <p className="max-sm:ml-[10%]">
                                united by the vision to revolutionize customer{" "}
                            </p>
                            <p className="max-sm:ml-[10%]">
                                engagement through specialized loyalty programs.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Image width={421} alt="About Us Frame" src={aboutusFrame}></Image>
                    </div>
                </div>
            </div>

            <div className='py-16 px-3 flex justify-center items-center'>
                <div className='flex justify-center gap-[10px] flex-wrap'>
                    <div className='RewardWise shadow py-14 px-12 rounded-[35px]'>
                        <div className='flex flex-col gap-8'>
                            <div className=' self-start'>
                                <Image src={rewardwise} alt='rewardwise' height={60} width={60}/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-[#C5393A] self-start mb-2 text-2xl'>What is Rewardwise?</div>
                                <div className=' text-left text-xl'>
                                    <span className='font-semibold mt-2'>Rewardwise</span> empowers<br/>
                                    businesses to cultivate a loyal<br/>
                                    customer base and consumers to<br/>
                                    support beloved brands, bridging<br/>
                                    the gap for mutual growth. We<br/>
                                    build trust between customers<br/>
                                    and businesses, serving as the<br/>
                                    go-to platform.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Misson py-14 px-12 shadow rounded-[30px]'>
                        <div className='flex flex-col gap-[36px]'>
                            <div className=' self-start'>
                                <Image src={octicon} alt='octicon' className='rounded-[50%]' height={60} width={60}/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-[#C5393A] self-start mb-2 text-2xl'>What is Our Mission?</div>
                                <div className=' text-left text-xl'>
                                    <span className='font-semibold mt-2'>Our Mission</span> is to facilitate<br/>
                                    seamless communication<br/>
                                    between businesses and<br/>
                                    customers, enabling businesses<br/>
                                    to establish their community and<br/>
                                    encouraging consumers to<br/>
                                    support their favourite<br/>
                                    businesses.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Vi py-14 px-12 shadow rounded-[30px]'>
                        <div className='flex flex-col gap-[36px]'>
                            <div className=' self-start'>
                                <Image src={rocket} alt='rocket' height={60} width={60}/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-[#C5393A] self-start mb-2 text-2xl'>What is Our Vision?</div>
                                <div className=' text-left text-xl'>
                                    <span className='font-semibold mt-2'>Our Vision</span> is to create a world<br/>
                                    where every entrepreneur has<br/>
                                    loyal and thriving customers right<br/>
                                    from the start. We envision a<br/>
                                    world where entrepreneurs<br/>
                                    cultivate loyal, thriving customers<br/>
                                    from launch
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Team/>

            <div className="flex flex-col py-10 px-0 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-10 max-w-[80%]">
                    <div className=" text-center text-black/80 font-semibold text-[50px]">
                        Join us on this incredible journey of creating a world where every
                        entrepreneur has loyal and thriving customers.
                    </div>
                    <div className="rounded-[30px] border border-white bg-[#C43939] text-2xl text-white px-6 py-4">
                        See open roles
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;