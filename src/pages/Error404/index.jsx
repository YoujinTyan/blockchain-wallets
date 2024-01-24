import { useRouteError } from "react-router-dom";

export default function Error404() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Ой! Упс!</h1>
      <p>Такой страницы не существует.</p>
      <p>
        <p>Код ошибки:</p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
