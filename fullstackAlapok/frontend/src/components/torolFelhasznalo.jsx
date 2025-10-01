import axios from 'axios'

const torolFelhasznalo = async (id) => {
    if (!window.confirm(`Biztosan törölni szeretnéd a(z) ${id} ID-jű felhasználót?`)) {
        return;
    }
    try {
        await axios.delete(`http://localhost:3001/api/users/${id}`);
        fetchData();
    } catch (err) {
        console.error("Hiba a törléskor:", err);
        setError("Nem sikerült törölni a felhasználót.");
    }
};

export default torolFelhasznalo;

