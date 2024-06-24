import React from 'react'
import CreateGroupRequest from "./createGroupRequest.jsx";
import CreateGroupResponse from "./createGroupResponse.jsx";
import {useSelector} from "react-redux";

const CreateGroup = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "py-20 border-t border-b border-zinc-700" : "py-20 border-zinc-300 border-t border-b"}>
                <div className="text-xl font-semibold">
                    <h1>Create a group</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to send a new message to one of your conversations.</p>
                    </div>
                    <div className="row-span-4">
                        <CreateGroupRequest/>
                        <div className="py-4">
                            <CreateGroupResponse/>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg font-semibold">
                            <h1>Required attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>name</span><span>string</span>
                            <p className="py-2">The name for the group. </p>
                        </div>

                    </div>
                    <div>
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>description</span><span>string</span>
                            <p className="py-2">The description for the group.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>avatar_url</span><span>string</span>
                            <p className="py-2">The avatar image URL for the group.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>contacts</span><span>array</span>
                            <p className="py-2">An array of contact objects that are members of the group.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateGroup
