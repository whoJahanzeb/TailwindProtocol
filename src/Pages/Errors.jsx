import React from 'react'
import {BsInfoCircle} from "react-icons/bs";
import StatusCode from "../components/statusCode.jsx";
import {useSelector} from "react-redux";

const Errors = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-4xl xl:py-20 px-4 mx-auto leading-7">
                <div className={mode?"border-b pb-10 border-zinc-700":"border-b pb-10"}>
                    <div className="text-2xl font-semibold">
                        <h1>Errors</h1>
                    </div>
                    <div className="grid gap-6 my-4">
                        <p>In this guide, we will talk about what happens when something goes wrong while you work with
                            the
                            API. Mistakes happen, and mostly they will be yours, not ours. Let's look at some status
                            codes
                            and error types you might encounter.</p>
                        <p>You can tell if your request was successful by checking the status code when receiving an API
                            response. If a response comes back unsuccessful, you can use the error type and error
                            message to
                            figure out what has gone wrong and do some rudimentary debugging (before contacting
                            support).</p>
                    </div>
                    <div
                        className={mode ? "text-emerald-300 flex space-x-4 items-center bg-zinc-800 rounded-md border-zinc-700 py-4 px-6 border" : "text-emerald-500 flex space-x-4 items-center bg-emerald-50 rounded-md border-emerald-500 py-4 px-6 border"}>
                        <BsInfoCircle className="text-emerald-800 text-4xl"/>
                        <p className={mode ? "text-white" : "text-emerald-600"}>
                            Before reaching out to support with an error, please be aware that 99% of all reported
                            errors are, in fact, user errors. Therefore, please carefully check your code before
                            contacting Protocol support.
                        </p>
                    </div>
                </div>
                <section className="py-10">
                    <StatusCode/>
                </section>
            </main>
        </>
    )
}
export default Errors
