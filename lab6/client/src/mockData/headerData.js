export const menuData = [
  {
    type: "link",
    title: "Главная",
    href: "/",
  },
  {
    type: "button",
    title: "Что такое GPT?",
    href: "/login",
  },
  {
    type: "button",
    title: "Open AI af",
    href: "/login",
  },
  {
    type: "link",
    title: "Кейсы",
    href: "/login",
  },
  {
    type: "link",
    title: "Библиотека",
    href: "/library",
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "/login",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "/login",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: "./assets/img/logo.svg",
  href: "/login",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
