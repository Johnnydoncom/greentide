import Image from 'next/image'
import heroImage from "../../public/images/home-hero.jpg";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: 'At Greentide, we conceived the notion that there is better use for high-quality flooring materials than being discarded in ever-growing landfills across the UK and Europe.',
}
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">

        <section className={`bg-white pb-24 pt-8 lg:py-24`}>
            <div className="container max-w-xl text-center">
                <h1 className={`font-bold text-6xl lg:text-[6rem] leading-tight text-secondary-900`}>About</h1>
                <p className={`text-lg text-primary-900`}>Understanding what we do here at Greentide.</p>
            </div>
        </section>
        <section className="relative">
            <div>
                <div className="container py-6 lg:py-44 grid grid-cols-1 gap-14 lg:gap-14 lg:grid-cols-2">
                    <div className="block z-0 top-0 left-0 lg:order-last">
                        <Image src={`/images/Greentide-Map.jpg`} alt={`Floor Removal`} className={`w-full lg:w-1/2 h-full object-contain object-right lg:absolute z-0 right-0 top-0`} width={600} height={800} />
                    </div>

                    <div className={`lg:pr-14 py-4 `}>
                        <p className={`text-base lg:text-lg mb-4 leading-loose`}>At Greentide, we conceived the notion that there is better use for high-quality flooring materials than being discarded in ever-growing landfills across the UK and Europe.</p>

                        <p className={`text-base lg:text-lg leading-loose`}>Moreover, we recognised that in significant parts of Africa, individuals with very limited incomes face challenges in acquiring essential flooring materials to properly cover their homes, leaving their families to settle for bare concrete floors.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative">
            <div>
                <div className="container py-6 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 items-end">
                    <div className="block z-0 lg:-mt-24">
                        <Image src={`/images/Greentide-For-Every-removebg.png`} alt={`Floor Removal`} className={`lg:min-h-[30rem] w-full object-cover z-0`} width={600} height={600}/>
                    </div>

                    <div className={`lg:pl-24 pt-4`}>
                        <p className={`text-base lg:text-lg leading-loose mb-4`}>Hence, we bridge this gap by providing a collection service for manufacturers and retailers of “carpet tiles”, and then shipping these products overseas to West Africa, where they are sold for re-use.</p>

                        <p className={`text-base lg:text-lg leading-loose`}>For every 10 square metres of carpet tiles resold, we work with partner charities to donate and install 1 square metre in the homes of those who need it most.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}
