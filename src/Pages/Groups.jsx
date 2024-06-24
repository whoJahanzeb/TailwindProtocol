import React from 'react'
import GroupsProperties from "../components/groups/groupsProperties.jsx";
import GroupsList from "../components/groups/groupsList.jsx";
import {useSelector} from "react-redux";

const Groups = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div>
                    <div className="text-2xl font-semibold">
                        <h1>Groups</h1>
                    </div>
                    <div className="py-4">
                        <p>Groups are where communities live in Protocol — they are a collection of contacts you're
                            talking to all at once. On this page, we'll dive into the different group endpoints you can
                            use to manage groups programmatically. We'll look at how to query, create, update, and
                            delete groups.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>The group model</h1>
                    </div>
                    <div className="py-4">
                        <p>The group model contains all the information about your groups, including what contacts are
                            in the group and the group's name, description, and avatar.</p>
                    </div>
                </div>
                <div className={mode ? "border-b border-zinc-700" : "border-b"}>
                    <GroupsProperties/>
                </div>
                <div className="py-10">
                    <GroupsList/>
                </div>
            </main>
        </>
    )
}
export default Groups
