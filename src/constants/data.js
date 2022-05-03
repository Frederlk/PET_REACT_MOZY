import images from "./images";

const { brandsLogos } = images;
const brandsItems = [
    {
        img: brandsLogos.brandDekoria,
        alt: "Decoria",
    },
    {
        img: brandsLogos.brandDecathlon,
        alt: "Decathlon",
    },
    {
        img: brandsLogos.brandDominos,
        alt: "Dominos",
    },
    {
        img: brandsLogos.brandHeineken,
        alt: "Heineken",
    },
    {
        img: brandsLogos.brandToyota,
        alt: "Toyota",
    },
    {
        img: brandsLogos.brandRenault,
        alt: "Renault",
    },
    {
        img: brandsLogos.brandKFC,
        alt: "KFC",
    },
];

const { productImages } = images;
const productItems = [
    {
        title: productImages.cookieyesLogo,
        titleAlt: "CookieYes",
        text: "Cookie consent solution for privacy compliance.",
        img: productImages.cookieyes1,
        imgBig: productImages.cookieyes2,
        imgAlt: "CookieYes Preview",
        link: "#CookieYes",
        visitLink: "#CookieYesVisit",
        description: `<p>Build brand trust and minimize legal risks with the market-leading consent management platform that helps businesses comply with global privacy regulations. Display cookie consent banners, manage consent, generate policy documents and privacy-proof websites with CookieYes.</p>  
         <p>CookieYes is the #1 cookie compliance technology with over 1.2 million user base, powering global brands to startups across US, UK and Europe.</p>`,
    },
    {
        title: productImages.webtoffeLogo,
        titleAlt: "WebToffe",
        text: "Plugins and extensions for eCommerce needs.",
        img: productImages.webtoffe1,
        imgBig: productImages.webtoffe2,
        imgAlt: "WebToffe Preview",
        link: "#WebToffe",
        visitLink: "#WebToffeVisit",
        description: `<p>Streamline eCommerce businesses and create amazing customer experiences with our WordPress/WooCommerce plugins and extensions. Manage your day-to-day operations with extensions for product imports, smart coupons, payment gateways, subscriptions and more.</p>
         <p>WebToffee builds some of the most popular and top-rated plugins in the marketplace and powers over 1.3 million online stores and websites.</p>`,
    },
];

const { innovationImages } = images;
const innpvationItems = [
    {
        img: innovationImages.innovation01,
        alt: "10000 Start-Ups",
    },
    {
        img: innovationImages.innovation02,
        alt: "Wikipedia",
    },
    {
        img: innovationImages.innovation03,
        alt: "Smashing",
    },
    {
        img: innovationImages.innovation04,
        alt: "css",
    },
    {
        img: innovationImages.innovation01,
        alt: "10000 Start-Ups",
    },
    {
        img: innovationImages.innovation02,
        alt: "Wikipedia",
    },
];
export default { brandsItems, productItems, innpvationItems };
