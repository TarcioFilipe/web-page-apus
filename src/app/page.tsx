'use client'

import BenefitsSection from "@/components/BenefitsSection";
import Hero from "@/components/Hero";
import SatisfactionSection from "@/components/SatisfactionSection";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <VideoSection/>
      <SatisfactionSection/>
      <BenefitsSection/>
    </>
  );
}
