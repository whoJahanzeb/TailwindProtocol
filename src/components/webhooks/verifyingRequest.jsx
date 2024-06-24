import {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const VerifyingRequest = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isCopied, setIsCopied] = useState(false);
    const {mode} = useSelector(state => state.darkMode)
    const handleTabClick = (id) => {
        setActiveTab(id);
    };
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `
  const signature = req.headers['x-protocol-signature']
const hash = crypto.createHmac('sha256', secret).update(payload).digest('hex')

if (hash === signature) {
  // Request is verified
} else {
  // Request could not be verified
}`
    const codeSnippet1 = `
    from flask import request
import hashlib
import hmac

signature = request.headers.get("x-protocol-signature")
hash = hmac.new(bytes(secret, "ascii"), bytes(payload, "ascii"), hashlib.sha256)

if hash.hexdigest() == signature:
    # Request is verified
else:
    # Request could not be verified`
    const codeSnippet2 = `
    $signature = $request['headers']['x-protocol-signature'];
$hash = hash_hmac('sha256', $payload, $secret);

if (hash_equals($hash, $signature)) {
  // Request is verified
} else {
  // Request could not be verified
}

    `
    return (
        <div className={mode ? "bg-zinc-800 rounded-3xl text-sm" : "bg-black rounded-3xl text-sm"}>
            <ul className={mode ? "flex justify-between space-x-10 bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex justify-between space-x-10 bg-gray-800 rounded-t-3xl py-2 px-4"}>
                <div className="text-white">
                    <h1>Verifying a request</h1>
                </div>
                <div className="flex space-x-4">
                    <li className={activeTab === 1 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                        onClick={() => handleTabClick(1)}>JavaScript
                    </li>
                    <li className={activeTab === 2 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                        onClick={() => handleTabClick(2)}>Python
                    </li>
                    <li className={activeTab === 3 ? 'text-emerald-500 font-semibold border-b border-emerald-500' : 'text-white font-semibold'}
                        onClick={() => handleTabClick(3)}>PHP
                    </li>
                </div>
            </ul>

            <div className="tab_content flex justify-between">
                <div>
                    {activeTab === 1 && <div className="tab_panel">
                        <div>
                            <div>
                                <span className="text-sky-300">const</span> <span
                                className="text-emerald-300">signature</span> <span className="text-sky-300">=</span>
                                <span className="text-emerald-300">req</span>.headers[<span
                                className="text-emerald-300">'x-protocol-signature'</span>]
                            </div>
                            <div>
                                <span className="text-sky-300">const</span> <span
                                className="text-emerald-300">hash</span> <span className="text-sky-300">=</span> <span
                                className="text-emerald-300">crypto</span><span
                                className="text-purple-300">.createHmac</span>(<span
                                className="text-emerald-300">'sha256'</span>, secret) <span
                                className="text-purple-300">.update</span> (payload).<span
                                className="text-purple-300">.digest</span>(<span
                                className="text-emerald-300">'hex'</span>)
                            </div>

                            <div className="py-4">
                                <span className="text-sky-300">if</span> (hash <span
                                className="text-sky-300">===</span> signature)
                            </div>
                            {
                                // Request is verified
                            } <span className="text-sky-300">else</span> {
                            // Request could not be verified
                        }
                        </div>
                    </div>}
                    {activeTab === 2 && <div className="tab_panel">
                        <div>
                            <span className="text-sky-300">from</span> flask <span
                            className="text-sky-300">import</span> request
                        </div>
                        <div>
                            <span className="text-sky-300">import</span> hashlib
                        </div>
                        <div>
                            <span className="text-sky-300">import</span> hmac
                        </div>

                        <div className="py-4">
                            <div>
                                signature <span className="text-sky-300">=</span> request.headers. <span
                                className="text-purple-300">get</span> (<span
                                className="text-emerald-300">"x-protocol-signature"</span>)
                            </div>
                            <div>
                                <span className="text-purple-300">hash</span> = hmac. <span
                                className="text-purple-300">new</span>(<span className="text-emerald-300">bytes</span>(secret,<span
                                className="text-emerald-300"> "ascii"</span>), <span
                                className="text-emerald-300">bytes</span>(payload, <span
                                className="text-emerald-300">"ascii"</span>), hashlib.sha256)
                            </div>
                        </div>

                        <div>
                            <div className="py-4">
                                <span className="text-sky-300">if</span> <span
                                className="text-purple-300">hash.hexdigest</span>() <span
                                className="text-sky-300">==</span> signature:
                            </div>
                            # Request is verified
                            <div><span className="text-sky-300">else</span>:
                                # Request could not be verified

                            </div>
                        </div>
                    </div>}
                    {activeTab === 3 && <div className="tab_panel">
                        <div>
                            $signature <span className="text-sky-300">=</span> $request[<span
                            className="text-emerald-300">'headers'</span>][<span
                            className="text-emerald-300">'x-protocol-signature'</span>];
                        </div>
                        <div>
                            $hash <span className="text-sky-300">=</span> <span
                            className="text-purple-300">hash_hmac</span>(<span
                            className="text-emerald-300">'sha256'</span>, <span
                            className="text-purple-300">$payload</span>, <span
                            className="text-purple-300">$secret</span>);
                        </div>

                        <div className="py-4">
                            <span className="text-sky-300">if</span> (<span
                            className="text-purple-300">hash_equals</span>(<span
                            className="text-purple-300">$hash</span>, <span
                            className="text-purple-300">$signature</span>))
                        </div>
                        {
                            // Request is verified
                        } <span className="text-sky-300">else</span> {
                        // Request could not be verified
                    }

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
                </div>
            </div>
        </div>
    );
};

export default VerifyingRequest;