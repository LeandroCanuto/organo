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
    

    return(
        
        <section className="Formulario">
            <form>
                <br></br>
                <h2>Preencha seus dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"/>
                <ListaSuspensa label='Time' itens ={times}/>
                <Botao texto="Criar Card"  />
                
            </form>
        </section>
    )


}

export default Formulario