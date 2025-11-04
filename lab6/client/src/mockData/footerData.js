
const title = "Хотите Шагнуть в Будущее Раньше Других?";

const buttonText = "Запросить ранний доступ";

const footerLogo = {
    image: {
        src: "./assets/img/logo.svg",
        alt: "gpt4"
    },
    address: ["ул. Профессора Поздеева, 13, к.Г,\nПермь, Пермский край, 614013"],
    comment: "Все права защищены"
};

const footerLinks = [
    {
        title: "Ссылки",
        links: [
            {
                href: "#",
                text: "Овероны"
            },
            {
                href: "#",
                text: "Соц. сети"
            },
            {
                href: "#",
                text: "Счетчики"
            },
            {
                href: "#",
                text: "Контакты"
            },
            
        ]
    },
    {
        title: "Компания",
        links: [
            {
                href: "#",
                text: "Условия использования"
            },
            {
                href: "#",
                text: "Перс. данные"
            },
            {
                href: "#",
                text: "Конаткты"
            },            
        ]
    },
    {
        title: "Контакты",
        links: [
            {
                href: "#",
                text: [
                    "ул. Профессора",
                    <br />,
                    "Поздеева, 13, к.Г, Пермь"]
            },
            {
                href: "#",
                text: "+7 (342) 2-198-520"
            },
            {
                href: "#",
                text: "info@pstu.ru"
            },            
        ]
    },
];

export const footerData = {
    title,
    buttonText,
    footerLogo,
    footerLinks
}

export default footerData;
