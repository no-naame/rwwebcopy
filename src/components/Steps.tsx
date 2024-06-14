"use client";
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from "next/image";

interface Step {
    img: StaticImageData[];
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
            const sections = document.querySelectorAll<HTMLElement>('.step-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight * 0.5 && rect.bottom >= 0) {
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
                <div
                    key={index}
                    className={`w-full max-w-6xl step-section ${activeIndex === index ? 'opacity-100' : 'opacity-60'}`}
                    style={{ transition: 'opacity 0.5s' }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <div className={`flex mt-14 ${activeIndex === index ? 'mr-14' : 'mr-5'}`}>
                                <h1 className="mr-4 text-2xl font-semibold text-red-700 mt-[6px]">Step</h1>
                                <Image
                                    className="h-12 w-12 text-[#bd1e59]"
                                    src={activeIndex === index ? step.img[1] : step.img[0]}
                                    alt={`step ${index + 1}`}
                                />
                            </div>
                            {index < 3 && (
                                <div className="hidden md:block h-[180px] w-px bg-[#C5393A] mr-5 ml-[93px] mt-5" />
                            )}
                        </div>
                        <div className={`overflow-hidden rounded-full ${activeIndex === index ? 'w-[200px] h-[200px]' : 'w-[160px] h-[160px]'}`}>
                            <Image
                                src={step.imgMain}
                                alt={`step ${index + 1} image`}
                                width={160}
                                height={160}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0 mt-7 ml-9 md:ml-0 md:mt-0">
                            <h3 className={`font-semibold text-gray-900 ${activeIndex === index ? 'text-3xl' : 'text-2xl'}`}>{step.title}</h3>
                            <p className={`mt-3 text-gray-600 ${activeIndex === index ? 'text-xl' : 'text-lg'}`} dangerouslySetInnerHTML={{ __html: step.text }}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Steps;
