import React, {useState} from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";

const SendMessageResponse = () => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `{
  "id": "gWqY86BMFRiH5o11",
  "conversation_id": "xgQQXg3hrtjh7AvZ",
  "contact": {
    "id": "inEIRvzjC6YLMX3o",
    "username": "LinnieMcCallister",
    "phone_number": "1-800-759-3000",
    "avatar_url": "https://assets.protocol.chat/avatars/linnie.jpg",
    "last_active_at": 705103200,
    "created_at": 692233200
  },
  "message": "You’re what the French call ‘les incompetents.’",
  "reactions": [],
  "attachments": [],
  "read_at": null,
  "created_at": 692233200,
  "updated_at": null
}`

    return (
        <div className="bg-black rounded-3xl text-sm">
            <ul className="flex justify-between bg-gray-800 rounded-t-3xl py-2 px-4">
                <div className="text-white">
                    <h1>Response</h1>
                </div>
                <div className="flex space-x-4">

                </div>
            </ul>

            <div className="tab_content flex justify-between">
                <div>
                    <div className="tab_panel">
                        <div>
                            <span className="text-sky-300">"id"</span>: <span
                            className="text-emerald-300">"gWqY86BMFRiH5o11</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"conversation_id"</span>: <span
                            className="text-emerald-300">"xgQQXg3hrtjh7AvZ</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"group_id"</span>: <span
                            className="text-emerald-300">null,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">contact :</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"id"</span>: <span
                            className="text-emerald-300">"inEIRvzjC6YLMX3o",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"LinnieMcCallister"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"phone_number"</span>: <span
                            className="text-emerald-300">"1-800-759-3000"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"avatar_url"</span>: <span
                            className="text-emerald-300">"https://assets.protocol.chat/avatars/linnie.jpg",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_active_at"</span>: <span
                            className="text-emerald-300">705103200,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"created_at"</span>: <span
                            className="text-emerald-300">692233200,</span>
                        </div>

                        <div>
                            <span className="text-sky-300">"message"</span>: <span
                            className="text-emerald-300">"You’re what the French call ‘les incompetents.’"</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-sky-300">"reactions"</span>: []
                            </div>
                            <div>
                                <span className="text-sky-300">"attachments"</span>: []
                            </div>
                            <div>
                                <span className="text-sky-300">"read_at"</span>: <span
                                className="text-emerald-300">null</span>
                            </div>
                            <div>
                                <span className="text-sky-300">"created_at"</span>: <span
                                className="text-emerald-300">692233200</span>
                            </div>
                            <div>
                                <span className="text-sky-300">"updated_at"</span>: <span
                                className="text-emerald-300">null</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
                        <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
}
export default SendMessageResponse