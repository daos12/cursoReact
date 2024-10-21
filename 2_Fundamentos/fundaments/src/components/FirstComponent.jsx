// Arquivos de estilos

import MyComponent from "./MyComponent"; {/* Hierarquia de componentes*/}

//essa função faz isso...
const FirstComponent = () => {
    return(
        <div>
        {/*        
            Algum comentario em varias linhas
        */}

            <h1>Meu Primeiro Componente! </h1>

            
            <MyComponent/> {/* Hierarquia de componentes*/}
        </div>
    );
};

export default FirstComponent;
