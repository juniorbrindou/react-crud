import React, { useState } from 'react'

const AddUserForm = (props) => {
  return (
    <form className="form">
        <div className="form-control">
            <label>Name</label>
            <input type="text" name="name" value="" />

            </div>
        <div className="form-control">

            <label>Username</label>
          <input className="form-input" type="text" name="username" value="" />
          <button>Ajouter nouveau</button>
        </div>
    </form>
  )
}

export default AddUserForm