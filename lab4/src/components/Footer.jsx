import { footerData } from "../mockData/footerData";


const createFutureHeader = (title, buttonText) => {
    return (
        <><h1>{title}</h1>
        <button className="btn cta_buttons_get_access">{buttonText}</button>
        </>  
    );
}

const createFooterIllustration = ({ image, address, comment }) => {
    return (<>
        <img src={image.src} alt={image.alt}></img>
        <p className="footer_text p_small">{address}</p>
        <p className="footer_text p_small">{comment}</p>
    </>);
};

const createListitem = ({ href, text, key }) => {
  return <a key={key} href={href} className="footer_text">{text}</a>;
};

const createFooterList = ({ title, links }) => {

    return (<>
        <div className="footer_list">
            <p className="footer_list_title">{title}</p>
            {links.map((link, index) => createListitem({ ...link, key: index }))}
        </div>
    
    </>);
    
};

const Footer = () => {
    const { title, buttonText, footerLogo, footerLinks} = footerData;

    const futureHeader = createFutureHeader(title, buttonText);
    const footerIllustration = createFooterIllustration(footerLogo);

    
    return (<>
        <div className="container_future">
            {futureHeader}
        </div>
        <div className="footer">
            <div className="logo">
                {footerIllustration}
            </div>
            
            {footerLinks.map((list, index) => (
                <div key={index}>
                    {createFooterList(list)}
                </div>
                ))
            }
        </div>
    
    </>);
};

export default Footer;
