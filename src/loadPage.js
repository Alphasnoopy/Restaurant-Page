import createTabs from "./tabs";
import createHomePage from "./home";
import createfooter from "./footer";
 
 function loadPage() {
      createTabs();
      createHomePage();
      createfooter();
 }

 export default loadPage;