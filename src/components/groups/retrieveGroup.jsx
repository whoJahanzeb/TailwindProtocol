import React from 'react'
import RetrieveGroupRequest from "./retrieveGroupRequest.jsx";
import RetrieveGroupResponse from "./retrieveGroupResponse.jsx";
import {useSelector} from "react-redux";

const RetrieveGroup = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b py-10 border-zinc-700":"border-b py-10"}>
                <div className="text-xl py-10 font-semibold">
                    <h1>Retrieve a group</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to retrieve a group by providing the group id. Refer to <span
                            className="text-emerald-500 font-semibold">the list</span> at the top of this page to see
                            which properties are included with group objects.</p>
                    </div>
                    <div className="row-span-3">
                        <RetrieveGroupRequest/>
                        <div className="py-4">
                            <RetrieveGroupResponse/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default RetrieveGroup
