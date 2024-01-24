import { useRouteError } from "react-router-dom";
import GeneralLayout from "../../layouts/GeneralLayout";

export default function Error404() {
  const error = useRouteError();

  return (
    <GeneralLayout>
      <div className="page-container">
        <h1>Ой! Упс!</h1>
        <p>Такой страницы не существует.</p>
        <p>
          <p>Код ошибки:</p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </GeneralLayout>
  );
}
