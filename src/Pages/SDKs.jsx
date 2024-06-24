import SdksLibraries from "../components/sdksLibraries.jsx";

const SdKs = () => {
    return (
        <>
            <main className="max-w-5xl mx-auto py-20 px-10">
                <div className="text-2xl font-semibold"><h1>Protocol SDKs</h1></div>
                <div className="py-10 max-w-3xl">
                    <p>The recommended way to interact with the Protocol API is by using one of our official SDKs.
                        Today, Protocol offers fine-tuned JavaScript, Ruby, PHP, Python, and Go libraries to make your
                        life easier and give you the best experience when consuming the API.</p>
                </div>
                <SdksLibraries/>
            </main>
        </>
    )
}
export default SdKs
