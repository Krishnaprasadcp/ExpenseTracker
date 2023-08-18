import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let message = "Something went wrong";
  let title = "Refresh the page";
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
export default ErrorPage;
