import RegisteringWebHooks from "../components/webhooks/registeringWebHooks.jsx";
import ConsumingWebHooks from "../components/webhooks/consumingWebHooks.jsx";
import WebHooksPayload from "../components/webhooks/webHooksPayload.jsx";
import WebHooksSecurity from "../components/webhooks/webHooksSecurity.jsx";

const WebHooks = () => {
    return (
        <>
            <main className="max-w-5xl xl:py-20 px-4 mx-auto">
                <div className="text-2xl font-semibold">
                    <h1>WebHooks</h1>
                </div>
                <div className="py-6">
                    <p>In this guide, we will look at how to register and consume webhooks to integrate your app with
                        Protocol. With webhooks, your app can know when something happens in Protocol, such as someone
                        sending a message or adding a contact.</p>
                </div>
                <div>
                    <RegisteringWebHooks/>
                </div>
                <div>
                    <ConsumingWebHooks/>
                </div>
                <div>
                    <WebHooksPayload/>
                </div>
                <div>
                    <WebHooksSecurity/>
                </div>
            </main>
        </>
    )
}
export default WebHooks
