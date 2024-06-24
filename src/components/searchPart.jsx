import React, {useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import SearchModal from "./SearchModal.jsx";
import {useSelector} from "react-redux";

const SearchPart = () => {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            {showModal && <SearchModal closeModal={closeModal}/>}
            <div onClick={() => setShowModal(true)}
                 className={mode ? "w-1/4 rounded-full cursor-pointer py-1.5 px-6 flex justify-between bg-zinc-800 border border-zinc-700" : "w-1/4 rounded-full cursor-pointer py-1.5 px-6 flex justify-between bg-white border"}>
                <div className="flex space-x-2 items-center">
                    <div className="text-xs"><AiOutlineSearch/></div>
                    <div><p className="text-xs">Find Something...</p></div>
                </div>
                <div className="text-xs">Ctrl K</div>
            </div>
        </>
    )
}
export default SearchPart
