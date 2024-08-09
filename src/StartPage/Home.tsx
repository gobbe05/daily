import IMission from "../Interfaces/IMission"
import Mission from "./Mission"
import NewMission from "./NewMission"
import { useQuery } from "@tanstack/react-query"

function Home() {
    const {isPending, error, data} = useQuery({
        queryKey: ["missions"],
        queryFn: () => 
            fetch("http://127.0.0.1:3000/user/getmissions").then((res) => 
                res.json()    
            )
        
    })
    if (isPending) return "Loading..."
    else if (error) return "An error has occured: " + error.message 
    else return (
        <>
            <div>
                <h1>Daily</h1>
                <p>By Gabriel Raskov</p>
            </div>
            <p>Small improvements day by day</p>
            {data.missions && data.missions.map((m: IMission) => ( 
                <Mission key={m.id} mission={m} />
            ))}
            <NewMission />
        </>
    )
}

export default Home