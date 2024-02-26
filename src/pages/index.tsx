import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const handleAddressRetrieved = (address: string) => {
    setUserAddress(address);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          You are gay
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/steven.jpeg"
              alt="London eye"
              width={1000}
              height={1000}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
