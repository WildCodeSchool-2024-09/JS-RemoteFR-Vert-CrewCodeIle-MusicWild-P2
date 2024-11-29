import "./Footer.css";

import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footerClass">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Contributeurs</h4>
          <div className="contributors-columns">
            <div className="contributors-column">
              <p>
                <a
                  href="https://www.linkedin.com/in/christine-voinson-621478333/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Christine
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/romain-varra/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Romain
                </a>
              </p>
            </div>
            <div className="contributors-column">
              <p>
                <a
                  href="https://www.linkedin.com/in/c%C3%A9lio-mozes-rocha-827480333/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Célio
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/aur%C3%A9lien-haye-9a899841/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aurélien
                </a>
              </p>
            </div>
          </div>
          <h4 className="product">Produit</h4>
          <p>MusicWild</p>
        </div>
        <div className="footer-column">
          <h4>CGU</h4>
          <p>
            <a href="/cgu">Voir nos conditions</a>
          </p>
          <h4 className="contact-us">Nous contacter</h4>
          <p>
            <a href="/contact">Page contact</a>
          </p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>
            <FaHome /> Adresse : 123 Rue de la Musique, Paris
          </p>
          <p>
            <FaEnvelope /> Adresse mail : contact@musicwild.com
          </p>
          <p>
            <FaPhone /> Téléphone : +33 1 23 45 67 89
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© MusicWILD 2024</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
