import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";


import React from "react";

export default function Home() {
  const [sStorage, setSStorage] = React.useState(null);
  const [lStorage, setLStorage] = React.useState(null);
  React.useEffect(() => {
    if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
      sessionStorage.setItem('user', localStorage.getItem('user'));
    }
    setSStorage(sessionStorage.getItem('user'));
    setLStorage(localStorage.getItem('user'));
  }, [sStorage, lStorage]);

  return (
    <div>
      <PageHeader isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <HomePage   isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <Landing    isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />

    </div>
  );
}


