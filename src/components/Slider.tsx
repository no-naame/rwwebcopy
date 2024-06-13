import React from "react";
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
            className={`flex flex-col font-inter items-center rounded-t-[30px] rounded-b-[3%] max-md:px-5 animate-loop-scroll ${className} `}
        >
            <h2 className="text-[28px] font-inter font-light mt-3">{title}</h2>
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

    return (
        <>
            <div className="ml-20 p-7 font-inter">
                <div className="text-xl font-normal">Shop category wise</div>
                <div className="text-2xl font-medium">Explore Categories</div>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="flex overflow-x-auto p-8 w-[95%] gap-5">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            className={`${card.className} flex-none`}
                        />
                    ))}
                </div>
            </div>
            <section className="flex justify-center items-center px-5 py-14 mt-12 w-full bg-gray-100 max-md:px-5 max-md:mt-10 max-md:max-w-full mb-10">
                <div className="flex flex-col w-full max-w-[1230px] max-md:max-w-full">
                    <h3 className="text-xl font-inter font-light text-black max-md:max-w-full">
                        Offers from 10+ brands
                    </h3>
                    <h3 className=" text-2xl font-inter font-medium text-black max-md:max-w-full">
                        In spotlight
                    </h3>
                    <div className="flex flex-col justify-center py-7 mt-14 max-md:mt-10 max-md:max-w-full">
                        <Image
                            loading="lazy"
                            src={bigBasket}
                            className="w-full"
                            alt="Spotlight Offers"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;