import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman";
import Register from "../components/Register";
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Right from "../components/Rights"

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman">
        <Woman />
      </section>
      <section className="register-n-start">
        <Register />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="section footer_">
        <Footer />
      </section>
      <section className="right">
        <Right />
      </section>

    </>
  );
};

export default Home;
