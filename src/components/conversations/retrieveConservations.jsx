import React from 'react'
import RetrieveConservationRequest from "./retrieveConservationRequest.jsx";
import RetrieveConservationsResponse from "./retrieveConservationsResponse.jsx";
import {useSelector} from "react-redux";

const RetrieveConservations = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode ? "border-b border-zinc-700 py-4" : "border-b border-zinc-200 py-4"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Retrieve a conversation</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a conversation by providing the conversation id. Refer
                            to <span
                                className="text-emerald-500 font-semibold">the list</span> at the top of this page to
                            see which properties are included with conversation objects.</p>
                    </div>
                    <div className="row-span-3">
                        <RetrieveConservationRequest/>
                        <div className="py-4">
                            <RetrieveConservationsResponse/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default RetrieveConservations
