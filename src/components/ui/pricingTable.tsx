import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

const PricingTable = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto mt-20 -z-40 overflow-x-auto font-lato">
                <h1 className="text-center font-semibold text-[#C43939] text-6xl mb-20">Feature Breakdown</h1>
                <Table className="mb-20">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="min-w-[200px]">Marketing & Promotions</TableHead>
                            <TableHead className="min-w-[200px]">Starter</TableHead>
                            <TableHead className="min-w-[200px]">Growth</TableHead>
                            <TableHead className="min-w-[200px]">Enterprise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Advertise to customer</TableCell>
                            <TableCell>1 Ad/month</TableCell>
                            <TableCell>5 Ad/month</TableCell>
                            <TableCell>Unlimited ads</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Festive Offers</TableCell>
                            <TableCell>1 Ad/month</TableCell>
                            <TableCell>5 Ad/month</TableCell>
                            <TableCell>Unlimited ads</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mb-20">
                    <TableHeader style={{background: 'linear-gradient(0deg, #E3FFB1 0%, #FFF 100%)'}}>
                        <TableRow>
                            <TableHead className="min-w-[200px] border-[#B8EC5C]">Memberships</TableHead>
                            <TableHead className="min-w-[200px] border-[#B8EC5C]">Starter</TableHead>
                            <TableHead className="min-w-[200px] border-[#B8EC5C]">Growth</TableHead>
                            <TableHead className="min-w-[200px] border-[#B8EC5C]">Enterprise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Membership</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell>1 Memberships</TableCell>
                            <TableCell>5 Memberships</TableCell>
                            <TableCell>Unlimited Membership</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-l">
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Pause, Cancel</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Discounts/offers</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-red-500 h-full align-middle">
                                    <XIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-red-500 h-full align-middle">
                                    <XIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mb-20">
                    <TableHeader style={{background: 'linear-gradient(0deg, #FFE5EC 0%, #FFF 100%)'}}>
                        <TableRow>
                            <TableHead className="min-w-[200px] border-[#FFC2D3]">Support</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFC2D3]">Starter</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFC2D3]">Growth</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFC2D3]">Enterprise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Email</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell>1 Ad/month</TableCell>
                            <TableCell>5 Ad/month</TableCell>
                            <TableCell>Unlimited ads</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-l">
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Chat Support</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell>1 Ad/month</TableCell>
                            <TableCell>5 Ad/month</TableCell>
                            <TableCell>Unlimited ads</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mb-20">
                    <TableHeader style={{background: 'linear-gradient(0deg, #fed 0%, #FFF 100%)'}}>
                        <TableRow>
                            <TableHead className="min-w-[200px] border-[#FFD0A1]">Loyalty</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFD0A1]">Starter</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFD0A1]">Growth</TableHead>
                            <TableHead className="min-w-[200px] border-[#FFD0A1]">Enterprise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Point Based Loyalty</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-red-500 h-full align-middle">
                                    <XIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-l">
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Loyalty Discounts</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Referral Scheme</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-red-500 h-full align-middle">
                                    <XIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-red-500 h-full align-middle">
                                    <XIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mb-20">
                    <TableHeader style={{background: 'linear-gradient(0deg, #E8F8FF 0%, #FFF 100%)'}}>
                        <TableRow>
                            <TableHead className="min-w-[200px] border-[#98DEFF]">Customer Engagement</TableHead>
                            <TableHead className="min-w-[200px] border-[#98DEFF]">Starter</TableHead>
                            <TableHead className="min-w-[200px] border-[#98DEFF]">Growth</TableHead>
                            <TableHead className="min-w-[200px] border-[#98DEFF]">Enterprise</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Single Time Rewards</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-l">
                                <div className="flex justify-between items-center">
                                    <span className="flex-grow text-center">Level Based Rewards</span>
                                    <InfoIcon className="ml-2"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                            <TableCell className="text-center align-middle">
                                <div className="inline-block text-green-500 h-full align-middle">
                                    <CheckIcon className="inline-block"/>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>

            <div
                className="mt-12 bg-[#C5393A] flex justify-center items-center gap-10 text-white text-center py-4 h-[168px]">
                <h3 className="text-4xl font-medium mt-1">Ready to get started?</h3>
                <Button className="bg-white mt-[3px] text-red-600 font-medium py-2 px-4 rounded-3xl hover:bg-gray-100">
                    Register Now
                </Button>
            </div>
        </>
    );
};


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
export default PricingTable;