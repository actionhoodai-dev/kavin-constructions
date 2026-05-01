import Link from "next/link";
import Image from "next/image";
import { Oswald, Urbanist } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Footer() {
  const serviceLinks = [
    { name: 'Land Surveying', url: '/services#land-survey' },
    { name: 'Boundary Marking', url: '/services#site-measurement' },
    { name: 'Site Planning', url: '/services#layout-planning' },
    { name: 'Construction Works', url: '/services#civil-const' },
    { name: 'Consultation', url: '/services#building-est' }
  ];

  return (
    <footer 
      className="w-full relative overflow-hidden pt-12 pb-12 px-6 lg:px-12 xl:px-16 text-[#121212]"
      style={{
        background: 'linear-gradient(180deg, rgba(254, 254, 254, 0.91) 0%, #D6D6D6 122.42%)',
        borderTop: '1px solid #eaeaea'
      }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4 lg:w-[35%] xl:w-[38%] max-w-[498px]">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image 
                src="/images/kcs-logo-without-bg.png" 
                alt="KCS Logo"
                width={100}
                height={100}
                className="object-contain cursor-pointer"
                unoptimized
              />
            </Link>
            <p className={`${urbanist.className} text-[15px] font-medium text-[#121212] leading-[1.6]`}>
              KAVIN Construction and Surveyors delivers trusted land <br className="hidden xl:block" />
              surveying and quality construction services across Tamil&nbsp;Nadu <br className="hidden xl:block" />
              with precision, professionalism, and lasting value.
            </p>
            <div className="flex gap-4 pt-1">
               {[
                 { name: 'FB', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.339 10.91 4 13.28 4H15v4z', url: '#' },
                 { name: 'X', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17h-2.126l-3.374-4.814L7.545 17H6l4.636-5.455L6 7h2.126l3.195 4.568L14.455 7H16l-4.455 5.239L16.5 17zm-1.848-1.423h-1.183l-4.708-6.72h1.182l4.709 6.72z', url: '#' },
                 { name: 'IG', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5A1.5 1.5 0 0 1 15 18H9a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 9 9h6a1.5 1.5 0 0 1 1.5 1.5v6zm-4.5-5.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm0 4c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM15 11c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z', url: '#' },
                 { name: 'WA', icon: 'M12 0C5.373 0 0 5.373 0 12c0 2.115.548 4.103 1.517 5.823L.267 23.733l6.068-1.218A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.54 17.26c-.28.78-1.58 1.48-2.22 1.58-.6.1-1.38.22-3.86-.82-2.98-1.26-4.9-4.32-5.06-4.52-.14-.2-1.2-1.6-1.2-3.04 0-1.44.76-2.16 1.04-2.46.28-.28.6-.36.8-.36.2 0 .4 0 .58.02.2.02.48-.08.76.6.28.72.96 2.34 1.04 2.5.08.16.14.36.04.56-.1.2-.16.32-.32.52-.16.2-.34.42-.48.58-.16.18-.32.36-.12.72.2.34.88 1.46 1.88 2.36 1.3 1.16 2.42 1.52 2.76 1.68.34.16.54.14.74-.08.2-.24.86-.98 1.1-1.32.24-.34.48-.28.8-.16.32.12 2.04.96 2.4 1.14.36.18.6.26.68.4.1.14.1 1.06-.18 1.84z', url: '#' }
               ].map((item) => (
                 <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded-full bg-[#121212] flex items-center justify-center text-white hover:bg-yellow-500 hover:-translate-y-1 transition-all shadow-sm">
                   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={item.icon}/></svg>
                 </a>
               ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-3">
            <h4 className={`${oswald.className} text-[20px] font-semibold text-[#121212] uppercase tracking-wide mb-1`}>COMPANY</h4>
            <ul className="space-y-1">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className={`${urbanist.className} text-[15px] font-normal text-[#666974] hover:text-[#121212] transition-colors leading-[2]`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col space-y-3">
            <h4 className={`${oswald.className} text-[20px] font-semibold text-[#121212] uppercase tracking-wide mb-1`}>SERVICES</h4>
            <ul className="space-y-1">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className={`${urbanist.className} text-[15px] font-normal text-[#666974] hover:text-[#121212] hover:translate-x-1 inline-block transition-all leading-[2]`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col space-y-3 lg:w-[35%] xl:w-[33%]">
            <h4 className={`${oswald.className} text-[20px] font-semibold text-[#121212] uppercase tracking-wide mb-1`}>GET IN TOUCH</h4>
            <p className={`${urbanist.className} text-[15px] font-normal text-[#666974] leading-[1.6]`}>
              Have a project in mind? Connect with us for expert surveying and construction solutions.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 pt-2">
              <p className={`${urbanist.className} text-[15px] font-normal text-[#121212]`}>
                Phone: <a href="tel:+919994577514" className="hover:text-yellow-600 transition-colors">+91 9994-577514</a>
              </p>
              <p className={`${urbanist.className} text-[15px] font-normal text-[#121212]`}>
                Email: <a href="mailto:kavincivil12@gmail.com" className="hover:text-yellow-600 transition-colors">kavincivil12@gmail.com</a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
