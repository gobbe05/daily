import Profile from "./Profile";

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between bg-slate-700 text-yellow-200 py-4 px-8 rounded-md">
                <div>
                    <h1 className="text-5xl font-semibold">Daily</h1>
                    <p className="text-lg font-light ml-8 mt-1">By Gabriel Raskov</p>
                </div>
                <Profile username="username"/>
            </div>
        </>
    )
}