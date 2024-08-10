import { FiUser } from "react-icons/fi";

interface ProfileProps {
    username: string
}

export default function Profile({username} : ProfileProps) {
    return (
        <div className="flex flex-col items-center">
            <FiUser size={24} />
            <p>{username}</p>
        </div>
    )
}