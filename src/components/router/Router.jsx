import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Api } from "../pages/Api";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
        <Route
          path="/api"
          element={
            <DefaultLayout>
              <Api />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
