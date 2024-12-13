import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../components/Auth/Login";
import Layout from "../../components/Layout/Layout";
import Content from "../../features/content/Content";
import Profile from "../../components/Profile/Profile";
import Forms from "../forms/Forms";
import Buttons from "../buttons/Buttons";
import Table1 from "../tables/Table1";
import Table2 from "../tables/Table2";
import Table3 from "../tables/Table3";
import Table4 from "../tables/Table4";
import Tables from "../tables/Tables";
import F404 from "../404/404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forms" element={<Forms />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="tables" element={<Tables />} />
          <Route path="tab1" element={<Table1 />} />
          <Route path="tab2" element={<Table2 />} />
          <Route path="tab3" element={<Table3 />} />
          <Route path="tab4" element={<Table4 />} />
          <Route path="*" element={<F404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
