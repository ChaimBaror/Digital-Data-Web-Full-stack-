import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/index'

import { DataGrid, ValueGetterParams } from '@material-ui/data-grid';
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
    ]


    const classes = useStyles();

    return (
        <div>
            {rows ? (<div className={classes.table} style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} />
            </div>) : <Spinner />}
        </div>
    )

}

export default Showing;
