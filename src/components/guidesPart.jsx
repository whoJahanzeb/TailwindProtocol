import React from 'react'
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {useSelector} from "react-redux";

const GuidesPart = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "border-b my-20 border-zinc-700" : "border-b my-20"}>
                <p className="my-4 font-semibold text-lg">Guides</p>
            </div>
            <div className="md:flex gap-10 my-4">
                <div>
                    <div>
                        <h2 className="font-semibold text-sm">Authentication</h2>
                    </div>
                    <div>
                        <p>Learn how to authenticate your API requests.</p>
                    </div>
                    <div>
                        <NavLink to="authentication" className="flex items-center text-emerald-500 font-semibold">Read
                            more
                            <BsArrowRight className="text-sm"/>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-sm">Pagination</h2>
                    </div>
                    <div>
                        <p>Understand how to work with paginated responses.

                        </p>
                    </div>
                    <div>
                        <NavLink to="pagination" className="flex items-center text-emerald-500 font-semibold">Read more
                            <BsArrowRight className="text-sm"/>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-sm">Errors</h2>
                    </div>
                    <div>
                        <p>Read about the different types of errors returned by the API.</p>
                    </div>
                    <div>
                        <NavLink to="errors" className="flex items-center text-emerald-500 font-semibold">Read more
                            <BsArrowRight className="text-sm"/>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-sm">Webhooks</h2>
                    </div>
                    <div>
                        <p>Learn how to programmatically configure webhooks for your app.</p>
                    </div>
                    <div>
                        <NavLink to="webhooks"
                                 className="flex items-center content-center text-emerald-500 font-semibold">Read more
                            <BsArrowRight className="text-sm"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GuidesPart
