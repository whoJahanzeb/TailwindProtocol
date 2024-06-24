import React from 'react'
import CreateConversationsRequest from "../conversations/createConversationsRequest.jsx";
import CreateConservationsResponse from "../conversations/createConservationsResponse.jsx";
import SendMessageRequest from "./sendMessageRequest.jsx";
import SendMessageResponse from "./sendMessageResponse.jsx";

const SendMessage = () => {
    return (
        <>
            <div className="py-20 border-t border-b">
                <div className="text-xl font-semibold">
                    <h1>Send a message</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to send a new message to one of your conversations.</p>
                    </div>
                    <div className="row-span-3">
                        <SendMessageRequest/>
                        <div className="py-4">
                            <SendMessageResponse/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Required attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">conversation_id</span><span>string</span>
                            <p>Unique identifier for the conversation the message belongs to.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">message</span><span>string</span>
                            <p>The message content.</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">attachments</span><span>array</span>
                            <p>An array of attachment objects associated with the message.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SendMessage
