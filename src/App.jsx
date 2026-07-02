import TrackerDashboard from "./components/TrackerDashboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="text-gray-300">
        <h1 className="sr-only">Time tracking dashboard</h1>
        <TrackerDashboard />
      </main>
      <Footer />
    </>
  );
}
