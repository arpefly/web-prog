import womanData from "../mockData/womanData";

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
  return (
    <section className="woman">
      <WomanTemplate {...womanData} />
    </section>
  );
};

export default Woman;
