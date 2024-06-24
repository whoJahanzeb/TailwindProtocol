import React from 'react'
import VerifyingRequest from "./verifyingRequest.jsx";
import {useSelector} from "react-redux";

const WebHooksSecurity = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (<>
            <main>
                <div className="text-lg font-semibold">
                    <h1>Security</h1>
                </div>
                <div className="py-6">
                    <p>To know for sure that a webhook was, in fact, sent by Protocol instead of a malicious actor, you
                        can verify the request signature. Each webhook request contains a header named
                        x-protocol-signature, and you can verify this signature by using your secret webhook key. The
                        signature is an HMAC hash of the request payload hashed using your secret key. Here is an
                        example of how to verify the signature in your app:</p>
                </div>
                <div>
                    <VerifyingRequest/>
                </div>
                <div className="py-6">
                    <p>If your generated signature matches the <span
                        className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>x-protocol-signature</span> header,
                        you can be sure that the request was truly coming from Protocol. It's essential to keep your
                        secret webhook key safe — otherwise, you can no longer be sure that a given webhook was sent by
                        Protocol. Don't commit your secret webhook key to GitHub!</p>
                </div>
            </main>
        </>)
}
export default WebHooksSecurity
