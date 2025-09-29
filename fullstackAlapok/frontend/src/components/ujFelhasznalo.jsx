const ujFelhasznalo = async (event) => {
        event.preventDefault();
        if (!name || !email) {
            alert("A név és az email megadása kötelező!");
            return;
        }
        try {
            await axios.post('http://localhost:3001/api/users', { name, email });
            fetchData(); // Frissítés
            setName('');
            setEmail('');
        } catch (err) {
            console.error('Hiba az adatok küldésekor:', err);
            setError("Hiba történt a felhasználó hozzáadása közben.");
        }
};

export default ujFelhasznalo