"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import images from "@/public/images.png"
import forage from "@/public/forage.png"
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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Certificate Card 1 */}
          
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300  md:w-1/2 lg:w-1/3">
          <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/JMWPNH652JHA" target="_blank">
          <Image
            src={images}
            alt="Project I worked on"
            
            className=" hidden sm:block  w-[10rem] h-[10rem] shadow-2xl m-auto"
          />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Deep Learning Specialization</h3>
              <p className="text-gray-600 mt-3" >DeepLearning.AI</p>
            </div>
            <p className="text-sm text-gray-500">Completed in September 2023</p>
            </Link>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300  md:w-1/2 lg:w-1/3">
          <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_PAuPp753M7jodrTCr_1673086374375_completion_certificate.pdf" target="_blank">
          <Image
            src={forage}
            alt="Project I worked on"


            className=" hidden sm:block w-[10rem] h-[10rem] rounded-t-lg shadow-2xl m-auto"
          />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Software Eng. Virtual Experience</h3>
              <p className="text-gray-600">J.P Morgan</p>
            </div>
            <p className="text-sm text-gray-500">Completed in January 2023</p>
            </Link>
          </div>
        
          </div>
          {/* Add more certificate cards as needed */}
        </div>
    </motion.section>
  );
}
