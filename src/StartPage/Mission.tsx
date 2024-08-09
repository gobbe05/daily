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
            <div>
                <p>{mission.name}</p>
                <input type="checkbox" defaultChecked={mission.finished} onClick={() => {
                    mutation.mutate({
                        id: mission.id
                    })
                }}/>
            </div>

        </>
    )
}