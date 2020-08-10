//permite hacer la petición al api, y recibe esa info en un componente de nextnpm i swr
const fetcher = async (...args) => {
    const request = await fetch(...args);
    return request.json();
}
export default fetcher;