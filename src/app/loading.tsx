import React from "react";

const Loading = () => (
    <div className="flex justify-center mt-[15%] h-screen bg-[#FCFCFC]">
        <div className="flex flex-col items-center">
            <div className="w-28 h-28 border-8 border-[#fcfcfc] border-t-[#C43939] border-r-[#0A0A0A] rounded-full animate-spin"></div>
            <h1 className="text-[#C43939] text-2xl mt-4">Loading...</h1>
        </div>
    </div>
);

export default Loading;