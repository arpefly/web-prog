import useData from "../hooks/useData";
import brandsData from "../mockData/brandsData";

import Preloader from "./Preloader";

export const BrandsImage = ({ brand: { alt, src } }) => (
  <img className="brands_section__img" src={src} alt={alt} />
);

export const BrandsTemplate = ({ brandsData }) =>
  brandsData?.map((brand, index) => <BrandsImage key={index} brand={brand} />);

const Brands = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "brands",
    options: {
      method: "GET",
    },
  });

  if (isLoading) return <Preloader />;
  
  const renderedData = data || brandsData;

  if (isError) {
    console.error("Ошибка загрузки данных brands:", error);
  }

  return <BrandsTemplate brandsData={renderedData} />;
};

export default Brands;
