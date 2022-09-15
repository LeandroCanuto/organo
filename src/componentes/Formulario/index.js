import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times =[
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'

    ]

    return(
        <section className="Formulario">
            <form>
                <br></br>
                <h2>Vamos nos conhecer! Preencha com seus dados:</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem"/>
                <ListaSuspensa itens ={times}/>
            </form>
        </section>
    )


}

export default Formulario