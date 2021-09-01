import React from "react";

const UserTable = (props) => (
  <table className="table table-striped table-bordered table-sm table-*-responsive">
    <thead>
      <tr className="text-center">
        <th>Nom</th>
        <th>Prenoms</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ?(
            props.users.map((user) => (
            <tr key={user.id}>
                <td width="15%">{user.name}</td>
                <td width="*">{user.username}</td>
                <td width="40%">
                    <button className="m-2 btn btn-primary">Edit</button>
                    
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}> Aucune Donées</td>
            </tr>
        )}
    </tbody>
  </table>
);

export default UserTable;
