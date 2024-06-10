import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import google from '../../public/GooglePlay.png'
import apple from '../../public/AppStore.png'
import rewardWise from '../../public/WhiteRewardWiseLogo.png'
import gmail from '../../public/Vector.png'
import { Button } from "@/components/ui/button"
const Footer = () => {
    return (
        <>
            <div className="mt-12 bg-[#C5393A] flex justify-center items-center gap-10 text-white text-center py-4 h-[168px]">
                <h3 className="text-4xl font-medium mt-1">Ready to get started?</h3>
                <Button className="bg-white mt-[3px] text-red-600 font-medium py-2 px-4 rounded-3xl hover:bg-gray-100">
                    Register Now
                </Button>
            </div>

    <footer
        className='footer bg-[#101010] text-[#FCFCFC] p-[40px] md:px-8 lg:px-20 border border-t-2 border-t-[#DD2020] border-l-[black] border-r-[black] border-b-[black]'>

        <div className='mx-[100px] max-w-7xl mb-[26px]'>
            <div className='info flex flex-col md:flex-row justify-between'>
                    <div className='logo flex flex-col gap-[80px] mb-6 '>
                        <div className='flex flex-col gap-4'>
                            <div className='logoTitle flex items-end gap-4'>
                                {/* <div className="flex items-center">
                      <Image src={rewardWise} alt='RewardWiseLogo' height={30} width={30} className='text-white'/>
                    </div>
                    <p className='text-lg font-semibold text-white'>RewardWise</p> */}
                                <div className='text-xl text-[#FCFCFC] font-semibold'>Follow us on:</div>
                            </div>
                            <div className='socialHandles flex justify-start space-x-4 scale-100 md:scale-115'>
                                <div><FaFacebookF size={32} className='md:scale-125'/></div>
                                <div><FaInstagram size={32} className='md:scale-125'/></div>
                                <div><FaLinkedinIn size={32} className='md:scale-125'/></div>
                            </div>
                        </div>
                        <div className=" md:mb-[25px] flex flex-col items-start justify-center gap-1">
                            <div className="mr-2 text-2xl font-semibold mb-0 text-left">Get The App:</div>
                            <Image src={google} alt="Google Play" width={150} height={50}
                                   className='scale-125 mt-0 ml-2 mr-2' placeholder='blur'/>
                        </div>
                    </div>
                    <div className='legal flex flex-col gap-4 md:mb-0 ml-6 mb-[36px]'>
                        <div className='text-2xl font-semibold text-white'>Legal</div>
                        <div className='text-xl'>Privacy Policy</div>
                        <div className='text-xl'>Terms & Conditions</div>
                        <div className='text-xl'>Refund & Cancellation Policy</div>
                        <div className='text-xl'>Data & Security</div>
                        <div className='text-xl'>Documents</div>
                    </div>
                    <div className='company flex flex-col gap-4'>
                        <div className='text-2xl font-semibold text-white md:ml-[28px]'>Company</div>
                        <div className='flex gap-3 items-center'>
                            <FaPhone size={18} className='text-white scale-x-[-1]'/>
                            <div className='text-xl'>+91 77188 17319</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image src={gmail} alt='gmail' height={18}/>
                            <div className='text-xl'>help@rewardwise.co</div>
                        </div>
                        <div className='flex gap-3 items-start'>
                            <FaMapMarkerAlt size={18} className='mt-1 text-white'/>
                            <div className='text-xl'>
                                186/2, 2nd FLOOR,<br/>
                                Sreepachamma<br/>
                                Sarjapura, Bangalore, Anekal,<br/>
                                Karnataka, India, 562125
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-white mt-6 mb-[60px]"/>
            </div>
        </footer>
        </>
    )
}

export default Footer