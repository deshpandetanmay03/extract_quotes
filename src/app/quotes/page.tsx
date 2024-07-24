export default function QuotesPage() {
    return (
        <main className="bg-base p-4 h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold">Quotes</h1>
            <p className="text-lg">
                A PDF quote generator for developers.
            </p>
            <p className="text-lg">
                Upload a PDF and get a random quote from it.
            </p>
        </main>
    );
}
