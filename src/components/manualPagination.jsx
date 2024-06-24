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
   curl -G https://api.protocol.chat/v1/conversations \\
  -H "Authorization: Bearer {token}" \\
  -d starting_after="s4WycXedwhQrEFuM" \\
  -d limit=10`

    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "bg-zinc-800 h-96 rounded-3xl text-sm" : "bg-black h-96 rounded-3xl text-sm"}>
                <ul className={mode ? "flex space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                    <li className="text-emerald-500 font-semibold text-white font-semibold">
                        Manual pagination using cURL
                    </li>
                </ul>

                <div className="tab_content flex justify-between">
                    <div>
                        <div className="tab_panel">
                            <div>curl -G https://api.protocol.chat/v1/conversations \</div>
                            <br/>
                            <div> -H <span className="text-emerald-500">"Authorization: Bearer token"</span> \</div>
                            <div className="my-4">-d starting_after= <span
                                className="text-emerald-500">"s4WycXedwhQrEFuM"</span> \
                            </div>
                            <div>-d limit=10\</div>
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