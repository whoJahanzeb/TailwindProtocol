import React from 'react'
import AttachmentProperties from "../components/attachments/attachmentProperties.jsx";
import AttachmentsList from "../components/attachments/attachmentsList.jsx";
import {useSelector} from "react-redux";

const Attachments = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div>
                    <div className="text-2xl font-semibold">
                        <h1>Attachments</h1>
                    </div>
                    <div className="py-4">
                        <p>Attachments are how you share things in Protocol — they allow you to send all sorts of files
                            to your contacts and groups. On this page, we'll dive into the different attachment
                            endpoints you can use to manage attachments programmatically. We'll look at how to query,
                            upload, update, and delete attachments.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>The attachment model</h1>
                    </div>
                    <div className="py-4">
                        <p>The attachment model contains all the information about the files you send to your contacts
                            and groups, including the name, type, and size.</p>
                    </div>
                </div>
                <div className={mode ? "border-b border-zinc-700" : "border-b"}>
                    <AttachmentProperties/>
                </div>
                <div className="py-10">
                    <AttachmentsList/>
                </div>
            </main>
        </>
    )
}
export default Attachments
