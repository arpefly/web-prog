import womanData from "../mockData/womanData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

const Illustration = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

const Description = ({ link, title, description }) => {
  return (
    <>
      <a href={link.href} className="left_cta">
        {link.text}
      </a>
      <h2>{title}</h2>
      <p className="container_content">{description}</p>
      <a href={link.href} className="left_cta">
        {link.text}
      </a>
    </>
  );
};

const WomanTemplate = ({ illustration, womanText }) => {
  return (
    <div className="container_woman">
      <div className="woman_left">
        <Illustration {...illustration} />
      </div>
      <div className="woman_right">
        <Description {...womanText} />
      </div>
    </div>
  );
};

const Woman = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "woman",
    options: {
      method: "GET",
    },
  });

  if (isLoading) return <Preloader />;
  
  const renderedData = data || womanData;

  if (isError) {
    console.error("Ошибка загрузки данных woman:", error);
  }

  return (
    <section className="woman">
      <WomanTemplate {...renderedData} />
    </section>
  );
};

export default Woman;
