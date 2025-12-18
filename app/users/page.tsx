"use client"
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const MyProfile = () => {
    const { data: session, status } = useSession();
    const user = session?.user;
    const router = useRouter();
    useEffect(() => {
        if (status == "unauthenticated") {
            router.push('/')
        }
    }, [])
    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="p-4 border rounded shadow max-w-xs mx-auto text-center">
            <img
                src={user?.image ? user.image : "/favicon.ico"}
                alt={user?.name || ""}
                className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="mt-2 text-xl font-semibold">{user?.name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </div>

    )
}

export default MyProfile