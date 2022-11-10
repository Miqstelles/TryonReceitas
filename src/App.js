import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Content2 from "./components/Content-2";
import Content3 from "./components/Content-3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-screen bg-brown-300 overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <div className="w-screen h-[350px] md:h-[500px] flex justify-center shadow-inner pt-[50px]">
        <Content />
      </div>
      <div className="w-screen h-[630px] flex justify-center bg-brown-500 shadow-inner pt-[50px]">
        <Content2 />
      </div>
      <div className="w-screen h-[600px] flex justify-center shadow-inner">
        <Content3 />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
