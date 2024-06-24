import {Form} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {useSelector} from "react-redux";

const SearchModal = ({closeModal}) => {
    const {mode} = useSelector(state => state.darkMode)
    return <>
        <div
            className={mode ? "fixed bg-zinc-900 opacity-80 left-0 right-0 bottom-0 top-0" : "fixed bg-gray-50 opacity-80 left-0 right-0 bottom-0 top-0"}
            onClick={closeModal}></div>
        <div
            className={mode ? "fixed w-2/5 shadow-xl rounded-full bg-white text-black focus ml-80 mt-32" : "fixed w-2/5 shadow-xl rounded-full bg-white focus ml-80 mt-32"}>
            <Form className="flex">
                <div className="w-full">
                    <div className="grid grid-cols-10 place-items-center">
                        <div className="text-xl"><AiOutlineSearch/></div>
                        <div className="col-span-9 w-full"><input type="text"
                                                                  className="py-4 w-full rounded-full focus:outline-none px-6"
                                                                  placeholder="Find Something..."/></div>
                    </div>
                </div>
            </Form>
        </div>
    </>
}
export default SearchModal