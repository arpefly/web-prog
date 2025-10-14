import { rightsData } from "../mockData/rightsData";


const Right = () => {

    const {title} = rightsData;

    return <p className="footer_text">{title}</p>
};
export default Right;