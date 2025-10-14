import { rightsData } from "../mockData/rightsData";


const Rights = () => {

    const {title} = rightsData;

    return <p className="footer_text">{title}</p>
};

export default Rights;
