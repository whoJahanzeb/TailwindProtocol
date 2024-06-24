import React from "react";
import RetrieveRequestTab from "./retrieveRequestTab.jsx";
import RetrieveResponseTab from "./retrieveResponseTab.jsx";
import {useSelector} from "react-redux";

const RetrieveContact = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b py-10 border-zinc-700" : "border-b py-10"}>
                <div className="text-lg py-10 font-semibold">
                    <h1>Retrieve Contact</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a contact by providing their Protocol id. Refer to <span
                            className="text-emerald-500 font-semibold">the list</span> at the top of this page to see
                            which properties are included with contact objects.</p>
                    </div>
                    <div className="row-span-3">
                        <RetrieveRequestTab/>
                        <div className="py-4">
                            <RetrieveResponseTab/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default RetrieveContact
