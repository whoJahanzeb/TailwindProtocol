import React from 'react'
import {useSelector} from "react-redux";

const AttachmentProperties = () => {
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
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>id</span><span>string</span>
                        <p className="py-2">Unique identifier for the attachment.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>message_id</span><span>string</span>
                        <p className="py-2">Unique identifier for the message associated with the attachment.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>filename</span><span>string</span>
                        <p className="py-2">The filename for the attachment.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>file_url</span><span>string</span>
                        <p className="py-2">The URL for the attached file.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>file_type</span><span>string</span>
                        <p className="py-2">The MIME type of the attached file.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>file_size</span><span>integer</span>
                        <p className="py-2">The file size of the attachment in bytes.</p>
                    </div>
                    <div className={mode ? "py-4 max-w-lg" : "py-4 max-w-lg"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>created_at</span><span>timestamp</span>
                        <p className="py-2">Timestamp of when the attachment was created.</p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default AttachmentProperties
