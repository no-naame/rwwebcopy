"use client"
import React, { useEffect, useState } from 'react';
import Image, {StaticImageData} from "next/image";
import Stepone from "../../public/one.png";
import steptwo from "../../public/two.png";
import stepthree from "../../public/three.png";
import stepfour from "../../public/four.png";
import imageone from "../../public/StepOneMain.png";
import imagetwo from "../../public/StepTwoMain.png";
import imagethree from "../../public/StepThreeMain.png";
import imagefour from "../../public/StepFourMain.jpeg";

interface Step {
    img: StaticImageData;
    imgMain: StaticImageData;
    title: string;
    text: string;
}

interface StepsProps {
    stepList: Step[];
}

const Steps: React.FC<StepsProps> = ({ stepList }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.step-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight && rect.bottom >= 0) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-10 bg-white p-10">
            {stepList.map((step, index) => (
                <div key={index} className={`w-full max-w-3xl step-section ${activeIndex === index ? 'opacity-100' : 'opacity-60'}`} style={{ transition: 'opacity 0.5s' }}>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div className="flex mt-14 mr-5">
                                <h1 className="mr-4 text-2xl font-semibold text-red-700 mt-[6px]">Step</h1>
                                <Image className="h-12 w-12 text-[#bd1e59]" src={step.img} alt={`step ${index + 1}`} />
                            </div>
                            {index < 3 && <div className="h-[180px] w-px bg-[#C5393A] mr-5 ml-[53px] mt-5" />}
                        </div>
                        <div className="w-[160px] h-[160px] overflow-hidden rounded-full">
                            <Image
                                src={step.imgMain}
                                alt={`step ${index + 1} image`}
                                width={160}
                                height={160}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0 mt-7 ml-9">
                            <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                            <p className="mt-1 text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: step.text }}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Steps;
