import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="px-3 container pb-12 mx-auto">Content</main>
      <Footer />
    </div>
  );
}

export default App;
