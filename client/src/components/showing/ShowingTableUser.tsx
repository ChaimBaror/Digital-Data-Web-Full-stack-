import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/index'
import Link from 'react-router-dom'

import { DataGrid, GridApi, ValueGetterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../Spinner/Spinner';

export interface user {
    id: string,
    name: string,
    age: string,
    email: string
}

const useStyles = makeStyles({
    table: {
        minWidth: 520,
    },
});
const Showing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllUsers())
    }, [])

    const globalState: any = useSelector(state => state);
    console.log("globalState");
    const rows: user[] = globalState.users;


    const columns = [
        { field: 'name', headerName: 'User Name', width: 200 },
        { field: 'age', headerName: 'Age', type: 'number', width: 120 },
        { field: 'email', headerName: 'EMAIL', width: 300 },
        { field: "",
            headerName: "Button",
            sortable: false,
            width: 120,
            disableClickEventBubbling: false,
            renderCell: (params: any) => {
              const onClick = () => {
                const api: GridApi = params.api;
                const fields = api
                  .getAllColumns()
                  .map((c) => c.field)
                  .filter((c) => c !== "__check__" && !!c);
                const thisRow :any= {};
                fields.forEach((f) => {
                  thisRow[f] = params.getValue(f);
                });
        
                return alert(JSON.stringify(thisRow, null, 4));
              };
        
              return <span onClick={onClick}>select</span>;
            }
        }

    ]

 
    const classes = useStyles();

    return (
        <div>
            {rows ? (<div className={classes.table} style={{ height: 400, width: '100%' }}>
                <DataGrid  rows={rows} columns={columns} pageSize={5} checkboxSelection  />
            </div>) : <Spinner />}
        </div>
    )

}

export default Showing;
