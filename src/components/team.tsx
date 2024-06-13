import React from 'react';
import Image from "next/image";
import dummyImage from "../../public/unknownnn.jpeg"

const Team = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-extrabold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white w-[360px] h-[400px] relative rounded-[24px] border border-black/50 overflow-hidden shadow-lg group">
                        <Image src={dummyImage} alt={member.name} className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                        <div className="bg-white w-52 rounded-tr-[24px] px-4 py-2 overflow-visible absolute bottom-0 z-[999] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                            <h1 className="text-black text-lg font-bold">{member.name}</h1>
                            <h1 className="text-gray-600 text-md">{member.title}</h1>
                        </div>
                        <div className="absolute w-[330px] h-[370px] bottom-0 left-0 flex flex-col items-center justify-center bg-white rounded-tr-[24px] p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-black text-xl font-medium">{member.name}</h1>
                            <h2 className="text-[rgba(0, 0, 0, 0.40)] text-sm font-medium">{member.title}</h2>
                            <p className="text-black text-2xl font-bold text-center mt-10">{member.description}</p>
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
        title: "CEO, RewardWise",
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
