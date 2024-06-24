import ErrorTypes from "./errorTypes.jsx";
import {useSelector} from "react-redux";

const StatusCode = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main className={mode?"border-b border-zinc-700":"border-b"}>
                <div className="py-10">
                    <div className="text-lg font-semibold">
                        <h1>Status codes</h1>
                    </div>
                    <div className="py-4">
                        <p>Here is a list of the different categories of status codes returned by the Protocol API. Use
                            these to understand if a request was successful.</p>
                    </div>
                    <div className="py-4 border-b max-w-xl">
                        <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>2xx</span>
                        <p className="py-2">A 2xx status code indicates a successful response.</p>
                    </div>
                    <div className="py-4 border-b max-w-xl">
                        <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>4xx</span>
                        <p className="py-2">A 4xx status code indicates a client error — this means it's a you
                            problem.</p>
                    </div>
                    <div className="py-4 max-w-xl">
                        <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>5xx</span>
                        <p className="py-2">A 5xx status code indicates a server error — you won't be seeing these.</p>
                    </div>
                </div>
                <ErrorTypes/>
            </main>
        </>
    )
}
export default StatusCode
