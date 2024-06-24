import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useState} from "react";
import {useSelector} from "react-redux";

const ConservationsResponseTab = () => {
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
      "id": "xgQQXg3hrtjh7AvZ",
      "contact_id": "WAz8eIbvDR60rouK",
      "group_id": null,
      "pinned_message_id": null,
      "is_pinned": false,
      "is_muted": false,
      "last_active_at": 705103200,
      "last_opened_at": 705103200,
      "created_at": 692233200,
      "archived_at": null
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
                            className="text-emerald-300">"xgQQXg3hrtjh7AvZ",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"contact_id"</span>: <span
                            className="text-emerald-300">"WAz8eIbvDR60rouK",</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"group_id"</span>: <span
                            className="text-emerald-300">null</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"pinned_message_id"</span>: <span
                            className="text-emerald-300">null</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"is_pinned"</span>: <span
                            className="text-emerald-300">false</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"is_muted"</span>: <span
                            className="text-emerald-300">false,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_active_at"</span>: <span
                            className="text-emerald-300">705103200,</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"last_opened_at"</span>: <span
                            className="text-emerald-300">705103200</span>
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
}
export default ConservationsResponseTab
