module.exports = {
    name: "Landscaping Demo",
    email: "dave@morebetter.ca",
    phoneForTel: "519-301-5898",
    phoneFormatted: "(519) 301-5898",
    address: {
        lineOne: "521 Brunswick Street",
        city: "Stratford",
        state: "ON",
        zip: "N5A 3N7",
        country: "CA",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
