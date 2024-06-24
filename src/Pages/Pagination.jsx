import React from 'react'
import PaginationCursor from "../components/paginationCursor.jsx";
import {useSelector} from "react-redux";

const Pagination = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div className="text-2xl m-2 font-semibold">
                    <h1>Pagination</h1>
                </div>
                <div className="md:grid md:gap-10 leading-7 py-4">
                    <p>In this guide, we will look at how to work with paginated responses when querying the Protocol
                        API. By default, all responses limit results to ten. However, you can go as high as 100 by
                        adding a limit parameter to your requests. If you are using one of the official Protocol API
                        client libraries, you don't need to worry about pagination, as it's all being taken care of
                        behind the scenes.</p>
                    <p>
                        When an API response returns a list of objects, no matter the amount, pagination is supported.
                        In paginated responses, objects are nested in a <span
                        className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>data</span> attribute
                        and have
                        a <span
                        className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>has_more</span> attribute
                        that
                        indicates whether you have reached the end of the last page. You can use the <span
                        className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>starting_after</span> and <span
                        className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>endding_before </span> query
                        parameters to browse pages.
                    </p>
                </div>
                <div>
                    <PaginationCursor/>
                </div>
            </main>
        </>
    )
}
export default Pagination
