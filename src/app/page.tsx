import Link from "next/link";

export default function HomePage() {
    return (
        <main className="bg-base p-4 h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">PDF Quotes</h1>
            <p className="text-lg">
                A PDF quote generator for developers.
            </p>
        </main>
    );
}
