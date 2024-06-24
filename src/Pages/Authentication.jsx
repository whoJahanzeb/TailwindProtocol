import BasicAuthentications from "../components/basicAuthentications.jsx";

const Authentication = () => {
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10 grid gap-4">
                <div className="text-2xl font-semibold"><h1>Authentication</h1></div>
                <div>
                    <p>You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In
                        this guide, we'll look at how authentication works. Protocol offers two ways to authenticate
                        your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended
                        way.</p>
                </div>
                <BasicAuthentications/>
            </main>
        </>
    )
}
export default Authentication
