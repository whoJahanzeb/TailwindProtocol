import MessageProperties from "../components/messages/messageProperties.jsx";
import MessagesList from "../components/messages/messagesList.jsx";
import {useSelector} from "react-redux";

const Messages = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-10 px-10">
                <div>
                    <div className="text-2xl font-semibold">
                        <h1>Messages</h1>
                    </div>
                    <div className="py-4">
                        <p>Messages are what conversations are made of in Protocol — they are the basic building blocks
                            of your conversations with your Protocol contacts. On this page, we'll dive into the
                            different message endpoints you can use to manage messages programmatically. We'll look at
                            how to query, send, update, and delete messages.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>The message model</h1>
                    </div>
                    <div className="py-4">
                        <p>The message model contains all the information about the messages and attachments you send to
                            your contacts and groups, including how your contacts have reacted to them.</p>
                    </div>
                </div>
                <div className={mode ? "border-b border-zinc-700" : "border-b"}>
                    <MessageProperties/>
                </div>
                <div className="py-10">
                    <MessagesList/>
                </div>
            </main>
        </>
    )
}
export default Messages
