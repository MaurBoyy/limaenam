import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Lokasi from "./components/Lokasi/Lokasi";
import Galeri from "./components/Galeri/Galeri";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Lokasi />
      <Galeri />
    </div>
  );
};

export default App;
