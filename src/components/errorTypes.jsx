import ErrorResponse from "./errorResponse.jsx";
import {useSelector} from "react-redux";

const PaginationCursor = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-lg font-semibold py-10">
                    <h1>Error types</h1>
                </div>
                <div className="grid gap-10 grid-cols-2 item-center content-center">
                    <div>
                        <p>Whenever a request is unsuccessful, the Protocol API will return an error response with an
                            error type and message. You can use this information to understand better what has gone
                            wrong and how to fix it. Most of the error messages are pretty helpful and actionable.</p>
                    </div>
                    <div className="row-span-4">
                        <ErrorResponse/>
                    </div>
                    <div>
                        <p>Here is a list of the two error types supported by the Protocol API — use these to understand
                            what you have done wrong.</p>
                    </div>
                    <div>
                        <div> <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>api_error</span>
                        </div>
                        <div>
                            <p>This means that we made an error, which is highly speculative and unlikely.</p>
                        </div>
                    </div>
                    <div>
                        <div> <span
                            className={mode ? "mr-2 px-2 rounded-lg border border-zinc-300" : "bg-zinc-100 mr-2 px-2 rounded-lg border border-gray-300"}>invalid_request</span>
                        </div>
                        <div>
                            <p>This means that you made an error, which is much more likely.</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default PaginationCursor
