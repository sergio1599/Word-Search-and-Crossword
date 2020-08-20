import styles from './footer.module.css';

const Footer = ({}) => {
  return (<div className={styles.footer}>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href="/information"> Parcial TGS </a> por <a href="https://github.com/sergio1599/" className={styles.colorText}> Sergio
          Quintana </a> Estudiante de Ingeniería de Sistemas de Sexto Semestre de la UPTC -
          Seccional
          Sogamoso.
          <br></br>
          <a href="https://www.facebook.com/SergioAlejandro1599"> <img src='/icons/facebook.png' width="30" height="30"></img></a>
          <a href="https://www.instagram.com/s_alejandro_15/"> <img src='/icons/instagram.png' width="30" height="30"></img></a>
          <a href="https://github.com/sergio1599"> <img src='/icons/github.png' width="30" height="30"></img></a> 
          <br></br>
          © 2020 Sergio Quintana.
        </p>
        
      </div>
    </footer>
  </div>);
};

export default Footer;
