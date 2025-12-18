import { signOut } from "@/auth"

const SignOut = () => {
    async function handleSignout(){
        "use server"
        await signOut();
    }
    return (
        <button onClick={handleSignout} className="bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-md cursor-pointer">Signout</button>
    )
}

export default SignOut