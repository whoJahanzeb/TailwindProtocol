import React, {useState} from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const UpdateGroupResponse = () => {
    const [isCopied, setIsCopied] = useState(false);
    const {mode} = useSelector(state => state.darkMode)
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `{
  "id": "l7cGNIBKZiNJ6wqF",
  "name": "Plaza Hotel",
  "description": "The finest in New York.",
  "avatar_url": "https://assets.protocol.chat/avatars/plazahotel.jpg",
  "conversation_id": "ZYjVAbCE9g5XRlra",
  "contacts": [
    {
      "username": "Hector"
      // ...
    },
    {
      "username": "Cedric"
      // ...
    },
    {
      "username": "Hester"
      // ...
    },
    {
      "username": "Cliff"
      // ...
    }
  ],
  "created_at": 692233200,
  "archived_at": null
},
`

    return (
        <div className={mode ? "bg-zinc-800 rounded-3xl text-sm" : "bg-black rounded-3xl text-sm"}>
            <ul className={mode ? "flex justify-between bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex justify-between bg-gray-800 rounded-t-3xl py-2 px-4"}>
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
                            className="text-emerald-300">"l7cGNIBKZiNJ6wqF</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"name"</span>: <span
                            className="text-emerald-300">"Plaza Hotel</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"description"</span>: <span
                            className="text-emerald-300">"The finest in New York</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"avatar_url"</span>: <span
                            className="text-emerald-300">"https://assets.protocol.chat/avatars/plazahotel.jpg",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"conversation_id"</span>: <span
                            className="text-emerald-300">"ZYjVAbCE9g5XRlra"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">contacts:</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"Hector"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"Cedric"</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"Hester"</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"Cliff"</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"created_at"</span>: <span
                            className="text-emerald-300">692233200</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-sky-300">"archived_at"</span>: <span
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
export default UpdateGroupResponse
