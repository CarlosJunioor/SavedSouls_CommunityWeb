import Image from "next/image";
import { Inter } from "next/font/google";

import savedsoulsLogo from "../public/image.png";
import captain from "../public/captain.png"
import scene from "../public/scene1.jpg"
import officer from "../public/officer.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-48 top-0 left-0">
      <div className="relative bg-gradient-to-b from-gray-500 to-transparent ">
        <Image
          src="/savedsouls.jpg"
          alt="description of image"
          width={1920}
          height={640}
          className="opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="content-center">
            <Image
              src={savedsoulsLogo}
              alt="description of image"
              width={372}
              height={210}
            />
          </div>
          <h1 className="text-center font-myfont text-8xl mt-10">
            Community Stats
          </h1>
          <h2 className="text-center mt-2">
            Community based project to track discord activity of our Saved Souls
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-gray-300 p-6">
    <Image
              src={captain}
              alt="description of image"
              width={372}
              height={210}
            />
      <h3 className="text-lg font-bold mb-2">O Captain My Captain</h3>
      <p className="text-gray-700 text-base">Daily messages</p>
    </div>
    <div className="bg-gray-300 p-6" >
    <Image
              src={officer}
              alt="description of image"
              width={372}
              height={210}
            />
      <h3 className="text-lg font-bold mb-2">Officer Ranks</h3>
      
      <p className="text-gray-700 text-base">current officer ranks</p>
    </div>
    <div className="bg-gray-300 p-6">
    <Image
              src={scene}
              alt="description of image"
              width={372}
              height={210}
            />
      <h3 className="text-lg font-bold mb-2">New Users</h3>
      <p className="text-gray-700 text-base">daily new users joined</p>
    </div>
  </div>
</div>

      <div className="text-center mt-16">
        <h3 className="text-lg font-bold mb-2 text-white">
          More status you should know
        </h3>
      </div>

      <div className="bg-transparent w-full text-center p-6 border-white max-w-md mx-auto">
        <p className="text-gray-700 text-base border-b-2 border-gray-200 pb-2 relative pl-8 text-left text-white">
          <span className="absolute left-0 top-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7 5a5 5 0 100-10 5 5 0 000 10z" />
            </svg>
          </span>
          Total Messages: <span className="float-right">1000</span>
        </p>

        <p className="text-gray-700 text-base border-b-2 border-gray-200 pb-2 relative pl-8 text-left text-white">
          <span className="absolute left-0 top-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7 5a5 5 0 100-10 5 5 0 000 10z" />
            </svg>
          </span>
          Unique Chatters: <span className="float-right">500</span>
        </p>
      </div>
    </main>
  );
}
