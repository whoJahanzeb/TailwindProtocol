import BarrierAuth from "./barrierAuth.jsx";
import {useSelector} from "react-redux";

const BarrierToken = () => {
    return (
        <>
            <main>
                <div className="text-lg font-semibold">
                    <h1>OAuth2 with bearer token</h1>
                </div>
                <div className="py-8">
                    <p>The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a
                        connection using OAuth2, you will need your access token — you will find it in the <span className="text-emerald-500 font-semibold">Protocol
                        dashboard</span> under API settings. Here's how to add the token to the request header using cURL:</p>
                </div>
                <div>
                    <BarrierAuth/>
                </div>
            </main>
        </>
    )
}
export default BarrierToken
