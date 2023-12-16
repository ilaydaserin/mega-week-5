import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import './Introduction.css';

function Introduction() {
  library.add(faInstagram, faGithub, faLinkedin, faCode);
    return (
      <>
        <header>
        <div className="navbar">
            <h1 className="brand">
                <span className="logo"><FontAwesomeIcon icon={faCode} /></span>
            </h1>
            <nav>
                <ul className="nav">
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Hakkımda</a></li>
                <li><a href="#">Projeler</a></li>
                <li><a href="#">Beceriler</a></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
        </header>

        <div className="intro">
          <div className="intro-header"><h1>ZEHRA İLAYDA SERİN</h1></div>
        <div className="animation">
            <div className="first"><div>Frontend Developer</div></div>
            <div className="second"><div>Mobile Programmer</div></div>
            <div className="third"><div>Systems Engineer</div></div>
        </div>
        <p> Sanal dünyada kendi izlerimi bıraktığım, teknolojiye olan sevdamı paylaştığım bu dijital köşeye hoş geldiniz. Ben Zehra İlayda Serin. Bir bilgisayar mühendisliği öğrencisi olarak duyduğum ilgi ve edindiğim bilgiyi sizinle tanışmaktan memnuniyet duyarım.
        Projelerimi ve yazılarımı inceleyerek, benimle ilgili daha fazla bilgi edinebilir, sosyal medya hesaplarımdan benimle iletişime geçebilirsiniz. Her biri birer benliğin ifadesi olan kod satırlarında, teknolojinin büyüsüne birlikte tanıklık etmek dileğiyle...</p>
        </div>        
      </>
    )
  }

  export default Introduction