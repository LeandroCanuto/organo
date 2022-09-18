import './Rodape.css'


const Rodape = () => {

    return( 
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer" >
                        <img src="imagens/fb.png" alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt=""></img>
                        </a>
                    </li>
                    <li>
                         <a href="http://instagram.com" target="_blank" rel="noreferrer">
                         <img src="/imagens/instagram.png" alt="" />
                         </a>
                    </li>
                    </ul>    
                
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
        </footer>


    )



}

export default Rodape