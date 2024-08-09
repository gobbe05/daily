import { useMutation } from "@tanstack/react-query"
import IMission from "../Interfaces/IMission"

interface MissionProps {
    mission: IMission
}

export default function Mission({mission} : MissionProps) {
    const mutation = useMutation({
        mutationFn: ({id}: {id: number}) => (
            fetch("http://127.0.0.1:3000/user/updatemission", {
                method: "POST",
                body: JSON.stringify({id: id}),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
        ),
    })
    return (
        <>
            <div className="flex items-center">
                <input className="w-8 h-8" type="checkbox" defaultChecked={mission.finished} onClick={() => {
                    mutation.mutate({
                        id: mission.id
                    })
                }}/>
                <p className="text-xl font-semibold ml-4">{mission.name}</p>

                <p className="ml-auto mx-2">Remove</p>
            </div>

        </>
    )
}