import React from 'react'
import CreateAttachmentRequest from "./createAttachmentRequest.jsx";
import CreateAttachmentResponse from "./createAttachmentResponse.jsx";
import {useSelector} from "react-redux";

const CreateAttachment = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "py-20 border-t border-b border-zinc-700" : "py-20 border-t border-b"}>
                <div className="text-xl font-semibold">
                    <h1>Create an attachment</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to upload a new attachment to a conversation. See the code examples
                            for how to send the file to the Protocol API.</p>
                    </div>
                    <div className="row-span-3">
                        <CreateAttachmentRequest/>
                        <div className="py-4">
                            <CreateAttachmentResponse/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Required attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">file</span><span>string</span>
                            <p className="py-2">The file you want to add as an attachment. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateAttachment
