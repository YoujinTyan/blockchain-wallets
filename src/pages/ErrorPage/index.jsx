import { useRouteError } from "react-router-dom";
import GeneralLayout from "../../layouts/GeneralLayout";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <GeneralLayout>
      <h1>Ошибка!</h1>
      <p>Такой страницы не существует.</p>
      <p>
        <p>Код ошибки:</p>
        <i>{error.statusText || error.message}</i>
      </p>
    </GeneralLayout>
  );
}
