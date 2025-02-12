import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function GlobalErrors() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
        return <div>This page doesn't exist!</div>;
        }

        if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
        return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
        return <div>🫖</div>;
        }
    }
    return (
        <div className="flex justify-center items-center bg-[url('https://www.svgrepo.com/show/390315/stars.svg')] bg-[length:40px_40px] h-screen bg-white/[97%] bg-blend-overlay">
            <main className="bg-white px-6 py-14 lg:px-8 border-gray-300 shadow-2xl rounded-[2rem] border">
                <div className="text-center">
                <p className="text-base font-semibold text-gray-600">ERROR</p>
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">{ error.data }</h1>
                <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Go back home</Link>
                    <Link to="/contact" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
                </div>
                </div>
            </main>
        </div>
    );
}