import React from 'react'
import DeleteGroupTab from "./deleteGroupTab.jsx";
import {useSelector} from "react-redux";

const DeleteGroups = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b py-10 border-zinc-800" : "border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Delete a group</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>TThis endpoint allows you to delete groups. Note: This will permanently delete the group,
                            including the messages — archive it instead if you want to be able to restore it later.</p>
                    </div>
                    <div className="row-span-3">
                        <DeleteGroupTab/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DeleteGroups
