import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../App"


export default function NewMission() {
    const [input, setInput] = useState<string>("")
    const mutation = useMutation({
        mutationFn: ({id, name}: {id: number, name: string}) => (
            fetch("http://127.0.0.1:3000/user/newmission", {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    name: name 
                }),
                headers: {
                    'Content-Type': "application/json"
                }
            })
        ),
        onSuccess: () => {
            console.log("hej")
            queryClient.invalidateQueries({queryKey: ["missions"]})
        }
    })

    return (
        <>
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button onClick={() => {
                mutation.mutate({
                    id: Date.now(),
                    name: input
                })
            }}>New</button>
        </>
    )
}