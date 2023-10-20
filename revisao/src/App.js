import './App.css';
import Imagem from './img/Miauu.jpg';
import NoticiaComponente from './componentes/Noticia';
function App() {
  return (
    <div className="App">
      <h1>Gato é preso e deixa recado para mulher que tacou o pau nele</h1>
      <NoticiaComponente
      titulo="Dona chica você me paga"
      imagem={Imagem}
      descricao="ele esta sobe custodia, até seu dono vir pagar a fiança e busca-lo"
      categoria="Aguarde mais informações"
      />
    </div>
  );
}

export default App;
