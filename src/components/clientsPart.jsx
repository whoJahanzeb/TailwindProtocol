import React from 'react'
import Tabs from "./Tabs.jsx";
import '../tabs.css';
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {useSelector} from "react-redux";

const ClientsPart = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <h1 className="text-lg font-semibold my-6">Choose your client</h1>
                <p>Before making your first API request, you need to pick which API client you will use. In addition to
                    good ol' cURL HTTP requests, Protocol offers clients for JavaScript, Python, and PHP. In the
                    following example, you can see how to install each client.</p>
                <div className="my-10">
                    <Tabs/>
                    <div className={mode?"my-3 flex items-center text-emerald-300 space-x-2":"my-3 flex items-center text-emerald-500 space-x-2"}>
                        <div>
                            <NavLink className="font-semibold" to="/sdks">Check out our list of
                                first-party SDKs</NavLink>
                        </div>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ClientsPart
