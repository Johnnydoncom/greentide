import Image from 'next/image'
import heroImage from "../public/images/home-hero.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">

      <section className="home-hero py-24 bg-cover bg-no-repeat relative" style={{
          backgroundImage: `url(${heroImage.src})`,
      }}>
          <div className={`absolute inset-0 bg-primary-300 bg-opacity-40`}></div>
            <div className="container max-w-3xl flex items-center gap-8 lg:gap-14 relative">
                <Image src="/images/home-hero.jpg" alt={`GreenTide Waste`} width={400} height={400} className={`w-40 h-40 lg:w-60 lg:h-60 object-auto rounded-tl-lg rounded-br-xl rounded-bl-3xl rounded-tr-2xl border-[8px] border-white`}/>

              <div>
                  <h1 className="text-6xl lg:text-[6.5rem] font-bold text-white">Your <br/> Waste</h1>
              </div>
            </div>
        </section>
        <section className={`bg-accent-200 py-10 lg:py-14`}>
            <div className="container max-w-xl text-center">
                <h2 className={`font-semibold text-xl text-primary-900 mb-2`}>Our journey begins with a simple idea</h2>
                <p className={`text-xl text-primary-900 italic`}>To repurpose discarded flooring materials and make a positive impact on both the environment and communities in need.</p>
            </div>
        </section>

        <section className="relative overflow-hidden">
            <div>
                <div className="container py-6 lg:py-44 grid grid-cols-1 lg:grid-cols-2">
                    <div className="block z-0 top-0 left-0 lg:order-last">
                        <Image src={`/images/floor-removal.webp`} alt={`Floor Removal`} className={`grayscale min-h-[30rem] w-full lg:w-1/2 h-full object-cover lg:absolute z-0 right-0 top-0`} width={600} height={600}/>
                    </div>

                    <div className={`lg:pr-24 py-4`}>
                        <h2 className={`font-bold font-serif text-primary text-3xl lg:text-7xl mb-4`}>Reclaim</h2>
                        <p className={`text-lg`}>We are dedicated to reclaiming discarded flooring materials from various sources including deconstructed facilities and product storages areas that lack controls, supporting them for sustainable use and minimizing environmental impact.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative overflow-hidden">
            <div>
                <div className="container py-6 lg:py-44 grid grid-cols-1 lg:grid-cols-2">
                    <div className="block z-0 top-0 left-0">
                        <Image src={`/images/person-people-woman-house-home-hut-883.jpg`} alt={`Floor Removal`} className={`grayscale min-h-[30rem] w-full lg:w-1/2 h-full object-cover lg:absolute z-0 left-0 top-0`} width={600} height={600}/>
                    </div>

                    <div className={`lg:pl-24 py-4`}>
                        <h2 className={`font-bold font-serif text-primary text-3xl lg:text-7xl mb-4`}>Rehome</h2>
                        <p className={`text-lg`}>We aim to reintroduce these reclaimed materials at affordable prices across low-income communities, offering new opportunities for these residents in the homes of those who need them most.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
