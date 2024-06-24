import ManualPagination from "./manualPagination.jsx";
import {useSelector} from "react-redux";

const PaginationCursor = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <div className="text-lg font-semibold py-10">
                    <h1>Example using cursors</h1>
                </div>
                <div className="grid gap-10 grid-cols-2 item-center content-center">
                    <div>
                        <p>In this example, we request the page that starts after the conversation with id
                            <span
                                className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>s4WycXedwhQrEFuM </span>.
                            As a result, we get a list of three conversations and can tell by the
                            has_more attribute that we have reached the end of the resultset.</p>
                    </div>
                    <div className="row-span-4">
                        <ManualPagination/>
                    </div>
                    <div>
                        <div> <span
                            className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>starting_after</span>
                        </div>
                        <div>
                            <p>The last ID on the page you're currently on when you want to fetch the next page.</p>
                        </div>
                    </div>
                    <div>
                        <div> <span
                            className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>ending_before</span>
                        </div>
                        <div>
                            <p>The first ID on the page you're currently on when you want to fetch the previous
                                page.</p>
                        </div>
                    </div>
                    <div>
                        <div> <span
                            className={mode ? "border border-gray-300 px-2 rounded-2xl mr-2" : "border mr-2 border-gray-300 px-2 rounded-2xl m-2 bg-gray-100"}>limit</span>
                        </div>
                        <div>
                            <p>Limit the number of items returned.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default PaginationCursor
