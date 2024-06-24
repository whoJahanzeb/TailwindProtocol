import React from 'react'
import UpdateMessages from "../messages/updateMessages.jsx";
import DeleteMessage from "../messages/deleteMessage.jsx";
import AttachmentRequestTab from "./attachmentRequestTab.jsx";
import AttachmentResponseTab from "./attachmentResponseTab.jsx";
import CreateAttachment from "./createAttachment.jsx";
import RetrieveAttachment from "./retrieveAttachment.jsx";
import UpdateAttachments from "./updateAttachments.jsx";
import DeleteAttachments from "./deleteAttachments.jsx";
import {useSelector} from "react-redux";

const AttachmentsList = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-xl font-semibold">
                    <h1>List all attachments</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a paginated list of all your attachments (in a
                            conversation if a conversation id is provided). By default, a maximum of ten attachments are
                            shown per page.</p>
                    </div>
                    <div className="row-span-3">
                        <AttachmentRequestTab/>
                        <div className="py-4">
                            <AttachmentResponseTab/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>conversation_id</span><span>string</span>
                            <p className="py-2">Limit to attachments from a given conversation.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>limit</span><span>integer</span>
                            <p className="py-2">Limit the number of attachments returned.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <CreateAttachment/>
                </div>
                <div>
                    <RetrieveAttachment/>
                </div>
                <div>
                    <UpdateAttachments/>
                </div>
                <div>
                    <DeleteAttachments/>
                </div>
            </main>
        </>
    )
}
export default AttachmentsList
