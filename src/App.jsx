import TrackerDashboard from "./components/TrackerDashboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="block-max inline-full max-inline-[69.5rem] grid grid-cols-[repeat(1,_auto)] gap-6 mx-auto">
        <h1 className="sr-only">Time tracking dashboard</h1>
        <TrackerDashboard />
      </main>
      <Footer />
    </>
  );
}
