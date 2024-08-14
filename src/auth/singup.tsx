import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../Layout/Header/Header"
import GoToStart from "../Layout/GoToStart"

export default function SignUp() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("") 
   
    async function Register() {
        const response = await fetch(import.meta.env.VITE_SERVER_ADDRESS + "/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
                confirmPassword
            }),
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        if (response.status == 200) navigate("/login")
    }

    return (
        <div className="flex flex-col justify-center gap-4 m-auto h-dvh max-w-[640px]">
            <Header />
            <div className="flex flex-col justify-center bg-slate-700 text-white p-8 rounded-md mx-auto w-[640px]">
                <div>
                    <h1 className="text-2xl mt-2">Sign Up</h1>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <div>
                        <p className="font-light text-sm">Username</p>
                        <input className="text-slate-700 w-full px-2 py-1 rounded-md" type="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <p className="font-light text-sm">Password</p>
                        <input className="text-slate-700 w-full px-2 py-1 rounded-md" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <p className="font-light text-sm">Confirm Password</p>
                        <input className="text-slate-700 w-full px-2 py-1 rounded-md" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className="bg-slate-600 hover:bg-yellow-200 hover:text-slate-700 p-2 rounded-md transition-all" onClick={Register}>Register</button>
                    <p>Already have an account? <Link className="text-yellow-200" to="/login">Login</Link></p>
                </div>
            </div>
            <GoToStart />
        </div>
    )
}