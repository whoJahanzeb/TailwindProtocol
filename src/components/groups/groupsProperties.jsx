import React from 'react'
import {useSelector} from "react-redux";

const GroupsProperties = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>Properties</h1>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>id</span><span>string</span>
                        <p className="py-2">Unique identifier for the group.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>name</span><span>string</span>
                        <p className="py-2">The name for the group.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>description</span><span>string</span>
                        <p className="py-2">The description for the group.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>avatar_url</span><span>string</span>
                        <p className="py-2">The avatar image URL for the group.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>conversation_id</span><span>string</span>
                        <p className="py-2">Unique identifier for the conversation that belongs to the group.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>contacts</span><span>array</span>
                        <p className="py-2">An array of contact objects that are members of the group.</p>
                    </div>
                    <div className={mode ? "py-4 max-w-lg" : "py-4 max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>created_at</span><span>timestamp</span>
                        <p className="py-2">Timestamp of when the group was created.</p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default GroupsProperties
