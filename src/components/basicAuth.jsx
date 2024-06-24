import {useState} from 'react';
import '../tabs.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const Tabs = () => {
    const [isCopied, setIsCopied] = useState(false);
    const {mode} = useSelector(state => state.darkMode)
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `
    curl https://api.protocol.chat/v1/conversations \\
  -u username:password`

    return (
        <>
            <div className={mode?"bg-zinc-800 rounded-3xl text-sm":"bg-black rounded-3xl text-sm"}>
                <ul className={mode ? "flex space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                    <li className="font-semibold text-white font-semibold">
                        Example request with basic auth
                    </li>
                </ul>

                <div className="tab_content flex justify-between">
                    <div>
                        <div className="tab_panel">
                            <div>curl https://api.protocol.chat/v1/conversations\</div>
                            <br/>
                            -u username:password
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
                <p>Please don't commit your Protocol password to GitHub!</p>
            </div>
        </>
    )
        ;
};

export default Tabs;