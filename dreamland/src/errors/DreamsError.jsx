import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function DreamsError() {
    const error = useRouteError();
    console.log(error);

    let errorMessage = "An unexpected error occurred";

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            errorMessage = "The requested dream was not found!";
        } else if (error.status === 500) {
            errorMessage = "Server error, please try again later.";
        }
    }

    return (
        <div className="flex justify-center items-center bg-[url('https://www.svgrepo.com/show/390315/stars.svg')] bg-[length:40px_40px] bg-white/[97%] bg-blend-overlay h-screen">
            <main className="bg-white px-6 py-14 lg:px-8 border border-gray-300 shadow-2xl rounded-[2rem]">
                <div className="text-center">
                    <p className="text-base font-semibold text-gray-600">ERROR</p>
                    <h1 className="mt-4 font-semibold text-gray-900 sm:text-4xl">{errorMessage}</h1>
                    <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/" className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500">
                            Go back home
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}