import React, {useState} from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {MdContentCopy} from "react-icons/md";
import {useSelector} from "react-redux";

const CreateAttachmentResponse = () => {
    const [isCopied, setIsCopied] = useState(false);
    const {mode} = useSelector(state => state.darkMode)
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    const codeSnippet = `{
  "id": "Nc6yKKMpcxiiFxp6",
  "message_id": "LoPsJaMcPBuFNjg1",
  "filename": "Invoice_room_service__Plaza_Hotel.pdf",
  "file_url": "https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf",
  "file_type": "application/pdf",
  "file_size": 21352,
  "created_at": 692233200
}
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
                            className="text-emerald-300">"Nc6yKKMpcxiiFxp6</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"message_id"</span>: <span
                            className="text-emerald-300">"LoPsJaMcPBuFNjg1"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"filename"</span>: <span
                            className="text-emerald-300">"Invoice_room_service__Plaza_Hotel.pdf"</span>
                        </div>
                        <div>
                            <span className="text-sky-300">"file_url"</span>: <span
                            className="text-emerald-300">"https://assets.protocol.chat/attachments/ <div>Invoice_room_service__Plaza_Hotel.pdf</div></span>
                        </div>
                        <div>
                            <span className="text-sky-300">"file_type"</span>: <span
                            className="text-emerald-300">"application/pdf"</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"file_size"</span>: <span
                            className="text-emerald-300">21352</span>,
                        </div>
                        <div>
                            <span className="text-sky-300">"created_at"</span>: <span
                            className="text-emerald-300">692233200</span>
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
export default CreateAttachmentResponse
