
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { fetchProducts } from '../store/productSlice';
import Apple from '../images/Apple.png';
import Avocado from '../images/Avocado.png';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ width: '90%', background: "white", border: "1px solid black", borderRadius: '10px', margin: 'auto', marginTop: '20px' }}>
      <div style={{ margin: '20px' }}>
        <div style={{ display: "flex", justifyContent: 'space-between', marginBottom:"20px"}}>
          <input type="text" placeholder='Search....' style={{ width: '40%', borderRadius: '20px', border: '1px solid black', }} />
          <div>
            <button style={{ border: "1px solid #1e633f", fontSize: '15px', borderRadius: "50px", padding: '8px', width: '100px', background: "white", color: '#1e633f', fontWeight: 'bold' }}>Add item</button>
            <i className='pi pi-print' style={{ fontSize: "20px", paddingLeft: '10px', color: '#1e633f' }}></i>
          </div>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell size="10px" component="th" scope="row">Product name</TableCell>
                  <TableCell align="left">Brand</TableCell>
                  <TableCell >Price</TableCell>
                  <TableCell >Quantity</TableCell>
                  <TableCell >Total</TableCell>
                  <TableCell  > Status</TableCell>
                  <TableCell > </TableCell>
                  <TableCell > </TableCell>
                  <TableCell > </TableCell>
                  <TableCell > </TableCell>
                  <TableCell > </TableCell>
                  <TableCell > </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {products.map((pro) => (
                  <TableRow key={pro.id}>
                    <TableCell component="th" scope="row">
                      <img src={Avocado} style={{ width: '50px' }} />
                    </TableCell>
                    <TableCell>{pro.title}</TableCell>
                    <TableCell align="">{pro.brand}</TableCell>
                    <TableCell align="">{pro.price}</TableCell>
                    <TableCell align="">{pro.quantity}</TableCell>
                    <TableCell align="">{pro.total}</TableCell>
                    <TableCell align="" style={{ background: "#f3f3f3" }}>{pro.status}</TableCell>
                    <TableCell colSpan={7} align="right" style={{ background: "#f3f3f3" }}> <i className="pi pi-check" style={{ fontSize: '1.5rem', margin: '10px' }}></i>
                      <i className="pi pi-times" style={{ fontSize: '1.5rem', margin: '10px' }}></i>
                      <button style={{ fontSize: '1.5rem', marginLeft: '5px', marginTop: "-50px", border: 'none' }}>Edit</button>

                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    </div>
  )
}

export default Products
