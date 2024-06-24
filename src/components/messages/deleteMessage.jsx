import DeleteMessageTab from "./deleteMessageTab.jsx";

const DeleteMessage = () => {
    return (
        <>
            <main className="border-b py-10">
                <div className="text-xl py-10 font-semibold">
                    <h1>Delete a message</h1>
                </div>
                <div className="lg:grid gap-8 grid-cols-2">
                    <div className="py-4">
                        <p>This endpoint allows you to delete messages from your conversations. Note: This will
                            permanently delete the message. </p>
                    </div>
                    <div className="row-span-3">
                        <DeleteMessageTab/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DeleteMessage
