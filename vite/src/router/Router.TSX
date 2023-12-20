import ReactDom from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  );
};

export default Router;
