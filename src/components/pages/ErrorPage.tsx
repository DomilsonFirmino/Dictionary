import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="body grid h-full content-center text-center">
        <h1 className="text-6xl text-red-400 font-bold">404 not found</h1>
        <p className="text-3xl mt-4 font-medium">We could not found the page you where searching for</p>
        <div className="mt-8">
            <Link className="text-xl inline-block hover:bg-green-600 transition-all cursor-pointer bg-green-400 px-4 py-2 text-white" to={"/dictionary"}>Go back</Link>
        </div>
    </div>
  )
}
