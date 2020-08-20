import styles from '@styles/Home.module.css';
import Titulo from '@components/titulo/titulo';
import Boton from '@components/boton/boton';
import Image from '@components/image/image';
import Footer from '@components/footer/footer';

export default function Home(props) {

    // console.log(props);

    return (
        <div className={'is-block-desktop-only is-inline-touch'}>
            <div className={styles.container}>
                <head>
                    <title>Teoría General de Sistemas</title>
                    <link rel="icon" href="/icons/crossword.png/" />
                    <link rel={'stylesheet'} type={'text/css'}
                        href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'} />
                    <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap"
                        rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
                        rel="stylesheet" />
                </head>
                <div className="column is-half">
                    <Titulo titulo={'¿QUÉ ES LA TEORÍA GENERAL DE SISTEMAS?'} />
                    <br></br>
                    <p>La teoría de sistemas o teoría general de los sistemas es el estudio interdisciplinario de los sistemas en general. Su propósito es estudiar los principios aplicables a los sistemas en cualquier nivel en todos los campos de la investigación.</p>
                    <br></br>
                    <p>En 1950 Ludwig von Bertalanffy planteó la teoría general de sistemas propiamente dicha. Posteriormente, en la década de los setenta, Humberto Maturana desarrolló el concepto de autopoiesis, el que da cuenta de la organización de los sistemas vivos
                    como redes cerradas de autoproducción de los componentes que las constituyen. W. Ross Ashby y Norbert Wiener desarrollaron la teoría matemática de la comunicación y control de sistemas a través de la regulación de la retroalimentación (cibernética),
                    que se encuentra estrechamente relacionada con la teoría de control. En la misma década, René Thom y E.C. Zeeman plantearon la teoría de las catástrofes, rama de las matemáticas de acuerdo con bifurcaciones en sistemas dinámicos que clasifica los fenómenos
                        caracterizados por súbitos desplazamientos en su conducta.</p>
                    <br></br>
                    <Image source={'/images/ludwig.jpg'} link={'/lettersoup'} />
                    <br></br>
                    <p>En 1980 David Ruelle, Edward Lorenz, Mitchell Feigenbaum, Steve Smale y James A. Yorke describieron la teoría del caos, una teoría matemática de sistemas dinámicos no lineales que describe bifurcaciones, extrañas atracciones y movimientos caóticos. John H. Holland,
                    Murray Gell-Mann, Harold Morowitz, W. Brian Arthur y otros 90 plantean el sistema adaptativo complejo (CAS), una nueva ciencia de la complejidad que describe surgimiento, adaptación y auto-organización. Fue establecida fundamentalmente por investigadores
                        del Instituto de Santa Fe y está basada en simulaciones informáticas. Incluye sistemas de multiagente que han llegado a ser una herramienta importante en el estudio de los sistemas sociales y complejos. Todavía es un campo de investigación activo.</p>
                        La TGS surge en el siglo XX como un nuevo esfuerzo en la búsqueda de conceptos y leyes válidos para la descripción e interpretación de toda clase de sistemas reales o físicos.
                        <br></br>
                    <br></br>
                        Aunque la TGS surgió en el campo de la Biología, pronto se vio su capacidad de inspirar desarrollos en disciplinas distintas y se apreció su influencia en la aparición de otras nuevas. Así se ha ido constituyendo el amplio campo de la sistémica o de las ciencias de los sistemas, con especialidades como la cibernética, la teoría de la información, la teoría de juegos, la teoría del caos o la teoría de las catástrofes. En algunas, como la última, ha seguido ocupando un lugar prominente la Biología.
                        <br></br>
                    <br></br>
                        El pasar de soluciones parciales para la resolución de problemas complejos, al enfoque de Sistemas Generales es análogo a cuando las empresas y organizaciones pasaron del enfoque de departamentos estancos al de procesos transversales, muchos más integradores.
                </div>
            </div>
            <div className={'hero-footer'}>
                <Footer />
            </div>
        </div>
    );

}
