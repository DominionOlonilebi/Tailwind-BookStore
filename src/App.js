import "./App.css";
import Background from "./landing-page/Background";
import Cards from "./landing-page/Cards";
import FirstSegment from "./landing-page/FirstSegment";
import Footer from "./landing-page/Footer";
import Navbars from "./landing-page/Navbars";
import Newsletter from "./landing-page/Newsletter";

function App() {
  return (
    <div>
      <Navbars />
      <Background />
      <FirstSegment />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
