import {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const WebHooksPayload = () => {
    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `
    {
  "id": "a056V7R7NmNRjl70",
  "type": "conversation.updated",
  "payload": {
    "id": "WAz8eIbvDR60rouK"
    // ...
  }
}`
    const {mode} = useSelector(state => state.darkMode)

    return (
        <>
            <main className="py-4">
                <div className={mode ? "bg-zinc-800 rounded-3xl text-sm" : "bg-black rounded-3xl text-sm"}>
                    <ul className={mode ? "flex space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                        <li className="text-emerald-500 font-semibold text-white font-semibold">
                            Example webhook payload
                        </li>
                    </ul>

                    <div className="tab_content flex justify-between">
                        <div>
                            <div className="tab_panel">
                                <div><span className="text-sky-300">"id":</span><span
                                    className="text-emerald-300"> "a056V7R7NmNRjl70",</span></div>
                                <div>
                                    <span className="text-sky-300">"type":</span><span
                                    className="text-emerald-300"> "conversation.updated",</span>
                                </div>
                                <div>
                                    <span className="text-sky-300">"payload":</span>
                                </div>
                                <div>
                                    <span className="text-sky-300">"id":</span><span
                                    className="text-emerald-300"> "WAz8eIbvDR60rouK"</span>
                                </div>
                                // ...
                            </div>
                        </div>
                        <div>
                            <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
                                <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p>In the example above, a conversation was <span
                        className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>updated</span>,
                        and the payload
                        type is a <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>conversation</span>.
                    </p>
                </div>
            </main>
        </>
    )
        ;
};

export default WebHooksPayload;