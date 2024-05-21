import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";
import { SiCalendly } from 'react-icons/si';

export const Copy = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">
        <Link
          href="https://calendly.com/rui-valente99/30min"
          target="_blank"
          rel="nofollow"
          className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
        >
          <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
            HEY!
          </span>
          <span className="ml-1.5 mr-1 inline-block">
            Book a Call with us
          </span>
          <FiArrowUpRight className="mr-2 inline-block" />
        </Link>
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
        Unlock the Power of AI for Your Business
      </h1>
      <p className="mx-auto my-4 max-w-2xl text-center text-base leading-relaxed md:my-6 md:text-xl md:leading-relaxed">
        Transforming <span className='text-bold text-orange-600'>Small</span> and <span className='text-bold text-orange-600'>Medium</span> Enterprises with Customized AI Solutions. At CASS, we offer tailor-made AI solutions to optimize your processes and drive growth.
      </p>
      {/* <Button>
        <span className="font-bold text-center">
          <SiCalendly className="inline-block mr-2" />
          Book a Call
        </span>
      </Button> */}
    </>
  );
};
