import React from 'react'
import UpdateConservationsResponse from "../conversations/updateConservationsResponse.jsx";
import UpdateMessageRequest from "./updateMessageRequest.jsx";
import UpdateMessageResponse from "./updateMessageResponse.jsx";

const UpdateMessages = () => {
    return (
        <>
            <main className="border-b py-10">
                <div className="text-xl py-10 font-semibold">
                    <h1>Update a message</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to perform an update on a message. Examples of updates are adding a
                            reaction, editing the message, or adding an attachment.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <UpdateMessageRequest/>
                        <div className="py-4">
                            <UpdateMessageResponse/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Optional attributes</h1>
                        <div className="border-b py-4">
                            <div className="py-6">
                            <span
                                className="bg-gray-100 border border-300 px-2 rounded-md text-xs">message</span><span>string</span>
                            </div>
                            <p>The message content.</p>
                        </div>
                        <div className="border-b py-4">
                            <div className="py-6">
                            <span
                                className="bg-gray-100 border border-300 px-2 rounded-md text-xs">reactions</span><span>array</span>
                            </div>
                            <p>An array of reaction objects associated with the message.</p>
                        </div>
                        <div className="border-b py-4">
                            <div className="py-6">
                            <span
                                className="bg-gray-100 border border-300 px-2 rounded-md text-xs">attachments</span><span>array</span>
                            </div>
                            <p>An array of attachment objects associated with the message.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default UpdateMessages
