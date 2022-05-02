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
        imgAlt: "CookieYes Preview",
        link: "#CookieYes",
    },
    {
        title: productImages.webtoffeLogo,
        titleAlt: "WebToffe",
        text: "Plugins and extensions for eCommerce needs.",
        img: productImages.webtoffe1,
        imgAlt: "WebToffe Preview",
        link: "#WebToffe",
    },
];

export default { brandsItems, productItems };
