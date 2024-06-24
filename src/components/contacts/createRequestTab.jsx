import {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const CreateRequestTab = () => {
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
    const codeSnippet = `curl https://api.protocol.chat/v1/contacts \\
  -H "Authorization: Bearer {token}" \\
  -d username="FrankMcCallister" \\
  -d phone_number="1-800-759-3000" \\
  -d avatar_url="https://assets.protocol.chat/avatars/frank.jpg"`
    const codeSnippet1 = `import ApiClient from '@example/protocol-api'

const client = new ApiClient(token)

await client.contacts.create({
  username: 'FrankMcCallister',
  phone_number: '1-800-759-3000',
  avatar_url: 'https://assets.protocol.chat/avatars/frank.jpg',
})
`
    const codeSnippet2 = `from protocol_api import ApiClient

client = ApiClient(token)

client.contacts.create(
  username="FrankMcCallister",
  phone_number="1-800-759-3000",
  avatar_url="https://assets.protocol.chat/avatars/frank.jpg",
)

`
    const codeSnippet3 = `$client = new \\Protocol\\ApiClient($token);

$client->contacts->create([
  'username' => 'FrankMcCallister',
  'phone_number' => '1-800-759-3000',
  'avatar_url' => 'https://assets.protocol.chat/avatars/frank.jpg',
]);
`

    return (
        <div className={mode ? "bg-zinc-800 rounded-3xl text-sm" : "bg-black rounded-3xl text-sm"}>
            <ul className={mode ? "flex justify-between bg-zinc-700 rounded-t-3xl py-2 px-4" : "flex justify-between bg-gray-800 rounded-t-3xl py-2 px-4"}>
                <div className="text-white">
                    <h1>Request</h1>
                </div>
                <div className="flex space-x-4">
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
                </div>
            </ul>

            <div className="tab_content flex justify-between">
                <div>
                    {activeTab === 1 && <div className="tab_panel">
                        <div>
                            curl https://api.protocol.chat/v1/contacts \
                        </div>
                        <div>
                            -H <span className="text-emerald-300">"Authorization: Bearer token"</span> \
                        </div>
                        <div>
                            -d username=<span className="text-emerald-300">"FrankMcCallister"</span> \
                        </div>
                        <div>
                            -d phone_number=<span className="text-emerald-300">"1-800-759-3000"</span> \
                        </div>
                        <div>
                            -d avatar_url=<span
                            className="text-emerald-300">"https://assets.protocol.chat/avatars/frank.jpg"</span>
                        </div>
                    </div>}
                    {activeTab === 2 && <div className="tab_panel">
                        <div>
                            <span className="text-sky-300">import</span> ApiClient <span
                            className="text-sky-300">from</span> <span
                            className="text-emerald-300">'@example/protocol-api'</span>
                        </div>

                        <div className="py-4">
                            <span className="text-sky-300">const</span> <span className="text-emerald-300">client</span>
                            <span className="text-sky-300">= new</span> <span
                            className="text-purple-300">ApiClient</span>(token)
                        </div>

                        <div>
                            <span className="text-sky-300">await</span> <span
                            className="text-emerald-300">client.contacts</span>. <span
                            className="text-purple-300">create</span>()
                        </div>
                        <div>
                            username: <span className="text-emerald-300">'FrankMcCallister'</span>,
                        </div>
                        <div>
                            phone_number: <span className="text-emerald-300">''1-800-759-3000''</span>,
                        </div>
                        <div>
                            avatar_url: <span
                            className="text-emerald-300">''https://assets.protocol.chat/avatars/frank.jpg','</span>,
                        </div>
                    </div>}
                    {activeTab === 3 && <div className="tab_panel">
                        <div>
                            <span className="text-sky-300">from</span> protocol_api <span
                            className="text-sky-300">import</span> ApiClient
                        </div>
                        <div className="py-4">
                            client <span className="text-sky-300">=</span> <span
                            className="text-purple-300">ApiClient</span>(token)
                        </div>
                        <div>
                            client.contacts.<span className="text-purple-300">create</span>()
                        </div>
                        <div>
                            username= <span className="text-emerald-300">'FrankMcCallister'</span>,
                        </div>
                        <div>
                            phone_number= <span className="text-emerald-300">''1-800-759-3000''</span>,
                        </div>
                        <div>
                            avatar_url= <span
                            className="text-emerald-300">''https://assets.protocol.chat/avatars/frank.jpg','</span>,
                        </div>
                    </div>}
                    {activeTab === 4 && <div className="tab_panel">
                        <div>
                            $client <span className="text-blue-300">= new</span> \<span
                            className="text-emerald-300">Protocol</span>\<span
                            className="text-emerald-300">ApiClient</span>($token);
                        </div>
                        <div className="py-4">
                            $client<span className="text-blue-300">-></span> contacts<span
                            className="text-blue-300">-></span> <span className="text-purple-300">create</span>();
                        </div>
                        <div>
                            <span className="text-emerald-300">"username"</span>= <span
                            className="text-emerald-300">'FrankMcCallister'</span>,
                        </div>
                        <div>
                            <span className="text-emerald-300">"phone_number"</span>= <span
                            className="text-emerald-300">''1-800-759-3000''</span>,
                        </div>
                        <div>
                            <span className="text-emerald-300">"avatar_url"</span>= <span
                            className="text-emerald-300">''https://assets.protocol.chat/avatars/frank.jpg','</span>,
                        </div>
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
}
export default CreateRequestTab