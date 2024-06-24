import {useSelector} from "react-redux";

const MessageProperties = () => {
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
                       className={mode ? "border text-xs border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>id</span><span>string</span>
                        <p>Unique identifier for the message.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>conversation_id</span><span>string</span>
                        <p>Unique identifier for the conversation the message belongs to.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>contact</span><span>object</span>
                        <p>The contact object for the contact who sent the message.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>message</span><span>object</span>
                        <p>The message content.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>reactions</span><span>array</span>
                        <p>An array of reaction objects associated with the message.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>attachments</span><span>array</span>
                        <p>An array of attachment objects associated with the message.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>read_at</span><span>timestamp</span>
                        <p>Timestamp of when the message was read.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>created_at</span><span>timestamp</span>
                        <p>Timestamp of when the message was created.</p>
                    </div>
                    <div className={mode ? "py-4 border-b max-w-lg border-zinc-700" : "py-4 border-b max-w-lg"}>
                   <span
                       className={mode ? "text-xs border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>updated_at</span><span>timestamp</span>
                        <p>Timestamp of when the message was last updated.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default MessageProperties
