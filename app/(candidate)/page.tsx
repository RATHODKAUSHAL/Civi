import BrowseCategories from "@/components/shared/candidate/Browse-categories";
import FindTalent from "@/components/shared/candidate/Find-talent";
import Footer from "@/components/shared/candidate/Footer";
import Header from "@/components/shared/candidate/Header";
import Navbar from "@/components/shared/candidate/Navbar";
import PartnerLogos from "@/components/shared/candidate/Partner-logos";
import PopularServices from "@/components/shared/candidate/Popular-services";
import PricingPlans from "@/components/shared/candidate/Pricing-plans";
import ServiceCategories from "@/components/shared/candidate/service-categories";
import Testimonials from "@/components/shared/candidate/Testimonals";
import TopEmployees from "@/components/shared/candidate/Top-Employee";

export default async function page(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <ServiceCategories/>
            <PopularServices/>
            <FindTalent/>
            <PartnerLogos/>
            <BrowseCategories/>
            <TopEmployees/>
            <Testimonials/>
            {/* <PricingPlans/> */}
            <Footer/>
        </div>
    )
}