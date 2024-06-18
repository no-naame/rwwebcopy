import React from 'react';
import Image from "next/image";
import dummyImage from "../../public/unknownnn.jpeg";

const Team = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-extrabold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white w-full  md:w-[calc(90.33%-16px)] lg:w-[calc(95.33%-16px)] relative rounded-[24px] overflow-hidden group">
                        <Image src={dummyImage} alt={member.name} className="w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                        <div
                            className="bg-white w-[70%] rounded-tr-[24px] px-4 py-2 text-center overflow-visible absolute bottom-0 z-[999] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                            <h1 className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-bold">{member.name}</h1>
                            <h1 className="text-gray-600 text-xs sm:text-sm md:text-md lg:text-lg">{member.title}</h1>
                        </div>
                        <div
                            className="absolute w-[93%] h-[93%] text-center border-l border-b border-black/50 bottom-0 left-0 flex flex-col items-center justify-center bg-white rounded-bl-[24px] rounded-tr-[24px] p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-black text-md sm:text-lg md:text-xl lg:text-2xl font-medium">{member.name}</h1>
                            <h2 className="text-[rgba(0, 0, 0, 0.40)] text-xs sm:text-sm md:text-md lg:text-lg font-medium">{member.title}</h2>
                            <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-bold text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const teamMembers = [
    {
        name: "Abhishek Gupta",
        title: "CEO, Rewardwise",
        description: "Professor by Day\nCEO by Night\n(or maybe the other way around?)"
    },
    {
        name: "Shivank Mishra",
        title: "Sales Executive",
        description: "Sales genius by day\nStrategic planner by night"
    },
    {
        name: "Mohit",
        title: "Backend Developer",
        description: "Code warrior by day\nDatabase master by night"
    },
    {
        name: "Adarsh",
        title: "Frontend Developer",
        description: "UI expert by day\nUX guru by night"
    },
    {
        name: "Neha",
        title: "UI/UX Designer",
        description: "Design thinker by day\nCreative artist by night"
    },
    {
        name: "Pratiksha",
        title: "UI/UX Designer",
        description: "User advocate by day\nVisual storyteller by night"
    },
    {
        name: "Rashmi",
        title: "UI/UX Designer",
        description: "UI magician by day\nUX strategist by night"
    },
    {
        name: "Chaitanya",
        title: "Developer",
        description: "Problem solver by day\nInnovator by night"
    },
    {
        name: "Chewang",
        title: "Developer",
        description: "Tech enthusiast by day\nCode ninja by night"
    }
];

export default Team;
