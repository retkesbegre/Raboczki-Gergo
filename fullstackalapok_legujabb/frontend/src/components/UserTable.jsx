import React from 'react';
import UserTableRow from './UserTableRow';

function UserTable({
    users,
    editingId,
    editedName,
    editedEmail,
    setEditedName,
    setEditedEmail,
    handleEditStart,
    handleUpdate,
    handleEditCancel,
    handleDelete,
    tableHeaderStyle,
    tableCellStyle,
    noUsersCellStyle,
    saveButtonStyle,
    cancelButtonStyle,
    editButtonStyle,
    deleteButtonStyle
}) {
    return (
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
                <tr>
                    <th style={tableHeaderStyle}>#ID</th>
                    <th style={tableHeaderStyle}>Név</th>
                    <th style={tableHeaderStyle}>Email</th>
                    <th style={tableHeaderStyle}>Regisztráció</th>
                    <th style={tableHeaderStyle}>Műveletek</th> 
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <UserTableRow
                            key={user.id}
                            user={user}
                            editingId={editingId}
                            editedName={editedName}
                            editedEmail={editedEmail}
                            setEditedName={setEditedName}
                            setEditedEmail={setEditedEmail}
                            handleEditStart={handleEditStart}
                            handleUpdate={handleUpdate}
                            handleEditCancel={handleEditCancel}
                            handleDelete={handleDelete}
                            tableCellStyle={tableCellStyle}
                            saveButtonStyle={saveButtonStyle}
                            cancelButtonStyle={cancelButtonStyle}
                            editButtonStyle={editButtonStyle}
                            deleteButtonStyle={deleteButtonStyle}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" style={noUsersCellStyle}>Nincsenek felhasználók az adatbázisban.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default UserTable;
