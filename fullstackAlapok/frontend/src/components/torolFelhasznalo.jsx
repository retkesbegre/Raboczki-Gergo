// fájlnév: torolFelhasznalo.js vagy ujFelhasznalo.js
import axios from 'axios';

const torolFelhasznalo = async ({ id, setUsers, setLoading, setError }) => {
    setLoading(true);
    try {
        await axios.delete(`http://localhost:3001/api/users/${id}`);
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
        setError(null);
    } catch (err) {
        console.error("Hiba a törléskor:", err);
        setError("Nem sikerült törölni a felhasználót.");
    } finally {
        setLoading(false);
    }
};

export default torolFelhasznalo;
