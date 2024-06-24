import ApiTabs from "./ApiTabs.jsx";
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import React from "react";
import {useSelector} from "react-redux";

const QuickStartApi = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="py-2">
                <h1 className="text-lg font-semibold">Making your first API request</h1>
                <p className="my-4">After picking your preferred client, you are ready to make your first call to the
                    Protocol API. Below, you can see how to send a GET request to the Conversations endpoint to get a
                    list of all your conversations. In the cURL example, results are limited to ten conversations, the
                    default page length for each client.</p>
                <ApiTabs/>
                <div
                    className={mode ? "flex items-center text-emerald-300 font-semibold my-4 space-x-2" : "flex items-center text-emerald-500 font-semibold my-4 space-x-2"}>
                    <NavLink to="/conversations">Read the docs for the Conversations endpoint</NavLink>
                    <BsArrowRight/>
                </div>
            </main>
        </>
    )
}
export default QuickStartApi
