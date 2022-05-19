import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    // console.log(user.email);
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;