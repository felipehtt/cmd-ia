import './index.scss'
import { Link } from 'react-router-dom';


export default function Home() {

  return (

    <div className="pagina-home">

      <h1>Bem-Vindo ao CMD IA WebSite</h1>

      <ul>

          <li>
            <Link to='/sobre'>Sobre Nós</Link>
          </li>

          <li>
            <Link to='/contato'>Contato</Link>
          </li>

          <li>
            <Link to='/botCmd'>Bot Cmd</Link>
          </li>

          <li>
            <Link to='/Login'>Login</Link>
          </li>

        </ul>

    </div>

  );
  
}