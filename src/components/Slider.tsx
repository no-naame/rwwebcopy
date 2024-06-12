"use client"
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import fashion from "../../public/slider/fashion.png";
import schools from "../../public/slider/schools.png";
import travel from "../../public/slider/travel.png";
import footwear from "../../public/slider/footwear.png";
import restaurant from "../../public/slider/restaurant.png";
import electronics from "../../public/slider/electronics.png";
import cafe from "../../public/slider/cafe.png";
import bigBasket from "../../public/BigBasket.png";

interface CardProps {
    title: string;
    imgSrc: StaticImageData;
    imgAlt: string;
    className?: string;
}

function Card({
                  title,
                  imgSrc,
                  imgAlt,
                  className,
              }: CardProps): React.JSX.Element {
    return (
        <section
            className={`flex flex-col items-center rounded-t-[30px] rounded-b-[3%] max-md:px-5 ${className}`}
        >
            <h2 className="text-[28px] font-light mt-3">{title}</h2>
            <Image
                loading="lazy"
                src={imgSrc}
                alt={imgAlt}
                className="mt-10 overflow-hidden bg-center"
            />
        </section>
    );
}

function Slider() {
    const cards = [
        {
            title: "Fashion",
            imgSrc: fashion,
            imgAlt: "Fashion related image",
            className: "bg-[#FEC5BB] h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Schools",
            imgSrc: schools,
            imgAlt: "Schools related image",
            className: "bg-[#F3C4FB] h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Travel",
            imgSrc: travel,
            imgAlt: "Travel related image",
            className: "bg-[#9EE37D] h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Footwear",
            imgSrc: footwear,
            imgAlt: "Footwear related image",
            className: "bg-[#B79CED] h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Restaurant",
            imgSrc: restaurant,
            imgAlt: "Restaurant related image",
            className: "bg-[#F8AD9D] h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Electronics",
            imgSrc: electronics,
            imgAlt: "Electronics related image",
            className: "bg-slate-200 h-[264px] w-[264px] flex-shrink-0",
        },
        {
            title: "Cafe",
            imgSrc: cafe,
            imgAlt: "Cafe related image",
            className: "bg-yellow-200 h-[264px] w-[264px] flex-shrink-0",
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 3;
        const scrollInterval = 30;

        const scroll = () => {
            scrollAmount += scrollStep;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        };

        const interval = setInterval(scroll, scrollInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="ml-20 p-8 ">
                <div className="text-xl font-light">Shop category wise</div>
                <div className="text-2xl font-normal">Explore Categories</div>
            </div>
            <div className="flex items-center justify-center w-full">
                <div ref={scrollRef} className="flex justify-start overflow-x-auto p-8 w-[95%] gap-5 hide-scrollbar">
                    {[...cards, ...cards].map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            className={`${card.className} flex-none`}
                        />
                    ))}
                </div>
            </div>
            <section
                className="flex justify-center items-center px-16 py-14 mt-12 w-full mb-20 bg-gray-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[1230px] max-md:max-w-full">
                    <h3 className="text-xl font-light text-black max-md:max-w-full">Offers from 10+ brands</h3>
                    <h3 className=" text-2xl font-medium text-black max-md:max-w-full">In spotlight</h3>
                    <div className="flex flex-col justify-center py-7 mt-14 max-md:mt-10 max-md:max-w-full">
                        <Image loading="lazy" src={bigBasket} className="w-full" alt="Spotlight Offers"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;
