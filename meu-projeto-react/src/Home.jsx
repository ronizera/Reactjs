import {useRef, useState} from 'react'
import {v4} from 'uuid'
import { AddButton, Container } from './styles'


//React Hooks
//useRef
//useState / estado-> É uma variavel, que toda vez que troca de valor a tela ira recarregar




function Home() {
  let [produtos, setProdutos] = useState([])
  let inputRef = useRef()






  function cliqueiNoBotao(){
    console.log(v4())
    setProdutos([{id: v4(), nome: inputRef.current.value}])
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      
      {produtos.map((produto) =>(
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}>Deletar</button>
        </div>  
        ))}
       

      
      

      
    </Container>
  )
}

export default Home
