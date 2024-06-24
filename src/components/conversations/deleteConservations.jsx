import React from 'react'
import DeleteRequestTab from "../contacts/deleteRequestTab.jsx";
import DeleteConservationsTab from "./deleteConservationsTab.jsx";
import {useSelector} from "react-redux";

const DeleteConservations = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Delete a conversation</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to delete your conversations in Protocol. Note: This will permanently delete the conversation and all its messages — archive it instead if you want to be able to restore it later.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <DeleteConservationsTab/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DeleteConservations
