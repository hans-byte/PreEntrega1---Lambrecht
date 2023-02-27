import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"

function App (){
  return(
  <div>
    <NavBar />
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Autor</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <ItemListContainer title="Get A Life: A Roadmap to Rule the World" author = "Bob Fisch" price="24.99"/>
          </tr>
          <tr>
            <ItemListContainer title="Inteligencia Emocional: " author = "Fabian Coleman" price="17.95"/>
          </tr>
          <tr>
            <ItemListContainer title="Nunca Temas Negociar: 7 principios para obtener resultados" author = "Pablo M Linzoain" price="14.30"/>
          </tr>
      </tbody>
    </table>
  </div>
  );
}  

export default App;
