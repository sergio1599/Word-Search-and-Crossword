import useSWR from 'swr';
import fetcher from "../../functions/fetcher";
import styles from "./tabla.module.css";


const Tabla = () => {
    const {data} = useSWR('/api/wordsearch', fetcher);
    if (!data) {
        return <p>Cargando sopa de letras </p>;
    }
    <script>
        const cursor = document.querySelector
    </script>
    return (<>
            <div className="table-container">
                <table className={"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"} border={1} >
                    <tbody>
                    {data.grid.map((row, i) => {
                        return <tr key={i}>{row.map((col, j) => {
                            return <td key={j}>{col}</td>
                        })}</tr>
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Tabla;