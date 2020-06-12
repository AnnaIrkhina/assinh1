import React from 'react';
import './App.css';

const check = (<svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill-rule="evenodd"
          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>);

const cancel = (<svg className="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fill-rule="evenodd"
          d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd"
          d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>);

const editPen = (
    <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>
);

function AddUser(props) {

    const onChangeName = ()=>{
    }
    const onChangeUserName = ()=>{
    }
    const onchangeCity = ()=>{
    }
    const onchangeStreet = ()=>{
    }
    const onchangeSuite = ()=>{
    }
    const onchangeZipcode = ()=>{
    }
    const onChangeEmail = ()=>{
    }
    const onSaveClicked = ()=>{
    }
    const onCancelClicked = ()=>{

    }
    const onchangeCompanyName = ()=>{
    }
    const onchangeBS = ()=>{
    }
    const onchangeCatch = ()=>{
    }


    return (
        <tr>
            <td>{props.id}
                <div className="button_group">
                    <button className="btn btn-sm float-right" onClick={props.addUser}
                           >{check}</button>
                    <button className="btn btn-sm float-right" onClick={props.canceAddUser}>{cancel}</button>
                </div>
            </td>
            <td>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onChangeName} autoFocus="true"

                    />

                </div>
            </td>
            <td>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onChangeUserName} autoFocus="true"
                    />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onChangeEmail} autoFocus="true"

                    />

                </div>
            </td>
            <td>
                <div>

                    <label>City:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeCity} autoFocus="true"/>
                    <label>Street:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeStreet} autoFocus="true"/>
                    <label>Suite:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeSuite} autoFocus="true"/>
                    <label>Zipcode:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeZipcode} autoFocus="true"/>
                </div>
            </td>
            <td>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onChangeEmail} autoFocus="true"

                    />

                </div>
            </td>
            <td>
                <div className="form-group">
                    <label>Website:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onChangeEmail} autoFocus="true"

                    />

                </div>
            </td>
            <td>
                <div>

                    <label>Name:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeCompanyName} autoFocus="true"/>
                    <label>BS:</label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeBS} autoFocus="true"/>
                    <label>Catch Phrase: </label>
                    <input type="text" className="form-control" id="formControlInput1"
                           value={''} onChange={onchangeCatch} autoFocus="true"/>
                    </div>
            </td>

        </tr>


);
}

export default AddUser;