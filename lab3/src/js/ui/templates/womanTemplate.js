const createIllustrationTemplate = ({ src, alt }) => {
    return `
        <img src="${src}" alt="${alt}">
    `;
};

const createDescriptionTemplate = ({ link, title, description }) => {
    return `
        <a href="${link.href}" class="left_cta">${link.text}</a>
        <h2>${title}</h2>
        <p class="container_content">${description}</p>
        <a href="${link.href}" class="left_cta">${link.text}</a>
    `;    
};


export const womanTemplate = ({
    illustration,
    womanText
}) => {
    const illustrationTemplate = createIllustrationTemplate(illustration)
    const descriptionTemplate = createDescriptionTemplate(womanText);

    return `
        <div class="container_woman">
            <div class="woman_left">
                ${illustrationTemplate}
            </div>

            <div class="woman_right">
                ${descriptionTemplate}
            </div>
        </div>
    `;
};