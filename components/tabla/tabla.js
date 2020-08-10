import styles from './tabla.module.css';
import useSWR from 'swr';
import fetcher from "../../functions/fetcher";


const Tabla = () => {
    const {data} = useSWR('/api/wordsearch', fetcher);
    if (!data) {
        return <p>Cargando</p>;
    }
    return (<>
            <div className="table-container">
                <table className={"table is-bordered"} border={1}>
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