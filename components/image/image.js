import styles from './image.module.css';

const Image = ({ source }) => {
  return (<div className={styles.image}>
      <img src={source}/>
    </div>
  );
};

export default Image;
