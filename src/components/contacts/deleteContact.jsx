import React from 'react'
import DeleteRequestTab from "./deleteRequestTab.jsx";
import {useSelector} from "react-redux";

const DeleteContact = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b py-10 border-zinc-700" : "border-b py-10"}>
                <div className="text-lg py-10 font-semibold">
                    <h1>Delete a Contact</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to delete contacts from your contact list in Protocol. Note: This
                            will also delete your conversation with the given contact.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <DeleteRequestTab/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DeleteContact
