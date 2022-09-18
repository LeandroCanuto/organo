import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'





const Formulario = (props) => {

    

        const [ nome , setNome] = useState('')
        const [cargo , setCargo] = useState('')
        const [ imagem , setImagem] = useState('')
        const [ time , setTime] = useState('')
    
const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
   
   
    
}

    return(
        
        <section className="Formulario">
            <form onSubmit={(aoSalvar)}>
                <br></br>
                <h2>Preencha seus dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true}
                 />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem" 
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                     label="Time"
                     itens ={props.times} 
                     valor={time}
                     aoAlterado={valor => setTime(valor)}
                    
                 />
                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    )


}

export default Formulario