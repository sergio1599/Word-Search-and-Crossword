import styles from './footer.module.css';

const Footer = ({}) => {
  return (<div className={styles.footer}>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong> Parcial TGS </strong> por <a href="https://github.com/sergio1599/"> Sergio
          Quintana </a> Estudiante de Ingeniería de Sistemas de Sexto Semestre de la UPTC -
          Seccional
          Sogamoso.
        </p>
      </div>
    </footer>
  </div>);
};

export default Footer;
