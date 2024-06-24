import React from 'react'
import ContactList from "../components/contacts/ContactList.jsx";
import {useSelector} from "react-redux";

const Contact = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div className={mode ? "border-b pb-6 border-zinc-700" : "border-b pb-6"}>
                    <div className="text-2xl font-semibold"><h1>Contact</h1></div>
                    <div className="py-4">
                        <p>As the name suggests, contacts are a core part of Protocol — the very reason Protocol exists
                            is
                            so you can have secure conversations with your contacts. On this page, we'll dive into the
                            different contact endpoints you can use to manage contacts programmatically. We'll look at
                            how
                            to query, create, update, and delete contacts.</p>
                    </div>
                    <div className="py-10">
                        <div className="text-lg py-8 font-semibold">
                            <h1>The contact model</h1>
                        </div>
                        <div className="py-4">
                            <p>The contact model contains all the information about your contacts, such as their
                                username, avatar, and phone number. It also contains a reference to the conversation
                                between you and the contact and information about when they were last active on
                                Protocol.</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg py-8 font-semibold">
                            <h1>Properties</h1>
                        </div>
                        <div className="py-10">
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>id</span><span>string</span>
                                <p className="py-2">Unique identifier for the contact.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>username</span><span>string</span>
                                <p className="py-2">The username for the contact.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>phone_number</span><span>string</span>
                                <p className="py-2">The phone number for the contact.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>avatar_url</span><span>string</span>
                                <p className="py-2">The avatar image URL for the contact.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>display_name</span><span>string</span>
                                <p className="py-2">The contact display name in the contact list. By default, this is
                                    just the username.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>conversation_id</span><span>string</span>
                                <p className="py-2">Unique identifier for the conversation associated with the
                                    contact.</p>
                            </div>
                            <div className={mode ? "border-b max-w-lg py-8 border-zinc-700" : "border-b max-w-lg py-8"}>
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>last_active_at</span><span>timestamp</span>
                                <p className="py-2">Timestamp of when the contact was last active on the platform.</p>
                            </div>
                            <div className="py-8">
                                <span
                                    className={mode ? "text-xs px-2 mr-2 rounded-lg border border-zinc-500" : "bg-zinc-100 px-2 mr-2 rounded-lg border border-zinc-300"}>created_at</span><span>timestamp</span>
                                <p className="py-2">Timestamp of when the contact was created.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <ContactList/>
                </div>
            </main>
        </>
    )
}
export default Contact
