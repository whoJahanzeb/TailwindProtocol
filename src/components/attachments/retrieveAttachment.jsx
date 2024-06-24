import React from 'react'
import RetrieveMessageRequest from "../messages/retrieveMessageRequest.jsx";
import RetrieveMessageResponse from "../messages/retrieveMessageResponse..jsx";
import RetrieveAttachmentRequest from "./retrieveAttachmentRequest.jsx";
import RetrieveAttachmentResponse from "./retrieveAttachmentResponse.jsx";
import {useSelector} from "react-redux";

const RetrieveAttachment = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b py-10 border-zinc-700":"border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Retrieve an attachment</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve an attachment by providing the attachment id. Refer to <span
                            className="text-emerald-500 font-semibold">the list</span> at the top of this page to see which properties are included with attachment objects. </p>
                    </div>
                    <div className="row-span-3">
                        <RetrieveAttachmentRequest/>
                        <div className="py-4">
                            <RetrieveAttachmentResponse/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default RetrieveAttachment
