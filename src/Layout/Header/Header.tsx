import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
import Login from "./Login";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const { data } = useQuery({
        queryKey: ["loggedIn"],
        queryFn: () => 
            fetch(import.meta.env.VITE_SERVER_ADDRESS + "/auth/checkauth", {credentials: "include"}).then((res) => 
                res.json()
            )
    })

    async function Logout() {
        const response = await fetch(import.meta.env.VITE_SERVER_ADDRESS + "/auth/logout", {
            credentials: "include"
        })
        if (response.status == 200) navigate("/login")
    }
    return (
        <>
            <div className="flex items-center justify-between bg-slate-700 text-yellow-200 py-4 px-8 rounded-md">
                <Link to="/">
                    <h1 className="text-5xl font-semibold">Daily</h1>
                    <p className="text-lg font-light ml-8 mt-1">By Gabriel Raskov</p>
                </Link>
                <div className="flex items-center gap-8">
                    {data && data.user ? <Profile username={data.user.username} /> : <Login />}
                    {data && data.user && <p className="border-slate-700 hover:border-yellow-200 border rounded-full p-2 transition-all cursor-pointer" onClick={Logout}><FiLogOut size={24} /></p>}
                </div>
            </div>
        </>
    )
}