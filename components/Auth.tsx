import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

export default function Auth() {
    const [user] = useAuthState(auth);

    return (
        <div className="flex flex-col items-center space-y-4">
            {user ? (
                <>
                    <p>Welcome, <strong>{user.displayName}</strong>!</p>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={() => signOut(auth)}
                    >
                        Logout
                    </button>

                    {/* Live Streaming Button */}
                    <Link href="/live">
                        <button className="px-4 py-2 bg-green-500 text-white rounded">
                            Go Live
                        </button>
                    </Link>
                </>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => signInWithPopup(auth, googleProvider)}
                >
                    Login with Google
                </button>
            )}
        </div>
    );
}
