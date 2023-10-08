import { Link, useRouteError } from "react-router-dom"


function Error() {
    const error = useRouteError()
    return (
        <main className="h-screen grid place-content-center text-center">
            <div className="card w-96 text-primary-content bg-neutral-focus">
                <div className="card-body">
                    <h2 className="card-title text-5xl mb-5">404</h2>
                    <p className="text-3xl mb-5">Page Not Found</p>
                        <Link to="/" className="btn">Go To Home</Link>
                </div>
            </div>
        </main>
    )
}

export default Error