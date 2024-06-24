import {useSelector} from "react-redux";

const Properties = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>Properties</h1>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? "px-2 rounded-lg border border-gray-300 text-xs mr-2" : "text-xs mr-2 bg-gray-100 px-2 rounded-lg border border-gray-300"}>id</span><span>string</span>
                        <p>Unique identifier for the conversation.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>contact_id</span><span>string</span>
                        <p>Unique identifier for the other contact in the conversation.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>group_id</span><span>string</span>
                        <p>Unique identifier for the group that the conversation belongs to.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>pinned_message_id</span><span>string</span>
                        <p>Unique identifier for the pinned message.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>is_pinned</span><span>boolean</span>
                        <p>Whether or not the conversation has been pinned.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? "px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>is_muted</span><span>boolean</span>
                        <p>Whether or not the conversation has been muted.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>last_active_at</span><span>timestamp</span>
                        <p>Timestamp of when the conversation was last active.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>last_opened_at</span><span>timestamp</span>
                        <p>Timestamp of when the conversation was last opened by the authenticated user.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>created_at</span><span>timestamp</span>
                        <p>Timestamp of when the conversation was created.</p>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? " px-2 rounded-lg border border-zinc-500 mr-2 text-xs" : "mr-2 text-xs bg-gray-100 px-2 rounded-lg border border-gray-300"}>archived_at</span><span>timestamp</span>
                        <p>Timestamp of when the conversation was archived.</p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Properties
