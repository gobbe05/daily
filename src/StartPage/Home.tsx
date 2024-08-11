import IMission from "../Interfaces/IMission"
import Header from "../Layout/Header/Header"
import Mission from "./Mission"
import NewMission from "./NewMission"
import { useQuery } from "@tanstack/react-query"

function Home() {
    const {isPending, error, data} = useQuery({
        queryKey: ["missions"],
        queryFn: () => 
            fetch("http://192.168.68.113:3000/user/getmissions", {credentials: "include"}).then((res) => 
                res.json()    
            )
        
    })
    if (isPending) return "Loading..."
    else if (error) return "An error has occured: " + error.message 
    else return (
        <div className="flex flex-col justify-between gap-8 text-gray-700 py-16 px-4 max-w-[640px] h-full mx-auto">
           <Header /> 
            <div className="flex flex-col h-3/4 gap-4 my-4">
                {data.missions && data.missions.map((m: IMission) => ( 
                    <Mission key={m.id} mission={m} />
                ))}
            </div>
            <NewMission />
        </div>
    )
}

export default Home
