import Link from "next/link";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopBar() {
    return (
        <header className="bg-overlay p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-16">
            <h1 className="text-2xl font-bold">PDF Quotes</h1>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}
