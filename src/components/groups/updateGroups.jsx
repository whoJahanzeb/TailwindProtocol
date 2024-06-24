import React from 'react'
import UpdateGroupRequest from "./updateGroupRequest.jsx";
import UpdateGroupResponse from "./updateGroupResponse.jsx";
import {useSelector} from "react-redux";

const UpdateGroups = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b py-10 border-zinc-700" : "border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Update a group</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to perform an update on a group. Examples of updates are changing
                            the name, description, and avatar or adding and removing contacts from the group.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <UpdateGroupRequest/>
                        <div className="py-4">
                            <UpdateGroupResponse/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Optional attributes</h1>
                        <div className={mode ? "border-b py-4 border-zinc-700" : "border-b py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>name</span><span>string</span>
                            </div>
                            <p>The new name for the group.</p>
                        </div>
                        <div className={mode ? "border-b py-4 border-zinc-700" : "border-b py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>description</span><span>string</span>
                            </div>
                            <p>The new description for the group.</p>
                        </div>
                        <div className={mode ? "border-b py-4 border-zinc-700" : "border-b py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>avatar_url</span><span>string</span>
                            </div>
                            <p>The new avatar image URL for the group.</p>
                        </div>
                        <div className={mode ? "border-b py-4 border-zinc-700" : "border-b py-4"}>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>contacts</span><span>array</span>
                            </div>
                            <p>An array of contact objects that are members of the group.</p>
                        </div>
                        <div>
                            <div className="py-6">
                            <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>archived_at</span><span>timestamp</span>
                            </div>
                            <p>Timestamp of when the group was archived.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default UpdateGroups
