import Image from "next/image";
import overlay from "../../public/overlay.svg";
import MerchantReview from "@/components/merchantReview";

export default function Buss() {
    return (
        <div className="bg-white p-8 mt-8">
            <div className="text-center">
                <div className="relative p-2">
                    <h1 className="text-5xl xl:text-7xl font-extrabold text-black">
                        Say hello to the
                    </h1>
                    <div className="md:flex justify-center relative px-4">
                        <h1 className="text-5xl xl:text-7xl mt-2 font-extrabold text-black z-10 px-5">
                            Rewardwise
                        </h1>

                        <h1 className="text-5xl xl:text-7xl mt-2 font-extrabold text-black z-10 px-5 ">
                            community
                        </h1>
                        <Image
                            className="absolute max-sm:hidden left-[14%]"
                            src={overlay}
                            width={550}
                            alt="Background"
                            // objectFit="cover"
                        />
                    </div>
                </div>
                <p className="mt-10 text-3xl text-gray-600">
                    Rewardwise empowers local businesses like shops, restaurants,
                </p>
                <p className="mt-4 text-3xl text-gray-600">
                    vendors, and educational classes to attract customers,
                </p>
                <p className="mt-4 text-3xl text-gray-600">
                    boosting sales and generating leads.
                </p>
            </div>
            <div className="mt-16">
                <img
                    src="https://s3-alpha-sig.figma.com/img/b340/5c7c/dccf1910fca4fbea4a1009a1ef1a706b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiSaWP~QXz2wavfFDr~VX87yS5moM1i05tSgyjwdjlBN5r4JGGXeboqQRGOD~zc2RVUj8KKR2MtWs8CxlUDmOsWeE2xQw~ai4I7qHZbui7Yu3fUv3ZrDn8liFdBgXSDHuodPt9RkoyGrkFo7I7-wXSxfZeT26iYa8ogDyKpciMBCwbOg09R7A1FQ4Q98yZ~t0~bVOpj853Weg4G8N65K3ESXHaPqPG5TZ5Kmm~i2Bu0w6iv0BtNit~uKsANkVerI~5LekafXM9KnyvHIAmZrClhCEn0cOZZcAoBd~i~CZLwj0y3k3VGHrSJ5PNSQqkOEuTH-sxp565coVASFlxmwaQ__"
                    alt="Community"
                    className="mx-auto"
                />
            </div>
            <div className="mt-20 border-[2px] border-[#E3E3E3] rounded-3xl mb-20 px-20 py-14 shadow-custom ">
                <div className="flex flex-wrap gap-5 justify-evenly text-center">
                    <div>
                        <h2 className="text-6xl font-bold text-[#3947C4]">94%</h2>
                        <p className="text-2xl font-semibold text-[#514F6E]">Customer</p>
                        <p className="text-2xl font-semibold text-[#514F6E]">
                            Satisfaction
                        </p>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold text-[#3947C4]">32M</h2>
                        <p className="text-2xl font-semibold text-[#514F6E]">Active</p>
                        <p className="text-2xl font-semibold text-[#514F6E]">Users</p>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold text-[#3947C4]">90+</h2>
                        <p className="text-2xl font-semibold text-[#514F6E]">Seller</p>
                        <p className="text-2xl font-semibold text-[#514F6E]">Community</p>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold text-[#3947C4]">50%</h2>
                        <p className="text-2xl font-semibold text-[#514F6E] ">Purchase</p>
                        <p className="text-2xl font-semibold text-[#514F6E] ">Frequency</p>
                    </div>
                </div>
            </div>
            <MerchantReview/>
        </div>


    );
}