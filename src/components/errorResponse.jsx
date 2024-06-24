import {useState} from 'react';
import '../tabs.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const Tabs = () => {
    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `
    "type": "api_error",
    "message": "No way this is happening!?",
    "documentation_url": "https://protocol.chat/docs/errors/api_error"`
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div
                className={mode ? "bg-zinc-800 rounded-3xl max-w-md text-sm" : "bg-black rounded-3xl max-w-md text-sm"}>
                <ul className={mode ? "flex space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                    <li className="text-emerald-500 font-semibold text-white font-semibold">
                        Error response
                    </li>
                </ul>

                <div className="tab_content flex justify-between">
                    <div>
                        <div className="tab_panel">
                            <div className="text-emerald-300 overflow-x-auto font-semibold leading-10">
                                "type": "api_error",<br/>
                                "message": "No way this is happening!?",<br/>
                                "documentation_url": "https://protocol.chat/docs/errors/api_error"
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
        </>
    )
        ;
};

export default Tabs;