import './index.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Cabecalho() {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className='cabecalho'>

            <img src="../assets/images/img-logo.png" alt="" />

            <div className={`menu-icon ${menuAberto ? 'ativo' : ''}`} onClick={() => setMenuAberto(!menuAberto)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <header className={`head ${menuAberto ? 'ativo' : ''}`}>

                <NavLink className='links' to="/sobre">Sobre nós</NavLink>
                <NavLink className='links' to="/comunidade">Comunidade</NavLink>
                <NavLink className='links' to="/suporte">Suporte</NavLink>
                <NavLink className='links' to="/cmdia">Cmd IA</NavLink>
                <NavLink className='links' to="/botcmd">Teste Grátis</NavLink>

                <NavLink className='botao' to="/login">Adquira Já</NavLink>

            </header>

        </div>
    )
}