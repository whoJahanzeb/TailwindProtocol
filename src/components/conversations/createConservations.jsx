import React from 'react'
import CreateConversationsRequest from "./createConversationsRequest.jsx";
import CreateConservationsResponse from "./createConservationsResponse.jsx";
import {useSelector} from "react-redux";

const CreateConservations = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                <div className="text-xl font-semibold">
                    <h1>Create a conversation</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to add a new conversation between you and a contact or group. A
                            contact or group id is required to create a conversation.</p>
                    </div>
                    <div className="row-span-3">
                        <CreateConversationsRequest/>
                        <div className="py-4">
                            <CreateConservationsResponse/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Required attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>contact_id</span><span>string</span>
                            <p>Unique identifier for the other contact in the conversation.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>group_id</span><span>string</span>
                            <p>Unique identifier for the group that the conversation belongs to.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateConservations
