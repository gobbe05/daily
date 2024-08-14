import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Link to="/login" className="bg-yellow-200 rounded-md py-2 px-4 font-semibold text-slate-700 hover:border-yellow-200 transition-all">Login</Link>
        </>
    )
}