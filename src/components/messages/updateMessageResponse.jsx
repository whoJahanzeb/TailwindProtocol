import React, {useState} from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";

const UpdateMessageResponse = () => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `{
  "id": "SIuAFUNKdSYHZF2w",
  "conversation_id": "xgQQXg3hrtjh7AvZ",
  "contact": {
    "id": "WAz8eIbvDR60rouK",
    "username": "KevinMcCallister",
    "phone_number": "1-800-759-3000",
    "avatar_url": "https://assets.protocol.chat/avatars/buzzboy.jpg",
    "last_active_at": 705103200,
    "created_at": 692233200
  },
  "message": "I'm not apologizing. I'd rather kiss a toilet seat.",
  "reactions": [
    {
      "red_angry_face": [
        "KateMcCallister"
      ]
    }
  ],
  "attachments": [],
  "read_at": 705103200,
  "created_at": 692233200,
  "updated_at": 692233200
}
`

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
                            className="text-emerald-300">"SIuAFUNKdSYHZF2w</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"conversation_id"</span>: <span
                            className="text-emerald-300">"xgQQXg3hrtjh7AvZ</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"contact"</span>: <span
                            className="text-emerald-300">"WAz8eIbvDR60rouK</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"id"</span>: <span
                            className="text-emerald-300">"WAz8eIbvDR60rouK",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"KevinMcCallister"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"phone_number"</span>: <span
                            className="text-emerald-300">"1-800-759-3000"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"avatar_url"</span>: <span
                            className="text-emerald-300">""https://assets.protocol.chat/avatars/buzzboy.jpg",",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_active_at"</span>: <span
                            className="text-emerald-300">705103200,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_opened_at"</span>: <span
                            className="text-emerald-300">705103200,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"created_at"</span>: <span
                            className="text-emerald-300">692233200</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-sky-300">"message"</span>: <span
                                className="text-emerald-300">""I'm not apologizing. I'd rather kiss a toilet seat.","</span>
                            </div>
                            <div>
                                <span className="text-sky-300">"reactions"</span>
                                <div>
                                    <span className="text-sky-300">"red_angry_face"</span>:
                                </div>
                                <div>
                                    <span className="text-emerald-300">"KateMcCallister"</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-sky-300">"attachments"</span>: [ ]
                            </div>
                            <div>
                                <span className="text-sky-300">"read_at"</span>: <span
                                className="text-emerald-300">705103200</span>
                            </div>
                            <div>
                                <span className="text-sky-300">"created_at"</span>: <span
                                className="text-emerald-300">692233200</span>
                            </div>
                            <div>
                                <span className="text-sky-300">"updated_at"</span>: <span
                                className="text-emerald-300">692233200</span>
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
export default UpdateMessageResponse
