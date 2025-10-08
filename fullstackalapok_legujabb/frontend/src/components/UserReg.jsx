import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserTable from './UserTable';
import './App.css';

function UserReg() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editingId, setEditingId] = useState(null); 
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/users');
            setUsers(response.data);
            setError(null);
        } catch (err) {
            setError("Nem sikerült betölteni az adatokat.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email) return alert("A név és email kötelező!");
        try {
            await axios.post('http://localhost:3001/api/users', { name, email });
            fetchData();
            setName('');
            setEmail('');
        } catch {
            setError("Hiba történt a hozzáadáskor.");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm(`Biztosan törlöd a(z) ${id} ID-jű felhasználót?`)) return;
        try {
            await axios.delete(`http://localhost:3001/api/users/${id}`);
            fetchData();
        } catch {
            setError("Nem sikerült törölni.");
        }
    };

    const handleEditStart = (user) => {
        setEditingId(user.id);
        setEditedName(user.name);
        setEditedEmail(user.email);
    };

    const handleUpdate = async (id) => {
        if (!editedName || !editedEmail) return alert("A név és email kötelező!");
        try {
            await axios.patch(`http://localhost:3001/api/users/${id}`, {
                name: editedName,
                email: editedEmail,
            });
            setEditingId(null);
            fetchData();
        } catch {
            setError("Nem sikerült módosítani.");
        }
    };

    const handleEditCancel = () => setEditingId(null);

    // Stílusok
    const tableHeaderStyle = { border: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' };
    const tableCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'left' };
    const noUsersCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'center' };
    const saveButtonStyle = { padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
    const cancelButtonStyle = { padding: '5px', backgroundColor: '#9E9E9E', color: 'white', border: 'none', cursor: 'pointer' };
    const editButtonStyle = { padding: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
    const deleteButtonStyle = { padding: '5px', backgroundColor: '#F44336', color: 'white', border: 'none', cursor: 'pointer' };

    // Render
    if (loading) return <div className="App"><p>Adatok betöltése...</p></div>;
    if (error) return <div className="App"><p style={{ color: 'red' }}>{error}</p></div>;

    return (
        <div className="App">
            <h1>Felhasználókezelő (Full-Stack CRUD)</h1>

            <UserForm
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            />

            <hr />

            <h2>Felhasználók Listája</h2>

            <UserTable
                users={users}
                editingId={editingId}
                editedName={editedName}
                editedEmail={editedEmail}
                setEditedName={setEditedName}
                setEditedEmail={setEditedEmail}
                handleEditStart={handleEditStart}
                handleUpdate={handleUpdate}
                handleEditCancel={handleEditCancel}
                handleDelete={handleDelete}
                tableHeaderStyle={tableHeaderStyle}
                tableCellStyle={tableCellStyle}
                noUsersCellStyle={noUsersCellStyle}
                saveButtonStyle={saveButtonStyle}
                cancelButtonStyle={cancelButtonStyle}
                editButtonStyle={editButtonStyle}
                deleteButtonStyle={deleteButtonStyle}
            />
        </div>
    );
}

export default UserReg;
