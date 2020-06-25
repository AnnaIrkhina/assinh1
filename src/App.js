import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import Element from "./Element";
import AddressElement from "./AddressElement";
import CompanyElement from "./CompanyElement";
import AddUser from "./AddUser";
import InfiniteScroll from 'react-infinite-scroller';

const filt = (<svg className="bi bi-filter" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
          d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>)


function App() {
    const [users, setUsers] = useState([]);
    const [addingMode, setAddingMode] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState({})

    const [list, setList] = useState(users);


    const load = () => {
        setIsLoading(true);
        //setUsers([]);
        setAddingMode(false);
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
                setUsers([...users, ...response.data]);
                setList([...list, ...response.data]);
                setIsLoading(false);
            });
    };

    const onAddUser = () => {
        setAddingMode(true);
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
                if (el.id === id) {
                    return {...el, address: elAddress}
                    console.log(el)
                } else return el;
            }
        );
        setUsers(updatedUsers);
        console.log(updatedUsers);
        console.log("saveAddress finished");

    }
    const saveCompany = (elCompany, id) => {
        const updatedUsers = users.map(el => {
            if (el.id === id) {
                return {...el, company: elCompany}
            } else return el;

        });
        setUsers(updatedUsers);

    }
    const canceAddUser = () => {
        setAddingMode(false);
    }

    const addUser = (el) => {
        const updatedUsers = [...users];
        updatedUsers.push(el)
        setUsers(updatedUsers);
        setAddingMode(false);

    }
    const maxID = () => {
        let max = 0;
        users.map(el => {
            if (el.id > max) max = el.id
        });
        return max;
    }
    const onCheck = (id) => {
        console.log('onCheck launched with is = ' + id);
        const updatedUsers = users.map(el => {
            if (el.id === id) {
                if (el.checked === true) {
                    return {...el, checked: false}
                } else {
                    return {...el, checked: true}
                }
            } else {
                if (el.checked === undefined) {
                    return {...el, checked: false}
                } else return el;
            }

        });
        setUsers(updatedUsers);

    }
    const removeAllChecked = () => {
        const updatedUsers = users.filter(el => el.checked !== true);
        setUsers(updatedUsers);
        //setInitalUsers(updatedUsers);
    }

    const filterChange = (e, fild) => {
        const newFilter = {...filter}
        newFilter[fild] = e.target.value
        setFilter(newFilter)
        console.log(newFilter);
        console.log(users);
        console.log(Object.keys(newFilter));
        let updatedUsers = []
        //setUsers(initialUsers);
        Object.keys(newFilter).map(filt => {
            updatedUsers = users.filter(el => {
                console.log(el[filt].toLowerCase().includes(newFilter[filt].toLowerCase()))
                return (el[filt].toLowerCase().includes(newFilter[filt].toLowerCase()))
            })
        })
        setList(updatedUsers)

        console.log(updatedUsers);

    }
    return (
        // <div style="height:700px;overflow:auto;">
        //     <InfiniteScroll
        //         pageStart={0}
        //         loadMore={loadFunc}
        //         hasMore={true || false}
        //         loader={<div className="loader" key={0}>Loading ...</div>}
        //         useWindow={false}
        //     >
        //         {items}
        //     </InfiniteScroll>
        // </div>
        <div >
            <InfiniteScroll
                pageStart={0}
                loadMore={load}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={true}
                threshold = {250}

            >
                <h1>Users</h1>
                {isLoading ?
                    <button className="btn btn-primary m-1" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    :
                    <>
                        <button className="btn btn-primary m-1" onClick={load}>Reload Users</button>

                        <button className="btn btn-primary m-1" onClick={removeAllChecked}
                                hidden={users.length <= 0}>Remove
                            All Checked
                        </button>
                        {!addingMode ?
                            <button className="btn btn-primary m-1" onClick={onAddUser} hidden={users.length <= 0}>Add
                                User</button>
                            : <></>}
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
                            <tr>
                                <th></th>
                                <th><input type="text" className="form-control" id="filterName" onChange={(e) => {
                                    filterChange(e, 'name')
                                }}/>{filt}</th>
                                <th><input type="text" className="form-control" id="filterUsername" onChange={(e) => {
                                    filterChange(e, 'username')
                                }}/>{filt}</th>
                                <th><input type="text" className="form-control" id="filterEmail" onChange={(e) => {
                                    filterChange(e, 'email')
                                }}/>{filt}</th>
                                <th><input type="text" className="form-control" id="filterAddress"/>{filt}</th>
                                <th><input type="text" className="form-control" id="filterPhone" onChange={(e) => {
                                    filterChange(e, 'phone')
                                }}/>{filt}</th>
                                <th><input type="text" className="form-control" id="filterWebsite" onChange={(e) => {
                                    filterChange(e, 'website')
                                }}/>{filt}</th>
                                <th><input type="text" className="form-control" id="FilterCompany"/>{filt}</th>

                            </tr>
                            </thead>
                            <tbody className="text-body">
                            {addingMode ?
                                <AddUser id={maxID() + 1} addUser={addUser} canceAddUser={canceAddUser}/> : <></>}
                            {list.map(el =>
                                <tr>
                                    <td>{el.id}<input type="checkbox" onClick={() => onCheck(el.id)}
                                                      checked={el.checked === true}/></td>
                                    <td><Element
                                        value={el.name} id={el.id} saveValue={saveName}/></td>
                                    <td><Element
                                        value={el.username} id={el.id} saveValue={saveUserName}/></td>
                                    <td><Element value={el.email}
                                                 id={el.id} saveValue={saveEmail}/></td>
                                    <td><AddressElement
                                        address={el.address} id={el.id} saveValue={saveAddress}/></td>
                                    <td><Element value={el.phone}
                                                 id={el.id} saveValue={savePhone}/></td>
                                    <td><Element
                                        value={el.website} id={el.id} saveValue={saveWebsite}/></td>
                                    <td><CompanyElement
                                        company={el.company} id={el.id} saveValue={saveCompany}/></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    : <></>
                }
            </InfiniteScroll>
        </div>
    );
}

export default App;
