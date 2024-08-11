import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../App"


export default function NewMission() {
    const [input, setInput] = useState<string>("")
    const mutation = useMutation({
        mutationFn: ({id, name}: {id: number, name: string}) => (
            fetch("http://192.168.68.113:3000/user/newmission", {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    name: name 
                }),
                credentials: "include",
                headers: {
                    'Content-Type': "application/json"
                }
            })
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["missions"]})
            setInput("")
        }
    })

    return (
        <div className="flex flex-col">
            <input className="bg-slate-700 text-slate-200 text-lg text-center font-semibold p-2 rounded-md" placeholder="Create a new routine..." type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button className="bg-yellow-200 text-slate-800 font-semibold text-xl my-2 p-2 rounded-md" onClick={() => {
                mutation.mutate({
                    id: Date.now(),
                    name: input
                })
            }}>Add Routine</button>
        </div>
    )
}