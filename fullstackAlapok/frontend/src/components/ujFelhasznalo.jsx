// fájlnév: ujFelhasznalo.js
import axios from 'axios';

const ujFelhasznalo = async ({ name, email, setUsers, setLoading, setError }) => {
    setLoading(true);
    try {
        await axios.post('http://localhost:3001/api/users', { name, email });
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
        setError(null);
    } catch (err) {
        console.error("Hiba a hozzáadáskor:", err);
        setError("Nem sikerült hozzáadni a felhasználót.");
    } finally {
        setLoading(false);
    }
};

export default ujFelhasznalo;
