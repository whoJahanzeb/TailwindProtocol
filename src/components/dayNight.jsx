import React from 'react'
import {BsSun} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {toggleDarkMode} from "../features/darkModeSlice.jsx";
import {MdOutlineNightsStay} from "react-icons/md";

const DayNight = () => {
    const dispatch = useDispatch()
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <button
                className={mode ? "border rounded-full px-1 py-1 text-emerald-300 border-emerald-300" : "border-2 rounded-full px-1 py-1"}
                onClick={() => dispatch(toggleDarkMode())}>
                {mode ? <MdOutlineNightsStay/> : <BsSun/>}</button>
        </>
    )
}
export default DayNight
