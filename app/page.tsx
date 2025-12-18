import Image from "next/image";
import SignIn from "./components/sign-in";
import { auth, signOut } from "@/auth";
import SignOut from "./components/sign-out";

export default async function Home() {
  const session = await auth();
  if(!session){
    return <SignIn/>
  }
  return (
  <div className="flex items-center justify-center min-h-screen flex-col gap-3">
    Logged in as {session.user?.name}
    <SignOut/>
  </div> 
  );
}
