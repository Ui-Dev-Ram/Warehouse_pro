import HeroBanner from "@/components/home/herosection/HeroBanner";
import WeProvideReliableServices from "@/components/home/WeProvideReliableServices/WeProvideReliableServices";
import OurBouquetof3PLServices from "@/components/home/our-bouquet-of-3PL-services/OurBouquetof3PLServices";
import OurListedWarehouses from "@/components/home/our-listed-warehouses/OurListedWarehouses";
import LetCheckoutOurIndustry from "@/components/home/Let-Checkout-Our-Industry/LetCheckoutOurIndustry";
import OurValueOurPresence from "@/components/home/ourValueOurPresence/OurValueOurPresence";
import Testimonial from "@/components/home/testimonial/Testimonial";
import FrequentlyAskedQuestion from "@/components/home/frequentlyAskedQuestion/FrequentlyAskedQuestion";
import Blog from "@/components/home/blog/Blog";
import Head from 'next/head'
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";



export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeroBanner />
      <OurListedWarehouses />
      <OurBouquetof3PLServices />
      <WeProvideReliableServices />
      <LetCheckoutOurIndustry />
      <OurValueOurPresence />
      <Testimonial />
      <FrequentlyAskedQuestion />
      <Blog />
      <NetworkofWarehouzez />

    </div>
    
  );
}
