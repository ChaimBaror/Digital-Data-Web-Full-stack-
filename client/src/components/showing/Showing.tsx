import React, { useEffect, useState } from 'react';
import { DataGrid, ValueGetterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import BaseHttpService from './../../api/inesx';
const axios = require('axios');

const api = new BaseHttpService()
export interface user {
    id?:string,
    name: string,
    age:string,
    email:string
}
interface props {
    data: []
}
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Showing = (props: props) => {
const [state, setstate] = useState([])
let newUser=[{}]
    useEffect(() => {
        axios.get('http://localhost:3001/user').then((resp:any) => {
             newUser = {...resp.data}
          console.log(newUser);
     });
    }, [])
    setstate({...state})

    const columns = [
        { field: 'id', width: 200 },
        { field: 'name', width: 200 },
        { field: 'age', width: 200 },
        { field: 'email', width: 200 },]

    const rows = state ;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>

    )

}

export default Showing;
