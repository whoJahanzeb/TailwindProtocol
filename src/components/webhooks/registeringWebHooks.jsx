const RegisteringWebHooks = () => {
    return (
        <>
            <main className="py-10">
                <div className="text-lg font-semibold py-4">
                    <h1>Registering webhooks</h1>
                </div>
                <div className="leading-7">
                    <p>To register a new webhook, you need to have a URL in your app that Protocol can call. You can
                        configure a new webhook from the Protocol dashboard under <span className="text-emerald-500 font-semibold">API settings</span>. Give your webhook a
                        name, pick the <span className="text-emerald-500 font-semibold">events</span> you want to listen for, and add your URL.</p>
                    <p className="py-4">Now, whenever something of interest happens in your app, a webhook is fired off by Protocol. In the next section, we'll look at how to consume webhooks.</p>
                </div>
            </main>
        </>
    )
}
export default RegisteringWebHooks
