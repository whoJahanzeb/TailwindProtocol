import UpdateConservations from "../conversations/updateConservations.jsx";
import DeleteConservations from "../conversations/deleteConservations.jsx";
import MessageRequestTab from "./messageRequestTab.jsx";
import MessageResponseTab from "./messageResponseTab.jsx";
import SendMessage from "./sendMessage.jsx";
import RetrieveMessage from "./retrieveMessage.jsx";
import UpdateMessages from "./updateMessages.jsx";
import DeleteMessage from "./deleteMessage.jsx";

const MessagesList = () => {
    return (
        <>
            <main>
                <div className="text-xl font-semibold">
                    <h1>List all messages</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a paginated list of all your messages (in a conversation
                            if a conversation id is provided). By default, a maximum of ten messages are shown per
                            page.</p>
                    </div>
                    <div className="row-span-3">
                        <MessageRequestTab/>
                        <div className="py-4">
                            <MessageResponseTab/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">conversation_id</span><span>string</span>
                            <p>Limit the number of conversations returned.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">limit</span><span>integer</span>
                            <p>Only show conversations that are muted when set to <span
                                className="bg-gray-100 text-xs border border-gray-300 px-2 rounded-md mx-2">true</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <SendMessage/>
                </div>
                <div>
                    <RetrieveMessage/>
                </div>
                <div>
                    <UpdateMessages/>
                </div>
                <div>
                    <DeleteMessage/>
                </div>
            </main>
        </>
    )
}
export default MessagesList
