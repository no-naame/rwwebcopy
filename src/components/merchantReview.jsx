import React from 'react';
import reviewImg from "../../public/unsplash_RxiAV5LC-ww.png";
import Image from "next/image";
import quote from "../../public/quotes.svg";

const MerchantReview = () => {
    return (
        <div>
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-bold text-center text-gray-900 mb-20">
                        What Our <span className="text-red-600">Merchant</span> Says About <span className="text-red-600">Us</span>
                    </h2>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="relative z-10 bg-white shadow-custom-lg w-full p-8 md:p-20 rounded-l-3xl">
                            <blockquote className="text-2xl font-medium text-black mb-4">
                                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”
                            </blockquote>
                            <div className="flex justify-center mb-4">
                                <Image src={quote} alt={"big quote sign"} className="block"/>
                            </div>
                            <p className="text-4xl font-semibold">Pratiksha Ekbote</p>
                            <p className="text-gray-500">CEO, Design Studios</p>
                        </div>
                        <div className="absolute top-0 right-0 md:relative">
                            <Image src={reviewImg} alt={"Pratiksha Ekbote"} className="rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantReview;
