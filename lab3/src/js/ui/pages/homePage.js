import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initWoman from "./../components/initWoman.js"
import initRegister from "./../components/initRegister.js"
import initBlog from "../components/initBlog.js";
import initFuture from "../components/initFuture.js";
import initRights from "../components/initRights.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman"></section>
    <section class="section register-n-start"></section>
    <section class="section blog"></section>
    <section class="section future"></section>
    <section class="rights"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация раздела с брендами
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация раздела что такое GPT
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела woman
  const womanNode = rootNode.querySelector(".woman");
  initWoman(womanNode);

  // инициализация раздела register-n-start
  const registerNode = rootNode.querySelector(".register-n-start");
  initRegister(registerNode);

  // инициализация раздела blog
  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  // инициализация раздела future
  const futureNode = rootNode.querySelector(".future");
  initFuture(futureNode);

  // инициализация раздела rights
  const rightsNode = rootNode.querySelector(".rights");
  initRights(rightsNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
