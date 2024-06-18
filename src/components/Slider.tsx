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
import mobileBigBasket from "../../public/MobileBigBasket.png";

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
            className={`flex flex-col font-inter items-center xl:rounded-[30px] rounded-[8px] max-md:px-5 animate-loop-scroll ${className} `}
        >
            <h2 className="xl:text-[28px] text-[14px] text-[#272727] font-inter font-normal mt-3">
                {title}
            </h2>
            <div className="overflow-hidden">
                <Image
                    loading="lazy"
                    src={imgSrc}
                    alt={imgAlt}
                    className="xl:mt-4 bg-center max-sm:h-[73px] max-sm:w-[73px]"
                />
            </div>
        </section>
    );
}

function Slider() {
    const cards = [
        {
            title: "Fashion",
            imgSrc: fashion,
            imgAlt: "Fashion related image",
            className:
                "bg-[#FEC5BB] h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Schools",
            imgSrc: schools,
            imgAlt: "Schools related image",
            className:
                "bg-[#F3C4FB] h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Travel",
            imgSrc: travel,
            imgAlt: "Travel related image",
            className:
                "bg-[#9EE37D] h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Footwear",
            imgSrc: footwear,
            imgAlt: "Footwear related image",
            className:
                "bg-[#B79CED] h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Restaurant",
            imgSrc: restaurant,
            imgAlt: "Restaurant related image",
            className:
                "bg-[#F8AD9D] h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Electronics",
            imgSrc: electronics,
            imgAlt: "Electronics related image",
            className:
                "bg-slate-200 h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
        {
            title: "Cafe",
            imgSrc: cafe,
            imgAlt: "Cafe related image",
            className:
                "bg-yellow-200 h-[100px] w-[100px] xl:h-[264px] xl:w-[264px] flex-shrink-0",
        },
    ];

    return (
        <>
            <div className="xl:ml-[107px] xl:py-4 max-sm:mb-4 font-inter">
                <div className="md:text-xl max-md:px-5 text-[12px] text-[#000] font-light md:font-normal">
                    Shop category wise
                </div>
                <div className="md:text-2xl max-md:px-5 text-[16px] text-[#101010] font-medium">
                    Explore Categories
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="flex overflow-x-hidden xl:p-8 w-[95%] gap-5">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            className={`${card.className} flex-none`}
                        />
                    ))}
                </div>
            </div>
            <section className="flex justify-center items-center w-full bg-[#F3F4F6] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[1230px] max-md:max-w-full">
                    <div className="xl:pt-[60px] pt-[32px] pb-[18px] xl:pb-[50px]">
                        <h3 className="md:text-xl text-[12px] font-light font-inter max-md:px-5 md:font-light text-[#000] max-md:max-w-full">
                            Offers from 10+ brands
                        </h3>
                        <h3 className="md:text-2xl text-[16px] font-normal max-md:px-5 font-inter md:font-medium text-[#000] max-md:max-w-full">
                            In spotlight
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Image
                            loading="lazy"
                            src={bigBasket}
                            className="w-full max-sm:hidden"
                            alt="Spotlight Offers"
                        />
                        <Image
                            loading="lazy"
                            src={mobileBigBasket}
                            className="w-full sm:hidden"
                            alt="Spotlight Offers"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;