import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function Login() {
        const response = await fetch("http://192.168.68.113:3000/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        if (response.status == 200) navigate("/") 
    }

    return (
        <div className="flex items-center h-dvh">
            <div className="flex justify-center bg-slate-700 text-white p-16 mx-auto w-[640px]">
                <div>

                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <p>Username</p>
                        <input className="text-slate-700" type="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input className="text-slate-700" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="bg-slate-600 hover:bg-yellow-200 hover:text-slate-700 p-2 transition-all" onClick={Login}>Login</button>
                    <p>Don't have an account? <a className="text-yellow-200" href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}