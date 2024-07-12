
// /** @type {import('next').NextConfig} */
// const nextConfig = {};


const config = {
    // output: "export",
    reactStrictMode: true,
    swcMinify: true,
    async rewrites(){
        return[
            {
                source: '/our-strategy',
                destination: '/aboutus/our-strategy',
            },
            {
                source: '/why-warehouzez',
                destination: '/aboutus/why-warehouzez',
            },
            {
                source: '/third-party-logistics',
                destination: '/services/third-party-logistics',
            },
            {
                source: '/on-demand-warehousing',
                destination: '/services/on-demand-warehousing',
            },
            {
                source: '/contract-logistics',
                destination: '/services/contract-logistics',
            },
            {
                source: '/warehousing-and-distribution',
                destination: '/services/warehousing-and-distribution',
            },
            {
                source: '/ecommerce-fulfillment',
                destination: '/services/ecommerce-fulfillment',
            },
            {
                source: '/reverse-logistics',
                destination: '/services/reverse-logistics',
            },
            {
                source: '/international-freight-forwarding',
                destination: '/services/international-freight-forwarding',
            },
            {
                source: '/global-scm-technology',
                destination: '/services/global-scm-technology',
            },
            {
                source: '/carrying-and-forwarding-agency',
                destination: '/services/carrying-and-forwarding-agency',
            },
            {
                source: '/digital-supply-chain-consultancy',
                destination: '/services/digital-supply-chain-consultancy',
            },
            {
                source: '/outsourcing-warehousing-operations',
                destination: '/services/outsourcing-warehousing-operations',
            },
            {
                source: '/agri-commodities-warehousing',
                destination: '/services/agri-commodities-warehousing',
            },
            {
                source: '/automotive-and-spare-parts',
                destination: '/industries/automotive-and-spare-parts',
            },
            {
                source: '/fashion-and-lifestyle',
                destination: '/industries/fashion-and-lifestyle',
            },
            {
                source: '/perfumes-and-cosmetics',
                destination: '/industries/perfumes-and-cosmetics',
            },
            {
                source: '/packed-food-products',
                destination: '/industries/packed-food-products',
            },
            {
                source: '/pharmaceutical-and-medical',
                destination: '/industries/pharmaceutical-and-medical',
            },
            {
                source: '/wind-solar-and-telecom',
                destination: '/industries/wind-solar-and-telecom',
            },
            {
                source: '/exhibition-and-entertainment',
                destination: '/industries/exhibition-and-entertainment',
            },
            {
                source: '/fitness-and-sporting',
                destination: '/industries/fitness-and-sporting',
            },
            {
                source: '/battery-and-powergrid',
                destination: '/industries/battery-and-powergrid',
            },
            {
                source: '/semiconductors-and-inverters',
                destination: '/industries/semiconductors-and-inverters',
            },
            {
                source: '/publication-and-office-records',
                destination: '/industries/publication-and-office-records',
            },
            {
                source: '/computer-and-electrical',
                destination: '/industries/computer-and-electrical',
            },
            {
                source: '/ecommerce-and-fmcg',
                destination: '/industries/ecommerce-and-fmcg',
            },
            {
                source: '/oil-and-chemical',
                destination: '/industries/oil-and-chemical',
            },
            {
                source: '/minerals-and-mining',
                destination: '/industries/minerals-and-mining',
            },
            {
                source: '/consumer-goods',
                destination: '/industries/consumer-goods',
            }
        ]
    },
    images: {
      unoptimized: true,
      domains: ['www.denofgeek.com', 'images.unsplash.com', "api.microlink.io" /* Add other domains here if needed */],
    },
  };

export default config;