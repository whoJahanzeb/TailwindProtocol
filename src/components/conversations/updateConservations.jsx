import React from 'react'
import UpdateConservationRequest from "./updateConservationRequest.jsx";
import UpdateConservationsResponse from "./updateConservationsResponse.jsx";
import {useSelector} from "react-redux";

const UpdateConservations = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b border-zinc-700 py-10" : "border-b border-zinc-200 py-10"}>
                <div className="text-lg py-10 font-semibold">
                    <h1>Update a conversation</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to perform an update on a conversation. Examples of updates are
                            pinning a message, muting or archiving the conversation, or pinning the conversation itself.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <UpdateConservationRequest/>
                        <div className="py-4">
                            <UpdateConservationsResponse/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Optional attributes</h1>
                        <div className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>pinned_message_id</span><span>string</span>
                            </div>
                            <p>Unique identifier for the pinned message.</p>
                        </div>
                        <div className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>is_pinned</span><span>boolean</span>
                            </div>
                            <p>Whether or not the conversation has been pinned.</p>
                        </div>
                        <div className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-gray-100 px-2 rounded-lg border border-zinc-300"}>is_muted</span><span>boolean</span>
                            </div>
                            <p>Whether or not the conversation has been muted.</p>
                        </div>
                        <div className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>archived_at</span><span>timestamp</span>
                            </div>
                            <p>Timestamp of when the conversation was archived.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default UpdateConservations
