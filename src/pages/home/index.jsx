import './index.scss'
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';


export default function Home() {

  return (

    <div className="pagina-home">

      <Cabecalho />

      <div className='conteiner'>

        <div className="cont1">

          <h1>CMD IA Corporation</h1>

          <p>Encontre as últimas tendências em moda e estilo aqui. Explore nossa coleção de roupas para todas as ocasiões e estilos. Compre agora e atualize seu guarda-roupa com peças incríveis!</p>

          <div>

            <Link className='btn-comecar' to="/cmdia">Saiba mais sobre a CMD IA</Link>

          </div>

        </div>

          <img src="../../assets/images/img-logo.png" alt="" />

      </div>

    </div>

  );

}