import React from 'react'
import {useSelector} from "react-redux";

const ConsumingWebHooks = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-lg font-semibold">
                    <h1>Consuming webhooks</h1>
                </div>
                <div className="py-4">
                    <p>When your app receives a webhook request from Protocol, check the <span className={mode ? "mr-2 px-2 rounded-lg border border-gray-300" : "bg-gray-100 mr-2 px-2 rounded-lg border border-gray-300"}>type</span> attribute to see what event caused it. The first part of the event type will tell you the payload type, e.g., a conversation, message, etc.</p>
                </div>
            </main>
        </>
    )
}
export default ConsumingWebHooks
