import registerData from "../mockData/registerData";


const Register = () => {
  const { link, title, buttonText } = registerData;

  return (
    <div className="container__register">
      <div className="container__register__left">
        <a href={link.href} className="left_cta">
          {link.text}
        </a>
        <h3>{title}</h3>
      </div>
      <div className="container__register__right">
        <button className="btn cta_buttons_start">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Register;