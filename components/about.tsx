"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import images from "@/public/images.png"
import forage from "@/public/forage.png"
import aws from "@/public/aws.png"
import Image from "next/image";
import Link from "next/link"

export default function Certificates() {
  const { ref } = useSectionInView("Certificates");

  return (
    
    <motion.section
      id="Certificates"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Certificates</SectionHeading>
      <div className="container mx-auto px-4 ">
        <div className="flex flex-row gap-6 justify-center items-start overflow-x-auto flex-nowrap ">
          {/* Certificate Card 1: AWS */}
          <div className="  bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-[24rem] md:w-1/2 lg:w-1/3">
            <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d2e717d47e8e428aa515fa9f49c41d1f" target="_blank">
              <Image
                src={aws}
                alt="Project I worked on"
                className=" hidden sm:block  w-[10rem] h-[10rem] shadow-2xl m-auto"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold dark:text-gray-300">AWS Certified Cloud Practitioner</h3>
                <p className="text-gray-600 mt-3 dark:text-gray-300" >Amazon Web Services</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Completed in August 2024</p>
            </Link>
          </div>
          {/* Certificate Card 2: Deep Learning */}
          <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-[24rem] md:w-1/2 lg:w-1/3">
            <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/JMWPNH652JHA" target="_blank">
              <Image
                src={images}
                alt="Project I worked on"
                className=" hidden sm:block  w-[10rem] h-[10rem] shadow-2xl m-auto"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Deep Learning Specialization</h3>
                <p className="text-gray-600 mt-3 dark:text-gray-300" >DeepLearning.AI</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Completed in September 2023</p>
            </Link>
          </div>
          {/* Certificate Card 3: Software Eng. Virtual Experience */}
          <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-[24rem] md:w-1/2 lg:w-1/3">
            <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_PAuPp753M7jodrTCr_1673086374375_completion_certificate.pdf" target="_blank">
              <Image
                src={forage}
                alt="Project I worked on"
                className=" hidden sm:block w-[10rem] h-[10rem] rounded-t-lg shadow-2xl m-auto"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Software Eng. Virtual Experience</h3>
                <p className="text-gray-600 mt-3 dark:text-gray-300">J.P Morgan</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Completed in January 2023</p>
            </Link>
          </div>
        </div>
        {/* Add more certificate cards as needed */}
      </div>
    </motion.section>
  );
}
