import {SiPhp, SiRuby} from "react-icons/si";
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {FaNodeJs, FaPython} from "react-icons/fa";
import {BiLogoGoogle} from "react-icons/bi";
import {useSelector} from "react-redux";

const SdksLibraries = () => {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <main>
                <h1 className="text-lg font-semibold">Official libraries</h1>
                <div className="border-b my-4">
                </div>
                <div className="grid grid-cols-3 gap-4 py-10">
                    <div className="flex space-x-10">
                        <div>
                            <SiPhp className="text-blue-600 text-2xl"/>
                        </div>
                        <div>
                            <h1 className="font-semibold">PHP</h1>
                            <p>A popular general-purpose scripting language that is especially suited to web
                                development.</p>
                            <div
                                className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                                <div>
                                    <NavLink to="#">Read more</NavLink>
                                </div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <SiRuby className="text-red-600 text-2xl"/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Ruby</h1>
                            <p>A dynamic, open source programming language with a focus on simplicity and
                                productivity.</p>
                            <div className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                                <div>
                                    <NavLink to="#">Read more</NavLink>
                                </div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <FaNodeJs className="text-green-600 text-2xl"/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Node.js</h1>
                            <p>Node.js® is an open-source, cross-platform JavaScript runtime environment.</p>
                            <div className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                                <div>
                                    <NavLink to="#">Read more</NavLink>
                                </div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <FaPython className="text-purple-600 text-2xl"/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Python</h1>
                            <p>Python is a programming language that lets you work quickly and integrate systems more
                                effectively.
                            </p>
                            <div className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                                <div>
                                    <NavLink to="#">Read more</NavLink>
                                </div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <BiLogoGoogle className="text-sky-400 text-2xl"/>
                        </div>
                        <div>
                            <h1 className="font-semibold">Go</h1>
                            <p>An open-source programming language supported by Google with built-in concurrency.</p>
                            <div className={mode ? "flex items-center space-x-2 text-emerald-300 font-semibold" : "flex items-center space-x-2 text-emerald-500 font-semibold"}>
                                <div>
                                    <NavLink to="#">Read more</NavLink>
                                </div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default SdksLibraries
