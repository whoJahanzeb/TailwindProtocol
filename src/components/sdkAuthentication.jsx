import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import React from "react";
import {useSelector} from "react-redux";

const SdkAuthentication = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-lg font-semibold">
                    <h1>Using an SDK</h1>
                </div>
                <div>
                    <p>If you use one of our official SDKs, you won't have to worry about any of the above — fetch your
                        access token from the <span className="font-semibold text-emerald-500">Protocol dashboard</span> under API settings, and the client library will take
                        care of the rest. All the client libraries use OAuth2 behind the scenes.</p>
                </div>
                <div className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                    <div>
                        <NavLink to="/sdks">Check out our list of first-party SDKs</NavLink>
                    </div>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default SdkAuthentication
