import '../App.css';

const NoticiaComponente =({titulo, imagem, descricao, categoria}) => {
    return(
        <div classname="noticia">
            <h2 classname="titulo-noticia">{titulo}</h2>
            <img src={imagem} />
            <p classname="descricao-noticia">{descricao}</p>
            <p classname="categoria-noticia">{categoria}</p>
           
            

        </div>
    );
}

export default NoticiaComponente;