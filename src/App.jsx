import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Api from "./Pages/Api.jsx";
import QuickStart from "./Pages/QuickStart.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Authentication from "./Pages/Authentication.jsx";
import Pagination from "./Pages/Pagination.jsx";
import Errors from "./Pages/Errors.jsx";
import WebHooks from "./Pages/WebHooks.jsx";
import Contact from "./Pages/Contact.jsx";
import Conversations from "./Pages/Conversations.jsx";
import Messages from "./Pages/Messages.jsx";
import Groups from "./Pages/Groups.jsx";
import Attachments from "./Pages/Attachments.jsx";
import SDKs from "./Pages/SDKs.jsx";
import {useSelector} from "react-redux";

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Api/>}/>
            <Route path="quickstart" element={<QuickStart/>}/>
            <Route path="sdks" element={<SDKs/>}/>
            <Route path="authentication" element={<Authentication/>}/>
            <Route path="pagination" element={<Pagination/>}/>
            <Route path="errors" element={<Errors/>}/>
            <Route path="webhooks" element={<WebHooks/>}/>
            <Route path="contacts" element={<Contact/>}/>
            <Route path="conversations" element={<Conversations/>}/>
            <Route path="messages" element={<Messages/>}/>
            <Route path="groups" element={<Groups/>}/>
            <Route path="attachments" element={<Attachments/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    ))
    const {mode} = useSelector(state => state.darkMode)
    return (
        <>
            <div className={mode ? "bg-zinc-900 text-zinc-400" : ""}>
                <RouterProvider router={router}/>
            </div>
        </>
    )
}
export default App
