import Footer from "@/components/Footer"
import Header from "@/components/Header"
import FinancialBoost from "@/components/SectionsProducts/FinancialBoost"
import LoanSection from "@/components/SectionsProducts/LoanSection"
import Welcome from "@/components/SectionsProducts/Welcome"

export default function InstitucionalPage() {
  return (
    <>
      <Welcome/>
      <LoanSection/>
      <FinancialBoost/>
    </>
  )
}
