'use client'

import BenefitsSection from "@/components/Sections/BenefitsSection";
import FaqSection from "@/components/Sections/FaqSection";
import Hero from "@/components/Sections/Hero";
import SaqueFacil from "@/components/Sections/SaqueFacil";
import SatisfactionSection from "@/components/Sections/SatisfactionSection";
import SecuritySection from "@/components/Sections/SecuritySection";
import VideoSection from "@/components/Sections/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <VideoSection/>
      <SatisfactionSection/>
      <BenefitsSection/>
      <SecuritySection/>
      <SaqueFacil/>
      <FaqSection/>
    </>
  );
}
