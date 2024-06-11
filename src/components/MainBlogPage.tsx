"use client"
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"

const MainBlogPage = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6 space-y-8">
                        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Thoughtful
                                    Musings</h1>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Explore a curated collection of insightful blog posts on a wide range of topics.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Explore the Blog
                                </Link>
                            </div>
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1511947178770-4ab0fb59aa51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRhcmslMjBncmV5fGVufDB8fDB8fHww"
                                    alt="hero image"
                                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                                    width={640}
                                    height={480}/>
                                <div
                                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container px-4 md:px-6 py-12 md:py-20 lg:py-28">
                    <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
                        <div className="sticky top-4 space-y-4">
                            <h2 className="text-2xl font-bold">Explore by Category</h2>
                            <div className="grid gap-2">
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                    prefetch={false}
                                >
                                    <span>Marketing</span>
                                    <span className="text-gray-500 dark:text-gray-400">12</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                    prefetch={false}
                                >
                                    <span>Loyalty</span>
                                    <span className="text-gray-500 dark:text-gray-400">8</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                    prefetch={false}
                                >
                                    <span>Customer retention</span>
                                    <span className="text-gray-500 dark:text-gray-400">15</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                    prefetch={false}
                                >
                                    <span>Business</span>
                                    <span className="text-gray-500 dark:text-gray-400">9</span>
                                </Link>
                            </div>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
                                <Image src={"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1c3RvbWVyJTIwZW5nYWdlbWVudHxlbnwwfHwwfHx8Mg%3D%3D"} className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105" alt={"blog post"} width={550} height={310}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">Exclusive Access, Lasting Bonds..</h3>
                                    <p className="mt-2 line-clamp-2 text-gray-300">
                                        A Comprehensive Exploration In the dynamic landscape of customer engagement.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">

                                <Image src={"https://images.unsplash.com/photo-1565688842882-e0b2693d349a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG95YWx0eXxlbnwwfHwwfHx8MA%3D%3D"} className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105" alt={"blog post"} width={550} height={310}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">Strategic Loyalty</h3>
                                    <p className="mt-2 line-clamp-2 text-gray-300">
                                        Mastering Customer Loyalty in the Modern Business Landscape In the competitive.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-span-2 group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">

                                <Image src={"https://static.wixstatic.com/media/11062b_3d39bdb9d8f24c719f352a0f0ccb09c3~mv2.jpg/v1/fill/w_584,h_438,fp_0.50_0.50,q_90,enc_auto/11062b_3d39bdb9d8f24c719f352a0f0ccb09c3~mv2.jpg"} className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105" alt={"blog"} width={1150} height={310}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">Taj Hotel's NeuPass Loyalty Program: A Customer's...</h3>
                                    <p className="mt-2 line-clamp-2 text-gray-300">
                                        Introduction: Taj Hotel, one of India's renowned luxury hotel chains, recently introduced its...
                                    </p>
                                </div>
                            </div>
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">

                                <Image
                                    src={"https://static.wixstatic.com/media/a71b32_d489a4f9f0794a1eb91934ff4dbcb7f1~mv2.png/v1/fill/w_584,h_438,fp_0.50_0.50,q_95,enc_auto/a71b32_d489a4f9f0794a1eb91934ff4dbcb7f1~mv2.png"} alt={"blog"} width={550} height={310} className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">Club ITC Loyalty Program: An Excellent Choice
                                        with Room for..</h3>
                                    <p className="mt-2 line-clamp-2 text-gray-300">
                                        Introduction: Club ITC, the loyalty program offered by ITC Hotels, has made a
                                        significant impact on the Indian hospitality...
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-span-2 group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
                                <Image src={"https://static.wixstatic.com/media/78d045_a64e60c3c633483d9889b95b1b0dc607~mv2.jpg/v1/fill/w_584,h_438,fp_0.50_0.50,q_90,enc_auto/78d045_a64e60c3c633483d9889b95b1b0dc607~mv2.jpg"} className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105" alt={"blog post"} width={1150} height={350}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"/>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">Building Customer Loyalty: Strategies That Work...</h3>
                                    <p className="mt-2 line-clamp-2 text-gray-300">
                                        Introduction In the competitive landscape of today's business world, building and maintaining customer loyalty is a critical..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
        ;
};

export default MainBlogPage;

