import Link from "next/link";
import React, {useEffect} from "react";

import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

<<<<<<< HEAD
export default function CreateEvents(){
=======
export default function changeProfile(){
>>>>>>> a8a2397ca4fbf2b3c414a85b2d856db23e2baf8a
    const [sStorage, setSStorage] = React.useState(null);
    const [lStorage, setLStorage] = React.useState(null);
    React.useEffect(() => {
      if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
        sessionStorage.setItem('user', localStorage.getItem('user'));
      }
      setSStorage(sessionStorage.getItem('user'));
      setLStorage(localStorage.getItem('user'));
    }, [sStorage, lStorage]);
  
return(
    <div>
      <PageHeader isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <HomePage   isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} /> 
      <Landing    isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      

        <div id="addFreind-content">

<<<<<<< HEAD
=======


>>>>>>> a8a2397ca4fbf2b3c414a85b2d856db23e2baf8a
        <div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">submit</button>
    </form>
  </div>
</div>


    </div>
<<<<<<< HEAD
</div>


);
=======
</div>);
>>>>>>> a8a2397ca4fbf2b3c414a85b2d856db23e2baf8a
}