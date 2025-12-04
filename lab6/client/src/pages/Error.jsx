import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="error-page__title">Error</h1>
    </div>
  );
};

export default ErrorPage;
