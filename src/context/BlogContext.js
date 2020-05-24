import React,{useState} from 'react'

//usar o context para dados globais que todos os componentes vao acessar

//esse context é sobre manipular blog posts
//super generico vai prover tudo de imagem a qualquer outro recurso

const BlogContext = React.createContext()

//usamos o sistema de context para mover informacao dentro do nosso componente
// o provider vai manipular todos os dados alterar ,excluir ,salvar


export function BlogProvider({children}){  //é o componente pai de toda a aplicacao
    //no provedor devemos adicionar o estado e passar esses dados dentro de um obejeto
    const [blogPost,setBlogPost] = useState([])

// a funcao que seta o estado do useState completamente subistitui o estado passado com o novo estado  
//para que use o estado antigo especificamente dentro de uma arrai posso usar o operador spread com o valor do estado antigo
//o seter subistitue o valor 100% vai sempre criar um novo vetor aproveitando os dados do antigo

    function addBlogPost(title ,content){
        setBlogPost([...blogPost,{id:Math.floor(Math.random() * 9999).toString(), title:title,content:content}])
    }

    function deleteBlogPost(id){
        const newArray = blogPost.filter((post)=>{
            return post.id !== id
        })

        setBlogPost(newArray)

    }

  
 
//temos que passar um obejeto com os dados e a funcao que vai alterar o estado
    return <BlogContext.Provider value={{data:blogPost,addBlogPost,deleteBlogPost}}>
        {children}
    </BlogContext.Provider>

}


export default BlogContext


