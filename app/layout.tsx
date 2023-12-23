import type { Metadata } from 'next'
import { Poppins, Sansita } from 'next/font/google'
import './globals.css'
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";

const poppins = Poppins({
    weight: ['200','400','600','700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
})

const sansita = Sansita({
    weight: ['400', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-sansita',
    display: 'swap',
});

export const metadata: Metadata = {
  title: 'Greentide',
  description: 'At Greentide, we conceived the notion that there is better use for high-quality flooring materials than being discarded in ever-growing landfills across the UK and Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${sansita.variable}`}>
      <body >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
