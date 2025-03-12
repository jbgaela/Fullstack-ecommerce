import { useState } from "react";
import Router from "./router/Router";
import publicRoute from "./router/routes/publicRoutes";

// const publicRoutePath = publicRoutes;

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoute]);
  return <Router allRoutes={allRoutes} />;
}

export default App;
