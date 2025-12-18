
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className="bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-md cursor-pointer" type="submit">Signin with GitHub</button>
    </form>
  )
} 