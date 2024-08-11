import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("") 
   
    async function Register() {
        const response = await fetch("http://192.168.68.113:3000/auth/register", {
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
                    <div>
                        <p>Confirm Password</p>
                        <input className="text-slate-700" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className="bg-slate-600 hover:bg-yellow-200 hover:text-slate-700 p-2 transition-all" onClick={Register}>Register</button>
                    <p>Already have an account? <Link className="text-yellow-200" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}