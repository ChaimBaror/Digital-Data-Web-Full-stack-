import React, { useEffect, useState } from 'react';
import { DataGrid, ValueGetterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

export interface user {
    id?: string,
    name: string,
    age: string,
    email: string
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

    const columns = [
        { field: 'id', width: 200 },
        { field: 'name', width: 200 },
        { field: 'age', width: 200 },
        { field: 'email', width: 200 },]

    const rows = props.data;
    const classes = useStyles();

    return (
        <div>
            {rows.length < 0 ? (<div className={classes.table} style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>) : <h1>loading....</h1>}
        </div>
    )

}

export default Showing;
