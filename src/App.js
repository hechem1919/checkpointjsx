import logo from './logo.svg';
import './App.css';
import'./style.css';
import srcImage from "./imgsrc/Asce.jpg";

function App() {
  return (
    <div className="App">
    <center>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className='title red'>Hechem Ben Ahmed</h1>
    <br/>
    <img src={srcImage}  alt="" width="320"/>
    <img src="/imgpu/loffy.jpg"  alt="" width="320"/>
      <video width="320" height="240" controls>
        <source src="One Piece - Believer.mp4" type="video/mp4" />
      </video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bMV564i8dRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
  </div>
 </center>
  </div>
);
}
export default App;
