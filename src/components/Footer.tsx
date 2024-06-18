import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import google from '../../public/GooglePlay.png'
import apple from '../../public/AppStore.png'
import rewardWise from '../../public/WhiteRewardWiseLogo.png'
import gmail from '../../public/Vector.png'
import { Button } from "@/components/ui/button"
import Link from "next/link";
const Footer = () => {
    return (
        <>
         <footer className='footer bg-[#101010] text-[#FCFCFC] p-[40px] md:px-8 lg:px-20 border border-t-2 border-t-[#DD2020] border-l-[black] border-r-[black] border-b-[black] block max-2sm:hidden'>
                <div className='mx-[100px] max-md:mx-6  max-w-7xl mb-[26px]'>
                    <div className='info flex flex-wrap justify-between max-sm:flex-col max-sm:items-center'>
                        <div className='logo flex flex-col gap-[80px] mb-6 '>
                            <div className='flex flex-col gap-4'>
                                <div className='logoTitle flex items-end gap-4'>
                                    <div className='text-xl text-[#FCFCFC] font-semibold'>Follow us on:</div>
                                </div>
                                <div className='socialHandles flex justify-start space-x-4 scale-100 md:scale-115'>
                                    <div><FaFacebookF size={32} className='md:scale-125'/></div>
                                    <div><FaInstagram size={32} className='md:scale-125'/></div>
                                    <div><FaLinkedinIn size={32} className='md:scale-125'/></div>
                                </div>
                            </div>
                            <div className=" md:mb-[25px] flex flex-col items-start justify-center gap-1">
                                <div className="mr-2 text-2xl mb-0 text-left">Get the App:</div>
                                <Image src={google} alt="Google Play" width={150} height={50}
                                       className='scale-125 mt-0 ml-2 mr-2' placeholder='blur'/>
                            </div>
                        </div>
                        <div className='legal max-sm:pl-10 flex flex-col gap-4 md:mb-0 ml-6 mb-[36px]'>
                            <div className='text-2xl font-semibold text-white'>Legal</div>
                            <Link href='/privacy-policy' className='text-xl text-[#FCFCFC]'>Privacy Policy</Link>
                            <Link href='/terms-and-condition' className='text-xl'>Terms & Conditions</Link>
                            <Link href='/refund-policy' className='text-xl'>Refund & Cancellation Policy</Link>
                            <div className='text-xl'>Data & Security</div>
                            <div className='text-xl'>Documents</div>
                        </div>
                        <div className='company max-sm:pl-16 flex flex-col gap-4'>
                            <div className='text-2xl font-semibold text-white ml-[30px]'>Company</div>
                            <div className='flex gap-3 items-center'>
                                <FaPhone size={18} className='text-white scale-x-[-1]'/>
                                <div className='text-xl'>+91 77188 17319</div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <Image src={gmail} alt='gmail' placeholder='blur' height={18}/>
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
            <footer className=' hidden px-6 pt-7 pb-10 max-2sm:block text-[#FCFCFC] bg-black'>
              <div className=''>
                  <div className='flex justify-between '>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='legal text-[14px]'>Legal</div>
                        <div className='contains flex flex-col gap-2 text-[12px]'>
                            <Link href='/privacy-policy' className=''>Privacy Policy</Link>
                            <Link href='/terms-and-condition' className=''>Terms & Conditions</Link>
                            <Link href='/refund-policy' className=''>Refund & Cancellation Policy</Link>
                            <div className=''>Data & Security</div>
                            <div className=''>Documents</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] justify-between text-[12px] text-[#FCFCFC]'>
                      <div className='company text-[14px] ml-[28px]'>Company</div>
                      <div className='company contains flex flex-col gap-[12px]'>
                            <div className='flex gap-3 items-center'>
                                <FaPhone size={12} className='text-white scale-x-[-1]'/>
                                <div className=''>+91 77188 17319</div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <Image src={gmail} alt='gmail' placeholder='blur' height={12}/>
                                <div className=''>help@rewardwise.co</div>
                            </div>
                            <div className='flex gap-3 items-start'>
                                <FaMapMarkerAlt size={12} className='mt-1 text-white'/>
                                <div className=''>
                                    186/2, 2nd FLOOR,<br/>
                                    Sreepachamma<br/>
                                    Sarjapura,<br/>
                                    Bangalore, Anekal,<br/>
                                    Karnataka, India,<br/>
                                    562125
                                </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border-t border-white mt-[20px]"/>
                  <div className='mt-[20px] flex justify-between gap-[35px] mr-5'>
                      <div className=" flex flex-col items-start gap-2">
                          <div className="text-[12px]">Get the App:</div>
                          <Image src={google} alt="Google Play" width={88} height={30}
                                 className='scale-125 ml-1' placeholder='blur'/>
                      </div>
                    <div className='logoTitle flex flex-col gap-2 ml-5'>
                        <div className='text-[14px] text-[#FCFCFC] ml-2'>Follow us on:</div>
                        <div className='socialHandles flex justify-start space-x-2'>
                              <div><FaFacebookF size={30} className=''/></div>
                              <div><FaInstagram size={30} className=''/></div>
                              <div><FaLinkedinIn size={30} className=''/></div>
                        </div>
                    </div>
                  </div>
              </div>

            </footer>
        </>
    )
}

export default Footer