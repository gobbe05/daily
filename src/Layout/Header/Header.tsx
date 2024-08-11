import { useQuery } from "@tanstack/react-query";
import Profile from "./Profile";
import Login from "./Login";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const {isPending, error, data } = useQuery({
        queryKey: ["loggedIn"],
        queryFn: () => 
            fetch("http://192.168.68.113:3000/auth/checkauth", {credentials: "include"}).then((res) => 
                res.json()
            )
    })

    async function Logout() {
        const response = await fetch("http://192.168.68.113:3000/auth/logout", {
            credentials: "include"
        })
        if (response.status == 200) navigate("/login")
    }
    return (
        <>
            <div className="flex items-center justify-between bg-slate-700 text-yellow-200 py-4 px-8 rounded-md">
                <div>
                    <h1 className="text-5xl font-semibold">Daily</h1>
                    <p className="text-lg font-light ml-8 mt-1">By Gabriel Raskov</p>
                </div>
                <div className="flex items-center gap-8">
                    {data && data.user ? <Profile username={data.user.username} /> : <Login />}
                    {data && data.user && <p className="border-slate-700 hover:border-yellow-200 border rounded-full p-2 transition-all cursor-pointer" onClick={Logout}><FiLogOut size={24} /></p>}
                </div>
            </div>
        </>
    )
}