import React from 'react'
import RetrieveMessageRequest from "./retrieveMessageRequest.jsx";
import RetrieveMessageResponse from "./retrieveMessageResponse..jsx";

const RetrieveMessage = () => {
    return (
        <>
            <main className="border-b py-10">
                <div className="text-xl py-10 font-semibold">
                    <h1>Retrieve a message</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a message by providing the message id. Refer to <span
                            className="text-emerald-500 font-semibold">the list</span> at the top of this page to see
                            which properties are included with message objects.</p>
                    </div>
                    <div className="row-span-3">
                        <RetrieveMessageRequest/>
                        <div className="py-4">
                            <RetrieveMessageResponse/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default RetrieveMessage
