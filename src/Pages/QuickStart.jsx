import {BsInfoCircle} from "react-icons/bs";
import ClientsPart from "../components/clientsPart.jsx";
import QuickStartApi from "../components/quickStartApi.jsx";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const QuickStart = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10 lg:pr-32">
                <div>
                    <h1 className="text-2xl font-semibold">Quickstart</h1>
                </div>
                <div className="py-8">
                    <p>This guide will get you all set up and ready to use the Protocol API. We'll cover how to get
                        started
                        using one of our API clients and how to make your first API request. We'll also look at where to
                        go
                        next to find all the information you need to take full advantage of our powerful REST API.</p>
                </div>
                <div
                    className={mode ? "text-emerald-300 flex space-x-4 items-center bg-zinc-800 rounded-md border-zinc-700 py-4 px-6 border" : "text-emerald-500 flex space-x-4 items-center bg-emerald-50 rounded-md border-emerald-500 py-4 px-6 border"}>
                    <BsInfoCircle className="text-emerald-800 text-4xl"/>
                    <p className={mode ? "text-white" : "text-emerald-600"}>
                        Before you can make requests to the Protocol API, you will need to grab your API key from your
                        dashboard. You find it under
                    </p>
                </div>
                <ClientsPart/>
                <QuickStartApi/>
                <div>
                    <div className="my-4">
                        <h1 className="text-lg font-semibold">What's next?</h1>
                    </div>
                    <p>
                        Great, you're now set up with an API client and have made your first request to the API. Here
                        are a few links that might be handy as you venture further into the Protocol API:
                    </p>
                    <ul className={mode ? "font-semibold text-emerald-300 gap-2 grid list-disc px-10 my-6 text-sm" : "font-semibold text-emerald-500 gap-2 grid list-disc px-10 my-6 text-sm"}>
                        <NavLink to="..">
                            <li>Grab your API key from the Protocol dashboard</li>
                        </NavLink>
                        <NavLink to="/conversations">
                            <li>Check out the Conversations endpoint</li>
                        </NavLink>
                        <Link to="/messages">
                            <li>Learn about the different error messages in Protocol</li>
                        </Link>
                    </ul>
                </div>
            </main>
        </>
    )
}
export default QuickStart
