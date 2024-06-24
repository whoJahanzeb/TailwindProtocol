import React from 'react'
import {NavLink} from "react-router-dom";
import SearchPart from "./searchPart.jsx";
import {useSelector} from "react-redux";
import DayNight from "./dayNight.jsx";

const Header = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <header
                className={mode ? "h-12 px-4 border-b border-gray-700 py-2 flex justify-between w-5/6 bg-zinc-900 fixed right-2" : "h-12 px-4 border-b py-2 flex justify-between w-5/6 bg-white fixed right-2"}>
                <SearchPart/>
                <div className="space-x-10">
                    <NavLink to="/">API</NavLink>
                    <NavLink to="#">Documentation</NavLink>
                    <NavLink to="#">Support</NavLink>
                    <span>|</span>
                    <DayNight/>
                    <button className="bg-black rounded-full text-white px-3 py-1">Sign in</button>
                </div>
            </header>
        </>
    )
}
export default Header
