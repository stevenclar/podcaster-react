'use client';
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Header = () => {
  // const router = useRouter();
  // const [isRedirected, setIsRedirected] = useState(false);

  // useEffect(() => {
  //   const handleStart = (url: string) => {
  //     console.log(`Loading: ${url}`);
  //     setIsRedirected(true);
  //   };

  //   const handleStop = () => {
  //     setIsRedirected(false);
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);
  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);

  return (
    <nav className='bg-white shadow-sm'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4 max-w-screen-xl'>
        <a className='flex items-center cursor-pointer'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-cyan-600'>
            Podcaster
          </span>
        </a>
        {true && (
          <span className='relative flex h-6 w-6'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-6 w-6 bg-sky-500'></span>
          </span>
        )}
      </div>
    </nav>
  );
};
