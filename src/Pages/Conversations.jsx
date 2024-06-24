import Properties from "../components/conversations/properties.jsx";
import ConservationsList from "../components/conversations/conservationsList.jsx";
import {useSelector} from "react-redux";

const Conversations = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div>
                    <div className="text-2xl font-semibold">
                        <h1>Conversations</h1>
                    </div>
                    <div className="py-4">
                        <p>Conversations are an essential part of Protocol — they are the containers for the messages
                            between you, your contacts, and groups. On this page, we’ll dive into the different
                            conversation
                            endpoints you can use to manage conversations programmatically. We'll look at how to query,
                            create, update, and delete conversations.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>The conversation model</h1>
                    </div>
                    <div className="py-4">
                        <p>The conversation model contains all the information about the conversations between you and
                            your contacts. In addition, conversations can also be group-based with more than one
                            contact, they can have a pinned message, and they can be muted.</p>
                    </div>
                </div>
                <div className={mode ? "border-b border-zinc-700" : "border-b"}>
                    <Properties/>
                </div>
                <div className="py-10">
                    <ConservationsList/>
                </div>
            </main>
        </>
    )
}
export default Conversations
