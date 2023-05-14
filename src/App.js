
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      {/* <Navbar text='Anirudh' about="A very wonderful and great person"/> */}

      <div className="container">
        <TextForm heading='My text box for me'/>
      </div>

      
    </>
  );
}

export default App;
