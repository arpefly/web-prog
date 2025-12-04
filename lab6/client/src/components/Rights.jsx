import { rightsData } from "../mockData/rightsData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";


const Rights = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "rights",
        options: {
            method: "GET",
        },
    });

    if (isLoading) return <Preloader />;
    
    const renderedData = data || rightsData;
    const {title} = renderedData;

    if (isError) {
        console.error("Ошибка загрузки данных rights:", error);
    }

    return <p className="footer_text">{title}</p>
};

export default Rights;
