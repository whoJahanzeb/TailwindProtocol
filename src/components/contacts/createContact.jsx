import React from "react";
import CreateRequestTab from "./createRequestTab.jsx";
import CreateResponseTab from "./createResponseTab.jsx";
import {useSelector} from "react-redux";

const CreateContact = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode?"py-20 border-t border-b border-zinc-700":"py-20 border-t border-b"}>
                <div className="text-lg font-semibold">
                    <h1>Create a contact</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to add a new contact to your contact list in Protocol. To add a
                            contact, you must provide their Protocol username and phone number.</p>
                    </div>
                    <div className="row-span-3">
                        <CreateRequestTab/>
                        <div className="py-4">
                            <CreateResponseTab/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Required attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "px-2 mr-2 rounded-lg border border-gray-300" : "mr-2 bg-gray-100 px-2 rounded-lg border border-gray-300"}>username</span><span>string</span>
                            <p>The username for the contact.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "mr-2 px-2 rounded-lg border border-gray-300" : "bg-gray-100 mr-2 px-2 rounded-lg border border-gray-300"}>phone_number</span><span>string</span>
                            <p>The phone number for the contact.</p>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-lg font-semibold">
                            <h1>Optional attributes</h1>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "mr-2 px-2 rounded-lg border border-gray-300" : "bg-gray-100 mr-2 px-2 rounded-lg border border-gray-300"}>avatar_url</span><span>string</span>
                            <p>The avatar image URL for the contact.</p>
                        </div>
                        <div className="py-4">
                   <span
                       className={mode ? "mr-2 px-2 rounded-lg border border-gray-300" : "bg-gray-100 mr-2 px-2 rounded-lg border border-gray-300"}>display_name</span><span>string</span>
                            <p>The contact display name in the contact list. By default, this is just the username.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateContact
