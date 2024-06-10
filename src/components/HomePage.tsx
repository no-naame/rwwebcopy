// components/ShoppingBanner.tsx

import React from 'react';
import Image from 'next/image';
import google from '../../public/GooglePlay.png'
import apple from '../../public/AppStore.png'
import yellowImage from '../../public/yellow_section_image.png'
import mainPagePic from '../../public/hero_section.png'
import aurbhi from '../../public/aur bhiaurBhi.png'


const ShoppingBanner = () => {
    return(
        <div>
            <div className="text-center py-10">
                <div className="mt-[240px] p-3 flex justify-around">
                    <div className="relative left-[65px] shopping max-w-[600px]">
                        <div className="text-5xl font-bold text-start text-[#272727]">Ab shopping karna</div>
                        <div className="text-start text-[33px] mt-2 font-semibold text-[#272727]">
                            <h2 className="ml-[80px] max-w-[200px] -rotate-6 mt-1 relative right-4">
                                <Image src={aurbhi} alt='aurbhi' />
                            </h2>
                        </div>
                        <div className="text-5xl font-bold text-start flex gap-2">
                            <span className='text-[#272727]'>hua </span>
                            <span className="relative top-6 text-4xl -rotate-6 font-handwritten">^</span>
                            <span className="text-[#C43939]">Mazedarr!</span>
                        </div>
                        <div className="mt-6 text-start font-semibold font-lato text-[#000] text-[22px] z-50">
                            Shop karo kuch bhi, kabhi bhi, kahin bhi aur pao inaam.<br />
                            Only on RewardWise!
                        </div>
                        <div className="Download mt-[350px] scale-125 relative left-20">
                            <div className="font-semibold max-w-[50%] font-lato">
                                Download The App NOW!
                            </div>
                            <div className="button flex justify-between align-middle mt-[10px]">
                                <Image
                                    src={google}
                                    alt="Google Play"
                                    width={150}
                                    height={50}
                                    className="scale-110 mt-0"
                                    placeholder="blur"
                                />
                                <Image
                                    src={apple}
                                    alt="App Store"
                                    width={180}
                                    height={50}
                                    className="scale-100 mt-0 mr-[250px]"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        src={mainPagePic}
                        alt="mainPic"
                        className="object-cover scale-[1.4] items-end mr-[140px] ml-10 mb-[120px] z-50 h-[100%] max-w-[700px] relative"
                        width={700}

                    />
                </div>
            </div>
            <div className="bg-[#FBE74E] mb-[30px]">
                <div className="flex justify-between items-end gap-7 overflow-hidden">
                    <Image
                        src={yellowImage}
                        alt="Happy Shopper"
                        width={600}
                        className="ml-[100px] scale-125 relative bottom-7"
                    />
                    <div className="flex justify-center items-center mr-[100px] relative bottom-[50px]">
                        <div className=" w-[600px]">
                            <div className="relative max-w-[600px]">
                                <div className="flex items-start max-md:flex-col max-md:items-center max-w-[600px]">
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
                </div>
            </div>
        </div>

    );



}

export default ShoppingBanner;