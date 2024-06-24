import {Tab} from "@headlessui/react";
import Tabs from "./Tabs.jsx";
import BasicAuth from "./basicAuth.jsx";
import BarrierToken from "./barrierToken.jsx";
import SdkAuthentication from "./sdkAuthentication.jsx";
import {useSelector} from "react-redux";

const BasicAuthentications = () => {
    return (
        <>
            <main className="my-10 grid gap-6">
                <div className="text-lg font-semibold">
                    <h1>Basic authentication</h1>
                </div>
                <div>
                    <p>With basic authentication, you use your username and password to authenticate your HTTP requests.
                        Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to
                        authenticate using cURL:</p>
                </div>
                <div>
                    <BasicAuth/>
                </div>
                <div>
                    <BarrierToken/>
                </div>
                <div>
                    <SdkAuthentication/>
                </div>
            </main>
        </>
    )
}
export default BasicAuthentications
