import React from 'react'
import UpdateMessageRequest from "../messages/updateMessageRequest.jsx";
import UpdateMessageResponse from "../messages/updateMessageResponse.jsx";
import UpdateAttachmentRequest from "./updateAttachmentRequest.jsx";
import UpdateAttachmentResponse from "./updateAttachmentResponse.jsx";
import {useSelector} from "react-redux";

const UpdateAttachments = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b border-zinc-700 py-10":"border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Update an attachment</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to perform an update on an attachment. Currently, the only supported
                            type of update is changing the filename.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <UpdateAttachmentRequest/>
                        <div className="py-4">
                            <UpdateAttachmentResponse/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Optional attributes</h1>
                        <div className={mode?"border-b py-4 border-zinc-700":"border-b py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>filename</span><span>string</span>
                            </div>
                            <p className="py-2">The new filename for the attachment.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default UpdateAttachments
