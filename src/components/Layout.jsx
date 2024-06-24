import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar.jsx";

const Layout = () => {
    return (
        <>
            <main className="grid grid-cols-8">
                <SideBar/>
                <div className="col-start-2 col-span-7">
                    <Header/>
                    <div className="w-4/5 mx-auto py-20">{<Outlet/>}</div>
                </div>
            </main>
        </>
    )
}
export default Layout
                      