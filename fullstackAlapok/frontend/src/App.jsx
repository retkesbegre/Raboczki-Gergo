import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './Navbar.css';
import adatokLekerdezese from './components/adatokLekerdezese';
import torolFelhasznalo from './components/torolFelhasznalo';
import ujFelhasznalo from './components/ujFelhasznalo';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    const handleDelete = async (id) => {
        await torolFelhasznalo({ id, setUsers, setLoading, setError });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("A név és az email mező kitöltése kötelező!");
            return;
        }
        await ujFelhasznalo({ name, email, setUsers, setLoading, setError });
        setName('');
        setEmail('');
    };

    const handleUpdate = async (id) => {
        if (!editedName || !editedEmail) {
            alert("A név és az email mező kitöltése kötelező!");
            return;
        }

        try {
            await axios.patch(`http://localhost:3001/api/users/${id}`, {
                name: editedName,
                email: editedEmail,
            });
            setEditingId(null);
            adatokLekerdezese({ setUsers, setLoading, setError });
        } catch (err) {
            console.error("Hiba a módosításkor:", err);
            setError("Nem sikerült módosítani a felhasználót.");
        }
    };

    const handleEditCancel = () => {
        setEditingId(null);
    };

    
    

    if (loading) return <div className="App"><p>Adatok betöltése...</p></div>;
    if (error) return <div className="App"><p style={{ color: 'red' }}>{error}</p></div>;

    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-logo">CRUD App</div>
                <ul className="navbar-links">
                    <li><a href="#add">Hozzáadás</a></li>
                    <li><a href="#list">Lista</a></li>
                </ul>
            </nav>

            <h1>Felhasználókezelő (Full-Stack CRUD)</h1>

            <form id="add" onSubmit={handleSubmit} className="form-container">
                <h2>Új felhasználó hozzáadása</h2>
                <input
                    type="text"
                    placeholder="Név"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">Hozzádás</button>
            </form>

            <hr />

            <h2 id="list">Felhasználók Listája</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Név</th>
                        <th>Email</th>
                        <th>Regisztráció</th>
                        <th>Műveletek</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                {editingId === user.id ? (
                                    <>
                                        <td><input type="text" value={editedName} onChange={e => setEditedName(e.target.value)} /></td>
                                        <td><input type="email" value={editedEmail} onChange={e => setEditedEmail(e.target.value)} /></td>
                                    </>
                                ) : (
                                    <>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </>
                                )}
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                <td>
                                    {editingId === user.id ? (
                                        <>
                                            <button className="btn save" onClick={() => handleUpdate(user.id)}>Mentés</button>
                                            <button className="btn cancel" onClick={handleEditCancel}>Mégse</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn edit" onClick={() => handleEditStart(user)}>Szerkesztés</button>
                                            <button className="btn delete" onClick={() => handleDelete(user.id)}>Törlés</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="no-users">Nincsenek felhasználók az adatbázisban.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
