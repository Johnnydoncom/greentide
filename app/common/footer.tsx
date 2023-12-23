
import React from "react";

import { Fragment } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    return (
        <React.Fragment>
            <section className={`bg-accent-500 py-8 lg:py-14`}>
                <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6">
                    <div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h2 className={`font-medium text-2xl lg:text-4xl text-white mb-2`}>Let's work together</h2>
                        <p className={`text-sm`}>Get in contact with us today!</p>
                    </div>
                    <div>
                        <a href="#" className={`btn btn-secondary`}>Contact Us</a>
                    </div>
                </div>
            </section>
            <footer className="bg-secondary">
                <div className="container pt-24 pb-8">
                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        <div className={`w-full lg:w-1/2 flex items-center gap-1`}>
                            <Image src="/images/Greentide-Logo-White.png" alt="Logo" width={300} height={100} className="h-14 w-auto" priority />
                            <span className={`text-white`}>Reclaim. ______. Rehome.</span>
                        </div>
                        <div className={`w-full lg:w-1/2 lg:text-right text-white`}>
                            <h4 className={`text-2xl lg:text-3xl`}>Contact Us</h4>
                            <address className={`not-italic font-thin text-sm lg:text-base`}>
                                <a href="mailto:info@greentidereclaims.com">info@greentidereclaims.com</a> <br/><br/>
                                Phone: 07398 379616 <br/><br/>
                                438 Sultana Road <br/> Southend-on-Sea <br/>
                                SS2 5EZ
                            </address>
                        </div>
                    </div>
                    <div>
                        <p className={`text-sm text-white font-medium`}>Copyright &copy; {new Date().getFullYear()} <Link color="inherit" href="/">
                            Greentide Services
                        </Link>{' '}</p>
                    </div>
                </div>
            </footer>
       </React.Fragment>
    );
}