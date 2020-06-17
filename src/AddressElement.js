import React, {useState} from 'react';
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

function AddressElement(props) {


    const [editCityMode, setCityEditMode] = useState(false);
    const [editStreetMode, setStreetEditMode] = useState(false);
    const [editSuitMode, setSuitEditMode] = useState(false);
    const [editZipcodeMode, setZipcodeEditMode] = useState(false);


    const [elementEdit, setElementEdit] = useState(props.address)



    const changeCity = (e) => {
        setElementEdit({...elementEdit, city: e.target.value});

    }
    const changeStreet = (e) => {
        setElementEdit({...elementEdit, street: e.target.value});

    }
    const changeSuite = (e) => {
        setElementEdit({...elementEdit, suite: e.target.value});

    }
    const changeZipcode = (e) => {
        setElementEdit({...elementEdit, zipcode: e.target.value});

    }

    const onSaveClicked = () => {
        props.saveValue(elementEdit, props.id);


        setCityEditMode(false);
        setStreetEditMode(false)
        setSuitEditMode(false);
        setZipcodeEditMode(false);




    }

    return (
        <div>


            <label><b>City:</b></label>
            {
                editCityMode ?
                <input type="text" className="form-control" id="cityInput1" autoFocus={true}
                       value={elementEdit.city} onChange={changeCity}
                       onBlur={onSaveClicked}/>
                : <div onDoubleClick={()=>{setCityEditMode(true)}}>{props.address.city}</div>
            }
            <label><b>Street:</b></label>
            {
                editStreetMode ?
                    <input type="text" className="form-control" id="StreetInput1" autoFocus={true}
                           value={elementEdit.street} onChange={changeStreet}
                           onBlur={onSaveClicked}/>
                    : <div onDoubleClick={()=>{setStreetEditMode(true)}}>{props.address.street}</div>
            }
            <label><b>Suite:</b></label>
            {
                editSuitMode ?
                    <input type="text" className="form-control" id="SuitInput1" autoFocus={true}
                           value={elementEdit.suite} onChange={changeSuite}
                           onBlur={onSaveClicked}/>
                    : <div onDoubleClick={()=>{setSuitEditMode(true)}}>{props.address.suite}</div>
            }
            <label><b>Zipcode:</b></label>
            {
                editZipcodeMode ?
                    <input type="text" className="form-control" id="zipcodeInput1" autoFocus={true}
                           value={elementEdit.zipcode} onChange={changeZipcode}
                           onBlur={onSaveClicked}/>
                    : <div onDoubleClick={()=>{setZipcodeEditMode(true)}}>{props.address.zipcode}</div>
            }


        </div>
    );
}

export default AddressElement;
