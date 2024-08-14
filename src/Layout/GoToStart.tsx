import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function GoToStart() {
    return (
        <div className="flex p-4 bg-slate-700 rounded-md">
            <Link to="/" className="flex items-center text-center gap-1 bg-slate-600 hover:bg-yellow-200 hover:text-slate-700 text-yellow-200 px-4 py-2 rounded-md transition-all"><FiArrowLeft />Go back home</Link>
        </div>
    )
}