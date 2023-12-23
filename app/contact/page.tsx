// "use client"
import * as React from 'react';
import Image from 'next/image'
import ContactForm from "@/components/ContactForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us to find out more about Greentide.',
}

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col py-14">

        <section className={`bg-white pb-24 pt-14 lg:py-24`}>
            <div className="container text-center">
                <h1 className={`font-bold text-6xl lg:text-[6rem] leading-tight text-secondary-900`}>Reach Out</h1>
                <p className={`text-lg lg:text-2xl text-primary-900`}>Get in touch with us to find out more about Greentide.</p>
            </div>
        </section>
        <section className={`mb-8 relative overflow-hidden`}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`container max-w-sm p-10`}>
                        <div className="bg-primary-300 rounded-xl block rotate-2 pr-4">
                            <Image src={`/images/pexels-jeanmerci-namegabe.jpg`} className={`w-80 h-80 lg:w-80 lg:h-80 rounded-xl -mt-4 -rotate-3 object-cover object-top`} alt={`Contact Greentide Services`} width={300} height={300}/>
                        </div>
                    </div>
                    <div className={`lg:order-first`} >
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>

        <div className={`container`}>
            <ul className={`space-y-4`}>
                <li><span className={`font-semibold`}>Email</span> <br/>info@greentideservices.com </li>
                <li> <span className={`font-semibold`}>Phone</span> <br/> 07389 731096 </li>
                <li><span className={`font-semibold`}>Address</span> <br/>438 Sutton Road <br/>Southend-on-Sea <br/>SS2 5EZ</li>
            </ul>
        </div>
    </main>
  )
}
