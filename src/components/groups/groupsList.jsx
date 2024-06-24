import React from 'react'
import GroupRequestTab from "./groupRequestTab.jsx";
import GroupResponseTab from "./groupResponseTab.jsx";
import CreateGroup from "./createGroup.jsx";
import RetrieveGroup from "./retrieveGroup.jsx";
import UpdateGroups from "./updateGroups.jsx";
import DeleteGroups from "./deleteGroups.jsx";
import {useSelector} from "react-redux";

const GroupsList = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-xl font-semibold">
                    <h1>List all groups</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a paginated list of all your groups. By default, a
                            maximum of ten groups are shown per page.</p>
                    </div>
                    <div className="row-span-3">
                        <GroupRequestTab/>
                        <div className="py-4">
                            <GroupResponseTab/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className={mode ? "py-4 border-b border-zinc-700" : "py-4 border-b border-zinc-300"}>
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-zinc-300"}>limit</span><span>integer</span>
                            <p className="py-2">Limit the number of groups returned. </p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-zinc-300"}>archived</span><span>boolean</span>
                            <p className="py-2">Only show groups that are archived when set to <span
                                className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 rounded-lg border border-zinc-300"}>true</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <CreateGroup/>
                </div>
                <div>
                    <RetrieveGroup/>
                </div>
                <div>
                    <UpdateGroups/>
                </div>
                <div>
                    <DeleteGroups/>
                </div>
            </main>
        </>
    )
}
export default GroupsList
