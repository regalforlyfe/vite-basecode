import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-9xl">Oops..</h1>
      <p className="text-6xl mt-5">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
