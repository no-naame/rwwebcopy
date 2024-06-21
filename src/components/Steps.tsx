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
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        if (isLargeScreen) {
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
        }

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, [isLargeScreen]);

    return (
        <div className="flex flex-col items-center justify-center space-y-10 bg-white p-4 sm:p-10">
            {stepList.map((step, index) => (
                <div
                    key={index}
                    className={`w-full max-w-6xl step-section ${isLargeScreen ? (activeIndex === index ? 'opacity-100' : 'opacity-60') : 'opacity-100'}`}
                    style={{ transition: isLargeScreen ? 'opacity 0.5s' : 'none' }}
                >
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex flex-col items-center">
                            <div className={`flex mt-8 sm:mt-14 ${isLargeScreen && activeIndex === index ? 'mr-8 sm:mr-14' : 'mr-3 sm:mr-5'}`}>
                                <h1 className="mr-2 sm:mr-4 text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mt-[6px]">Step</h1>
                                <Image
                                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#bd1e59]"
                                    src={isLargeScreen && activeIndex === index ? step.img[1] : step.img[0]}
                                    alt={`step ${index + 1}`}
                                />
                            </div>
                            {index < 3 && (
                                <div className="h-[100px] sm:h-[120px] md:h-[180px] w-px bg-[#C5393A] mr-3 sm:mr-5 ml-[50px] sm:ml-[70px] md:ml-[93px] mt-5" />
                            )}
                        </div>
                        <div className={`overflow-hidden rounded-full ${isLargeScreen && activeIndex === index ? 'w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]' : 'w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]'}`}>
                            <Image
                                src={step.imgMain}
                                alt={`step ${index + 1} image`}
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0 mt-5 sm:mt-7 ml-4 sm:ml-9">
                            <h3 className={`font-semibold text-gray-900 ${isLargeScreen && activeIndex === index ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl md:text-2xl'}`}>{step.title}</h3>
                            <p className={`mt-2 sm:mt-3 text-gray-600 ${isLargeScreen && activeIndex === index ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'}`} dangerouslySetInnerHTML={{ __html: step.text }}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Steps;
