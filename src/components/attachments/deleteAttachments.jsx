import React from 'react'
import DeleteMessageTab from "../messages/deleteMessageTab.jsx";
import DeleteAttachmentTab from "./deleteAttachmentTab.jsx";
import {useSelector} from "react-redux";

const DeleteAttachments = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b border-zinc-700 py-10":"border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Delete an attachment</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to delete attachments. Note: This will permanently delete the file.</p>
                    </div>
                    <div className="row-span-3">
                        <DeleteAttachmentTab/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DeleteAttachments
