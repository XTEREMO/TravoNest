/* eslint-disable no-unused-vars */
import React,{ useContext } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import list from '../../../server/data'
import { DataGrid } from '@mui/x-data-grid'
import './TourData.css'
import isAdmin from '../../../access_module/admin_access'
import { Context } from '../../../src/App'
const TourData = () => {
    const [pro , setPro , da , setDA , bookmarked , setBookmarked] = useContext(Context);
    const tourdataWithIds = da.map(tour => ({ ...tour, id: tour._id }));
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'place', headerName: 'Place', width: 250 },
        { field: 'location', headerName: 'Location', width: 250 },
        { field: 'provider', headerName: 'Provider', width: 150 },
        { field: 'duration', headerName: 'Duration', width: 150 },
        { field: 'startDate', headerName: 'StartDate', width: 150 },
        { field: 'tourPlace', headerName: 'Attraction', width: 150 },
        { field: 'tag', headerName: 'Tag', width: 150 },
        { field: 'activities', headerName: 'Activities', width: 150 },
      ];


  if(isAdmin.islogin)return (
        <div className='tour-data-body' style={{display:'flex'}}>
           <AdminNavbar/>
            <div className='tour-data-table'>
                <DataGrid
                rows={tourdataWithIds}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </div>
  )
}

export default TourData











/*

<table>
                    <tr>
                        {
                            Object.keys(list[0]).map( item => <th key={item}>{item}</th>)
                        }
                    </tr>   
                    {
                        list.map(data=>{
                            return(
                                    <tr key={data.key}>
                                            {
                                                Object.values(data).map( el => <td key={el}>{el}</td>)
                                            }
                                    </tr>
                            )
                        })
                    }
                </table>


*/