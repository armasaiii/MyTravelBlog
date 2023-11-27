import "./styles.css";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer"
import Form from "./Components/Form/form";


export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      <Form/>

      <Footer />
      
    </div>
  );
}
