import logoSvg from "../assets/img/logo.svg";

export const menuData = [
  {
    title: "Главная",
    href: "#",
    isActive: true
  },
  {
    title: "Что такое GPT?",
    href: "#",
    isActive: false
  },
  {
    title: "Open AI",
    href: "#",
    isActive: false
  },
  {
    title: "Кейсы",
    href: "#",
    isActive: false
  },
  {
    title: "Библиотека",
    href: "#",
    isActive: false
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "#",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "#",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: logoSvg,
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
