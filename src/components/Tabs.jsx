import {useState} from 'react';
import '../tabs.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isCopied, setIsCopied] = useState(false);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `curl --version`
    const codeSnippet1 = `npm install @example/protocol-api --save`
    const codeSnippet2 = `pip install protocol_api`
    const codeSnippet3 = `composer require protocol/sdk`
    const {mode} = useSelector(state => state.darkMode)
    return (
        <div className={mode ? "bg-zinc-800 rounded-3xl text-sm" : "bg-black rounded-3xl text-sm"}>
            <ul className={mode ? "flex space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                <li className={activeTab === 1 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                    onClick={() => handleTabClick(1)}>cURL
                </li>
                <li className={activeTab === 2 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                    onClick={() => handleTabClick(2)}>JavaScript
                </li>
                <li className={activeTab === 3 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                    onClick={() => handleTabClick(3)}>Python
                </li>
                <li className={activeTab === 4 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                    onClick={() => handleTabClick(4)}>PHP
                </li>
            </ul>

            <div className="tab_content flex justify-between">
                <div>
                    {activeTab === 1 && <div className="tab_panel">
                        <p className="text-gray-500"># cURL is most likely already installed on your machine</p>
                        curl --version
                    </div>}
                    {activeTab === 2 && <div className="tab_panel">
                        <p className="text-gray-500"># Install the Protocol JavaScript SDK</p>
                        npm install @example/protocol-api --save
                    </div>}
                    {activeTab === 3 && <div className="tab_panel">
                        <p className="text-gray-500"># Install the Protocol Python SDK</p>
                        pip install protocol_api
                    </div>}
                    {activeTab === 4 && <div className="tab_panel">
                        <p className="text-gray-500"># Install the Protocol PHP SDK</p>
                        composer require protocol/sdk
                    </div>}
                </div>
                <div>
                    {activeTab === 1 && <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
                        <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                    </CopyToClipboard>}
                    {activeTab === 2 && <CopyToClipboard text={codeSnippet1} onCopy={onCopyText}>
                        <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                    </CopyToClipboard>}
                    {activeTab === 3 && <CopyToClipboard text={codeSnippet2} onCopy={onCopyText}>
                        <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                    </CopyToClipboard>}
                    {activeTab === 4 && <CopyToClipboard text={codeSnippet3} onCopy={onCopyText}>
                        <span>{isCopied ? "Copied!" : <MdContentCopy className="text-gray-500"/>}</span>
                    </CopyToClipboard>}
                </div>
            </div>
        </div>
    );
};

export default Tabs;