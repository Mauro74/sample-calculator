import Header from "./components/Header";
import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <Main />
        <Calculator />
        <Footer />
      </main>
    </>
  );
}

export default App;