const createDescriptionTemplate = ({ link, title }) => {
    return `        
        <a href="${link.href}" class="left_cta">${link.text}</a>
        <h3>${title}</h3>
    `;
};

const createButtonTemplate = ({ buttonText }) => {
    return `
        <button class="btn cta_buttons_start">${buttonText}</button>
    `;
};

export const registerTemplate = ({ link, title, buttonText }) => {
    const descriptionTemplate = createDescriptionTemplate({ link, title });
    const buttonTemplate = createButtonTemplate({ buttonText });

    return `
        <div class="container__register">
            <div class="container__register__left">
                ${descriptionTemplate}
            </div>
            <div class="container__register__right">
                ${buttonTemplate}
            </div>
        </div>
    `;
};
