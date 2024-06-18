import React from "react";
import Image from "next/image";
import aboutusFrame from "../../public/aboutUsFrame.png";
import overlay from "../../public/overlay.svg";
import rewardwise from "../../public/Rewardwise.png";
import octicon from "../../public/octiconCover.png";
import rocket from "../../public/Rocketcover.png";
import Team from "@/components/team";
import overlayMobile from "../../public/OverlayMobile.png"

const AboutUs = () => {
    return (
        <>
            <>
                <div className="py-8">
                    <div className="flex justify-evenly max-xl:flex-col max-xl:items-center py-4">
                        <div className="xl:mt-10 mt-4">
                            <div className="text-[76px] leading-[96px] mt-10 max-md:text-4xl max-sm:leading-[48px] max-sm:gap-4 text-black/80 font-bold">
                                <div className="relative max-sm:hidden ">
                                    <h1 className="text-[62px] max-md:px-4 px-8 max-md:text-4xl max-md:flex max-md:justify-center">
                                        Hey!
                                    </h1>
                                    <Image
                                        src={overlayMobile}
                                        alt="Overlay"
                                        className="absolute max-md:inset-0 h-[75%] w-[30%] left-0 inset-4 -z-10 max-md:hidden"
                                    />
                                </div>

                                <div className="relative flex justify-center">
                                    <h1 className="relative sm:hidden ">Hey!</h1>
                                    <Image
                                        src={overlayMobile}
                                        alt="Overlay"
                                        className="absolute sm:hidden items-center inset-0 w-[40%] h-full ml-[30%] -z-10"
                                    />
                                </div>

                                <div className="flex max-md:justify-center max-sm:flex-col sm:gap-4 px-8">
                                    <h1 className="max-sm:flex max-sm:justify-center ">We're</h1>
                                    <h1 className="sm:hidden text-[#C43939] text-[44px] ">
                                        Rewardwise
                                    </h1>
                                    <h1 className="text-[#C43939] max-md:text-4xl text-[76px] max-sm:hidden">
                                        Rewardwise
                                    </h1>
                                </div>
                            </div>

                            <div className="text-[22px] mt-6 font-normal text-black/80 max-sm:hidden px-8">
                                <p className="max-sm:ml-[10%] max-mxl:flex max-mxl:justify-center">
                                    Rewardwise is a passionate team of
                                    <span className="text-[#3947C4] mx-2">developers,</span>
                                </p>
                                <p className="text-[#3947C4] max-sm:ml-[10%] max-mxl:flex max-mxl:justify-center">
                                    designers, architects, and product specialists,
                                </p>
                                <p className="max-sm:ml-[10%] max-mxl:flex max-mxl:justify-center">
                                    united by the vision to revolutionize customer
                                </p>
                                <p className="max-sm:ml-[10%] max-mxl:flex max-mxl:justify-center">
                                    engagement through specialized loyalty programs.
                                </p>
                            </div>
                        </div>

                        <div className="max-sm:py-8 max-sm:px-12">
                            <Image
                                width={421}
                                alt="About Us Frame"
                                src={aboutusFrame}
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="py-16 px-3 flex justify-center items-center">
                    <div className="flex justify-center gap-[10px] flex-wrap">
                        <div className="RewardWise shadow max-2sm:px-[24px] max-2sm:py-[32px] py-14 px-12 rounded-[35px]">
                            <div className="flex flex-col gap-8">
                                <div className=" self-start max-2sm:self-center">
                                    <Image
                                        src={rewardwise}
                                        alt="rewardwise"
                                        height={60}
                                        width={60}
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-[#C5393A] self-start mb-2 text-2xl max-2sm:text-xl max-2sm:self-center">
                                        What is Rewardwise?
                                    </div>
                                    <div className=" text-left max-2sm:text-center text-xl max-2sm:text-[16px]">
                                        <span className="font-semibold mt-2">Rewardwise</span>{" "}
                                        empowers
                                        <br />
                                        businesses to cultivate a loyal
                                        <br />
                                        customer base and consumers to
                                        <br />
                                        support beloved brands, bridging
                                        <br />
                                        the gap for mutual growth. We
                                        <br />
                                        build trust between customers
                                        <br />
                                        and businesses, serving as the
                                        <br />
                                        go-to platform.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Misson py-14 px-12 max-2sm:px-[24px] max-2sm:py-[32px] shadow rounded-[30px]">
                            <div className="flex flex-col gap-[36px]">
                                <div className=" self-start max-2sm:self-center">
                                    <Image
                                        src={octicon}
                                        alt="octicon"
                                        className="rounded-[50%]"
                                        height={60}
                                        width={60}
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-[#C5393A] self-start mb-2 text-2xl max-2sm:text-xl max-2sm:self-center">
                                        What is Our Mission?
                                    </div>
                                    <div className=" text-left max-2sm:text-center text-xl max-2sm:text-[16px]">
                                        <span className="font-semibold mt-2">Our Mission</span> is
                                        to facilitate
                                        <br />
                                        seamless communication
                                        <br />
                                        between businesses and
                                        <br />
                                        customers, enabling businesses
                                        <br />
                                        to establish their community and
                                        <br />
                                        encouraging consumers to
                                        <br />
                                        support their favourite
                                        <br />
                                        businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Vi py-14 px-12 max-2sm:px-[24px] max-2sm:py-[32px] shadow rounded-[30px]">
                            <div className="flex flex-col gap-[36px]">
                                <div className=" self-start max-2sm:self-center">
                                    <Image src={rocket} alt="rocket" height={60} width={60} />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-[#C5393A] self-start mb-2 text-2xl max-2sm:text-xl max-2sm:self-center">
                                        What is Our Vision?
                                    </div>
                                    <div className=" text-left max-2sm:text-center text-xl max-2sm:text-[16px]">
                                        <span className="font-semibold mt-2">Our Vision</span> is to
                                        create a world
                                        <br />
                                        where every entrepreneur has
                                        <br />
                                        loyal and thriving customers right
                                        <br />
                                        from the start. We envision a<br />
                                        world where entrepreneurs
                                        <br />
                                        cultivate loyal, thriving customers
                                        <br />
                                        from launch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Team />

            <div className="flex flex-col py-10 max-2sm:py-7 px-0 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-10 max-2sm:gap-[20px] max-w-[80%]">
                    <div className=" text-center font-semibold text-5xl max-2sm:text-[16px] max-2sm:font-normal">
                        Join us on this incredible journey of creating a world where every
                        entrepreneur has loyal and thriving customers.
                    </div>
                    <div className="rounded-[30px] border border-white bg-[#C43939] text-2xl text-white xl:py-[18px] xl:px-[24px] max-2sm:scale-[0.9]">
                        See open roles
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;