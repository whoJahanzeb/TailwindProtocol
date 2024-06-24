import React from 'react'
import UpdateRequestTab from "./updateRequestTab.jsx";
import UpdateResponseTab from "./updateResponseTab.jsx";
import {useSelector} from "react-redux";

const UpdateContacts = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b py-10 border-zinc-700":"border-b py-10"}>
                <div className="text-lg py-10 font-semibold">
                    <h1>Update Contact</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to perform an update on a contact. Currently, the only attribute
                            that can be updated on contacts is the <span
                                className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>display_name</span> attribute
                            which controls how a contact appears in your contact list in Protocol.
                        </p>
                    </div>
                    <div className="row-span-3">
                        <UpdateRequestTab/>
                        <div className="py-4">
                            <UpdateResponseTab/>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Optional attributes</h1>
                        <div className="py-4">
                            <span
                                className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>display_name</span><span>string</span>
                        </div>
                        <p>The contact display name in the contact list. By default, this is just the username.</p>
                    </div>
                </div>
            </main>
        </>
    )
}
export default UpdateContacts
