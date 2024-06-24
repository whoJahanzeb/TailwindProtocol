import {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const ResponseTab = () => {

    const [isCopied, setIsCopied] = useState(false);
    const {mode} = useSelector(state => state.darkMode)
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `{
  "has_more": false,
  "data": [
    {
      "id": "WAz8eIbvDR60rouK",
      "username": "FrankMcCallister",
      "phone_number": "1-800-759-3000",
      "avatar_url": "https://assets.protocol.chat/avatars/frank.jpg",
      "display_name": null,
      "conversation_id": "xgQQXg3hrtjh7AvZ",
      "last_active_at": 705103200,
      "created_at": 692233200
    },
    {
      "id": "hSIhXBhNe8X1d8Et"
      // ...
    }
  ]
}`

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
                            <span className="text-sky-300">"has_more"</span>: <span
                            className="text-emerald-300">false</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"data"</span>: [
                        </div>
                        <div>
                            <span className="text-sky-300">"id"</span>: <span
                            className="text-emerald-300">"WAz8eIbvDR60rouK",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"username"</span>: <span
                            className="text-emerald-300">"FrankMcCallister",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"phone_number"</span>: <span
                            className="text-emerald-300">"1-800-759-3000"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"avatar_url"</span>: <span
                            className="text-emerald-300">"https://assets.protocol.chat/avatars/frank.jpg"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"display_name"</span>: <span
                            className="text-emerald-300">null,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"conversation_id"</span>: <span
                            className="text-emerald-300">"xgQQXg3hrtjh7AvZ",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_active_at"</span>: <span
                            className="text-emerald-300">705103200,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"created_at"</span>: <span
                            className="text-emerald-300">692233200</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-sky-300">"id"</span>: <span
                                className="text-emerald-300">"hSIhXBhNe8X1d8Et"</span>
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
};

export default ResponseTab;