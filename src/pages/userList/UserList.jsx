import React from 'react'
import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {Link} from "react-router-dom";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'avatarimg', headerName:'avatar', width:20, renderCell:(params)=>{
        return(
            <div style={{display:"flex", alignItems:"center" }}>
                <img style={{width:"32px",
                    height:"32px",
                    borderRadius:"50%",
                    objectFit:"cover",
                    marginRight:"10px"}} src={params.row.avatar} alt="img3"/>
            </div>
            )},
    },        
    { field: 'username', headerName: 'Username', width: 200 },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 90,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
        field: 'transaction',
        headerName: 'Transaction',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
      },
      {
          field: "action",
          headerName:"Action",
          width:150,
          renderCell: (params)=>{
              return(
                  <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit"
                    style={{border:"none",
                    borderRadius:"10px",
                    padding:"5px 10px",
                    backgroundColor:"#3bb077",
                    marginRight:"20px",
                    color:"white" }} >Edit</button>
                   </Link> 
                    <DeleteOutline  style={{color:"red", cursor:"pointer"}}/>
                   </>
              )
          }
      }
  ];
  

export default function UserList({ rows }) {

  return (
    <div className='userList' >
        <h1>Costumers</h1>
        <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

