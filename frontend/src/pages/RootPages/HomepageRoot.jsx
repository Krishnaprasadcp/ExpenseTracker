import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation";
import { Fragment } from "react";

function HomepageRoot(){
    return(
       <Fragment>
         <MainNavigation />
        <Outlet />
       </Fragment>
    );
}
export default HomepageRoot;