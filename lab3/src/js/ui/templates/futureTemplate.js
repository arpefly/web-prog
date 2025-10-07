const createFutureHeader = (title, buttonText) => {
    return `<h1>${title}</h1>
            <button class="btn cta_buttons_get_access">${buttonText}</button>
        `;
}

const createFooterIllustration = ({ image, address, comment }) => {
    return `
        <img src="${image.src}" alt="${image.alt}">
        <p class="footer_text p_small">${address}</p>
        <p class="footer_text p_small">${comment}</p>
    `;
};

const createListitem = ({ href, text }) => {
    return `<a href="${href}" class="footer_text">${text}</a>`;
};

const createFooterList = ({ title, links }) => {
    return `
        <div class="footer_list">
            <p class="footer_list_title">${title}</p>
            ${links.map((links) => createListitem(links)).join("")}
        </div>
    `;
};


export const futureTemplate = ({
    title,
    buttonText,
    footerLogo,
    footerLinks
}) => {
    const futureHeader = createFutureHeader(title, buttonText);
    const footerIllustration = createFooterIllustration(footerLogo);

    return `
        <div class="container_future">
            ${futureHeader}
        </div>
        <div class="footer">
            <div class="logo">
                ${footerIllustration}
            </div>
            ${footerLinks.map((footerLinks) => createFooterList(footerLinks)).join("")}
        </div>
    `;
};