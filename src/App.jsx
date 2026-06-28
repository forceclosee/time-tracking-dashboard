import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="inline-full max-inline-[69.5rem] grid mx-auto">
        <h1 className="sr-only">Time tracking dashboard</h1>
        <ProfileCard />
      </main>
      <Footer />
    </>
  );
}
