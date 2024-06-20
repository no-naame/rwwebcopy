import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PricingTable from "@/components/ui/pricingTable";

export default function Pricing() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-6">
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-medium mb-4 text-[#C43939] mt-36">Business Strategies
                        for Every Stage</h2>
                    <p className="text-2xl mt-16">
                        Choose the plan that's right for your business, whether you're just getting started or having
                        already established, there's a plan for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <Card className="bg-white border-black rounded-lg shadow-md p-6 hover:shadow-lg mt-20">
                        <CardHeader className="mb-4">
                            <CardTitle className="text-4xl font-semibold mb-3 text-center ">Starter</CardTitle>
                            <CardDescription className="text-lg text-black text-center">
                                Ideal for new small businesses seeking customer retention and growth.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mb-6 border-[#FBCC28] text-center">
                            <p className="text-3xl font-bold mb-4">₹ 12,000/<span className="text-[24px] font-medium">Year</span></p>
                            <Button className="w-full bg-red-600 text-white font-semibold text-lg">Register Now</Button>
                        </CardContent>
                        <CardFooter>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">One loyalty program</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">One membership program</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Run paid ads</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Organize one event per quarter</span>
                                </li>
                                <li className="flex items-center">
                                    <XIcon className="text-red-500"/>
                                    <span className="ml-2">Nearby Competition</span>
                                </li>
                            </ul>
                        </CardFooter>
                    </Card>
                    <div className="relative mt-5">
                        <div className="bg-[#3947C4] h-20 mt-2 rounded-t-2xl flex items-center justify-center">
                            <h1 className="text-white mb-3 text-2xl">RECOMMENDED</h1>
                        </div>
                        <Card
                            className="bg-white rounded-lg shadow-md p-6 border-[4px] border-[#3947C4] hover:shadow-lg relative -mt-5">
                            <CardHeader className="mb-4">
                                <div>
                                    <CardTitle className="text-4xl font-semibold mb-3 text-center">Growth</CardTitle>
                                    <CardDescription className="text-lg text-black text-center">
                                        Suited for well-established businesses catering to over 500 customers.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="mb-6 border-[#FBCC28]">
                                <p className="text-3xl font-bold mb-4 text-center">₹ 48,000/<span
                                    className="text-[24px] font-medium">Year</span></p>
                                <Button className="w-full bg-red-600 text-white font-semibold text-lg">Register
                                    Now</Button>
                            </CardContent>
                            <CardFooter>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-green-500"/>
                                        <span className="ml-2">Five loyalty program</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-green-500"/>
                                        <span className="ml-2">Five membership program</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-green-500"/>
                                        <span className="ml-2">Run paid ads</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-green-500"/>
                                        <span className="ml-2">Organize unlimited events</span>
                                    </li>
                                    <li className="flex items-center">
                                        <XIcon className="text-red-500"/>
                                        <span className="ml-2">Nearby Competition</span>
                                    </li>
                                </ul>
                            </CardFooter>
                        </Card>
                    </div>


                    <Card className="rounded-lg shadow-md p-6 hover:shadow-lg mt-20 border-black">
                        <CardHeader className="mb-4">
                            <CardTitle className="text-4xl font-semibold mb-3 text-center">Enterprise</CardTitle>
                            <CardDescription className="text-lg text-black text-center">
                                Tailored plans designed for global scalability across numerous cities worldwide.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mb-6">
                            <p className="text-3xl font-bold mb-4 text-center">₹ 10,00,000/<span
                                className="text-[24px] font-medium">Year</span></p>
                            <Button className="w-full bg-red-600 text-white text-lg font-semibold">Register Now</Button>
                        </CardContent>
                        <CardFooter>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Unlimited loyalty program</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Unlimited membership program</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Run unlimited paid ads</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Organize unlimited events</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon className="text-green-500"/>
                                    <span className="ml-2">Create personalized offers</span>
                                </li>
                            </ul>
                        </CardFooter>
                    </Card>
                </div>
            </div>


            <PricingTable/>


        </div>
    )
}

interface IconProps {
    className?: string;
}

function CheckIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    )
}


function XIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}

function InfoIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
        </svg>
    )
}
