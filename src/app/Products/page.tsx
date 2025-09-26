'use client'


import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Advantages from "@/components/SectionsProducts/Advantages"
import BenefitsClub from "@/components/SectionsProducts/BenefitsClub"
import CardApus from "@/components/SectionsProducts/CardApus"
import FinancialBoost from "@/components/SectionsProducts/FinancialBoost"
import LifeInsurance from "@/components/SectionsProducts/LifeInsurance"
import LoanSection from "@/components/SectionsProducts/LoanSection"
import Portability from "@/components/SectionsProducts/Portability"
import Welcome from "@/components/SectionsProducts/Welcome"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function InstitucionalPage() {
  const pathname = usePathname();
  const hash = typeof window !== 'undefined' ? window.location.hash : '';

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [pathname, hash]);

  return (
    <>
      <Welcome/>
      <LoanSection/>
      <FinancialBoost/>
      <CardApus/>
      <div id="benefits" className="scroll-mt-24">
        <BenefitsClub/>
      </div>
      <LifeInsurance/>
      <Portability/>
      <Advantages/>
    </>
  )
}
