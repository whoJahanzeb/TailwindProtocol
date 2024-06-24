import React from "react";
import ContactTab from "./contactTab.jsx";
import ResponseTab from "./responseTab.jsx";
import CreateContact from "./createContact.jsx";
import RetrieveContact from "./retrieveContact.jsx";
import UpdateContacts from "./updateContacts.jsx";
import DeleteContact from "./deleteContact.jsx";
import {useSelector} from "react-redux";

const ContactList = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (<>
        <main>
            <div className="text-lg font-semibold">
                <h1>List all contacts</h1>
            </div>
            <div className="lg:grid gap-8 grid-cols-2">
                <div className="py-4">
                    <p>This endpoint allows you to retrieve a paginated list of all your contacts. By default, a
                        maximum
                        of ten contacts are shown per page.</p>
                </div>
                <div className="row-span-3">
                    <ContactTab/>
                    <div className="py-4">
                        <ResponseTab/>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>Optional attributes</h1>
                    </div>
                    <div className="py-4">
                   <span
                       className={mode ? "mr-2 px-2 rounded-lg border border-gray-300" : "bg-gray-100 mr-2 px-2 rounded-lg border border-gray-300"}>limit</span><span>integer</span>
                        <p>Limit the number of contacts returned.</p>
                    </div>
                </div>
            </div>
            <div>
                <CreateContact/>
            </div>
            <div>
                <RetrieveContact/>
            </div>
            <div>
                <UpdateContacts/>
            </div>
            <div>
                <DeleteContact/>
            </div>
        </main>
    </>)
}
export default ContactList
