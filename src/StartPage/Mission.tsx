import { useMutation } from "@tanstack/react-query"
import IMission from "../Interfaces/IMission"
import { FiCheck, FiTrash2 } from "react-icons/fi"
import { queryClient } from "../App"

interface MissionProps {
    mission: IMission
}

export default function Mission({mission} : MissionProps) {
    const updateMutation = useMutation({
        mutationFn: ({id}: {id: number}) => (
            fetch("http://192.168.68.113:3000/user/updatemission", {
                method: "POST",
                body: JSON.stringify({id: id}),
                credentials: "include",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["missions"]})
        }
    })
    const deleteMutation = useMutation({
        mutationFn: ({id} : {id: number}) => (
            fetch("http://192.168.68.113:3000/user/removemission", {
                method: "POST",
                body: JSON.stringify({id: id}),
                credentials: "include",
                headers: {
                    "Content-Type" : "application/json"
                }
            })
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["missions"]})
        }
    })

    return (
        <>
            <div className={`flex items-center p-2 rounded-md ${mission.finished ? "bg-yellow-200 text-slate-700" : "bg-slate-700 text-yellow-200"} transition-all`} onClick={() => {
                    updateMutation.mutate({
                        id: mission.id
                    })
                }}>
                <div className={`pl-2 ${mission.finished ? "" : "hidden"}`}>
                    <FiCheck size={36} />
                </div>
                <p className="text-xl font-semibold ml-2">{mission.name}</p>
                <p className="ml-auto p-2 mx-2 rounded-full bg-slate-700 hover:bg-red-400 text-white cursor-pointer" onClick={() => {
                    deleteMutation.mutate({
                        id: mission.id
                    })
                }}><FiTrash2 size={24} /></p>
            </div>

        </>
    )
}