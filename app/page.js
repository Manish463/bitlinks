import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 min-h-[89vh] bg-purple-100 text-black">
        <div className=" flex flex-col justify-center items-center gap-2 p-4">
          <p className={`font-bold text-2xl md:text-3xl poppins p-2 text-center`}>The best URL shortner in the Market</p>
          <p className="w-full md:w-2/3 p-2 text-center">
            This app is a privacy-focused URL shortener designed for simplicity and ease of use. Unlike many other services, it does not track users or require any personal information for login. Its goal is to provide a fast, secure, and hassle-free way to shorten URLs without compromising user privacy.
          </p>
          <div className='flex gap-8 py-3 text-white'>
            <button className='px-4 py-2 rounded-md shadow-md font-bold bg-purple-500 hover:bg-purple-600'><Link href='/shorten'>Try Now</Link></button>
            <button className='px-4 py-2 rounded-md shadow-md font-bold bg-purple-500 hover:bg-purple-600'><Link href='/https://github.com/Manish463/bitlinks'>GitHub</Link></button>
          </div>
        </div>
        <div className="relative">
          <Image alt="an Img of a vector" src={'/vector.jpg'} width={400} height={200} className="w-full h-full object-contain mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
