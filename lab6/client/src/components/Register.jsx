import registerData from "../mockData/registerData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";


const Register = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "register",
    options: {
      method: "GET",
    },
  });

  if (isLoading) return <Preloader />;
  
  const renderedData = data || registerData;
  const { link, title, buttonText } = renderedData;

  if (isError) {
    console.error("Ошибка загрузки данных register:", error);
  }

  return (
    <>
      <div className="container__register">
        <div className="container__register__left">
          <a href={link.href} className="left_cta">
            {link.text}
          </a>
          <h3>{title}</h3>
        </div>
        <div className="container__register__right">
          <button 
            className="btn cta_buttons_start"
            onClick={() => window.location.href = "/login"}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;