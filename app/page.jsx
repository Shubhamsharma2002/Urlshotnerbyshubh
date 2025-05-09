import Fotter from "@/Components/Fotter";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-blue-600 text-center font-bold mt-6 text-3xl">
          url shortner coming soon
        </div>
      </main>

      <Fotter />
    </div>
  );
}
