import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import Element from "./Element";
import AddressElement from "./AddressElement";
import CompanyElement from "./CompanyElement";
import AddUser from "./AddUser";

function App() {
    const [users, setUsers] = useState([]);
    const [editingMode, setEditingMode] = useState(false)
    const load = () => {
        setEditingMode(false);
        console.log('load');
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => {
        //     setUsers(json);
        //     });
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
            responseType: 'stream'
        })
            .then(function (response) {
                console.log(response);
                setUsers(response.data);
            });
    };

    const onAddUser = ()=>{
        setEditingMode(true);
    }

    const saveName = (value, id) => {
        console.log("onChange launched", value, id);
        const updatedUsers = users.map(el => {
            if (el.id === id) return {...el, name: value};
            else return el;
        });
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("onChange finished");

    }
    const saveUserName = (value, id) => {
        console.log("onChange launched", value, id);
        const updatedUsers = users.map(el => {
            if (el.id === id) return {...el, username: value};
            else return el;
        });
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("onChange finished");

    }
    const saveEmail = (value, id) => {
        console.log("onChange launched", value, id);
        const updatedUsers = users.map(el => {
            if (el.id === id) return {...el, email: value};
            else return el;
        });
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("onChange finished");

    }

    const savePhone = (value, id) => {
        console.log("onChange launched", value, id);
        const updatedUsers = users.map(el => {
            if (el.id === id) return {...el, phone: value};
            else return el;
        });
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("onChange finished");

    }
    const saveWebsite
        = (value, id) => {
        console.log("onChange launched", value, id);
        const updatedUsers = users.map(el => {
            if (el.id === id) return {...el, website: value};
            else return el;
        });
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("onChange finished");

    }

    const saveAddress
        = (elAddress, id) => {
        console.log("saveAddress launched", elAddress, id);

        const updatedUsers = users.map(el => {
            // if (el.id === id) return {...el, ...el.address, city: elAddress.city, street: elAddress.street, suite: elAddress.suite, zipcode: elAddress.zipcode};
            if (el.id === id) { return {...el, address:elAddress}
            console.log(el)
            }
                else return el;
            }
        );
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("saveAddress finished");

    }
    const saveCompany = (elCompany, id)=>{
        const updatedUsers = users.map(el => {
            if(el.id === id){return {... el, company: elCompany}}
            else return el;

        });
        setUsers(updatedUsers);

    }
    const canceAddUser = ()=>{
        setEditingMode(false);
    }

    const addUser = (el)=>{
        const updatedUsers = [... users];
        updatedUsers.push(el)
        setUsers(updatedUsers);
        setEditingMode(false);

    }
    const maxID = ()=>{
        let max = 0;
        users.map(el=> { if(el.id > max) max = el.id});
        return max;
    }
    const onCheck = (id)=>{
        console.log('onCheck launched with is = ' + id);
        const updatedUsers = users.map(el=>{
            if(el.id === id) {
                if(el.checked === true){return{...el, checked: false}}
                else{return{...el, checked: true}}
            }
            else {
                if(el.checked === undefined){return{...el, checked: false}}
                else return el;
            }

        });
        setUsers(updatedUsers);

    }
    const removeAllChecked =()=>{
        const updatedUsers = users.filter(el=> el.checked !== true);
        setUsers(updatedUsers);
    }
    return (
        <div>
            <h1>Users</h1>
            {users.length <= 0 ?<button className="btn btn-primary m-1" onClick={load}>Load Users</button>
                :<><button className="btn btn-primary m-1" onClick={load}>Reload Users</button>
                    <button className="btn btn-primary m-1" onClick={removeAllChecked}>Remove All Checked</button>
                {!editingMode? <button className="btn btn-primary m-1" onClick={onAddUser}>Add User</button>
                :<></>}
                </>
            }
            {users.length > 0 ?
                <div>
                    <table className="table table table-hover table-bordered table-striped">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company</th>
                        </tr>
                        </thead>
                        <tbody className="text-body">
                        {editingMode?<AddUser id={maxID()+1} addUser={addUser} canceAddUser={canceAddUser}/>:<></>}
                        {users.map(el =>
                            <tr>
                                <td>{el.id}<input type="checkbox" onClick={()=>onCheck(el.id)} checked={el.checked === true}/></td>
                                <td><Element value={el.name} id={el.id} saveValue={saveName}/></td>
                                <td><Element value={el.username} id={el.id} saveValue={saveUserName}/></td>
                                <td><Element value={el.email} id={el.id} saveValue={saveEmail}/></td>
                                <td><AddressElement address={el.address} id={el.id} saveValue={saveAddress}/></td>
                                <td><Element value={el.phone} id={el.id} saveValue={savePhone}/></td>
                                <td><Element value={el.website} id={el.id} saveValue={saveWebsite}/></td>
                                <td><CompanyElement company={el.company}  id={el.id} saveValue={saveCompany}/></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                : <></>
            }

        </div>
    );
}

export default App;
