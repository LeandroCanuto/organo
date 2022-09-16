import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'



const Formulario = () => {

    const times =[
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão']
    
const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi enviado')
    
}

    return(
        
        <section className="Formulario">
            <form onSubmit={(aoSalvar)}>
                <br></br>
                <h2>Preencha seus dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true}/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
                <ListaSuspensa label='Time' itens ={times} obrigatorio={true}/>
                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    )


}

export default Formulario