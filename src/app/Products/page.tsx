import Footer from "@/components/Footer"
import Header from "@/components/Header"
import BenefitsClub from "@/components/SectionsProducts/BenefitsClub"
import CardApus from "@/components/SectionsProducts/CardApus"
import FinancialBoost from "@/components/SectionsProducts/FinancialBoost"
import LifeInsurance from "@/components/SectionsProducts/LifeInsurance"
import LoanSection from "@/components/SectionsProducts/LoanSection"
import Welcome from "@/components/SectionsProducts/Welcome"

export default function InstitucionalPage() {
  return (
    <>
      <Welcome/>
      <LoanSection/>
      <FinancialBoost/>
      <CardApus/>
      <BenefitsClub/>
      <LifeInsurance/>
    </>
  )
}
