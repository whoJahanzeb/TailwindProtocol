import React from 'react'
import RequestTab from "./requestTab.jsx";
import ConservationsResponseTab from "./conservationsResponseTab.jsx";
import CreateConservations from "./createConservations.jsx";
import RetrieveConservations from "./retrieveConservations.jsx";
import UpdateConservations from "./updateConservations.jsx";
import DeleteConservations from "./deleteConservations.jsx";
import {useSelector} from "react-redux";

const ConservationsList = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-xl font-semibold">
                    <h1>List all conversations</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a paginated list of all your conversations. By default,
                            a maximum of ten conversations are shown per page.</p>
                    </div>
                    <div className="row-span-3">
                        <RequestTab/>
                        <div className="py-4">
                            <ConservationsResponseTab/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>limit</span><span>integer</span>
                            <p>Limit the number of conversations returned.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>muted</span><span>boolean</span>
                            <p>Only show conversations that are muted when set to <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>true</span>.
                            </p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>archived</span><span>boolean</span>
                            <p>Only show conversations that are archived when set to<span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>true</span>.
                            </p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>pinned</span><span>boolean</span>
                            <p>Only show conversations that are pinned when set to <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>true</span>.
                            </p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300 mr-2"}>group_id</span><span>boolean</span>
                            <p>Only show conversations for the specified group.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <CreateConservations/>
                </div>
                <div>
                    <RetrieveConservations/>
                </div>
                <div>
                    <UpdateConservations/>
                </div>
                <div>
                    <DeleteConservations/>
                </div>
            </main>
        </>
    )
}
export default ConservationsList
