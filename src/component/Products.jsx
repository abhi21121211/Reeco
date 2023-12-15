import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fetchProducts, approveProduct, markProductMissing } from "../store/productSlice";
import Avocado from "../images/Avocado.png";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [urgentMark, setUrgentMark] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleApproval = (productId) => {
    dispatch(approveProduct(productId));
  };

  const handleMarkMissing = (productId, urgent) => {
    setSelectedProductId(productId);
    setUrgentMark(urgent);
    setConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  const handleConfirmationDialogConfirm = () => {
    dispatch(markProductMissing({ productId: selectedProductId, urgent: urgentMark }));
    setConfirmationDialogOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ width: "90%", background: "white", border: "1px solid black", borderRadius: "10px", margin: "auto", marginTop: "20px" }}>
      <div style={{ margin: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <input type="text" placeholder="Search...." style={{ width: "40%", borderRadius: "20px", border: "1px solid black" }} />
          <div>
            <button style={{ border: "1px solid #1e633f", fontSize: "15px", borderRadius: "50px", padding: "8px", width: "100px", background: "white", color: "#1e633f", fontWeight: "bold" }}>
              Add item
            </button>
            <i className="pi pi-print" style={{ fontSize: "20px", paddingLeft: "10px", color: "#1e633f" }}></i>
          </div>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell component="th" scope="row">
                    Product name
                  </TableCell>
                  <TableCell align="left">Brand</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((pro) => (
                  <TableRow key={pro.id}>
                    <TableCell component="th" scope="row">
                      <img src={Avocado} style={{ width: "50px" }} alt={pro.title} />
                    </TableCell>
                    <TableCell>{pro.title}</TableCell>
                    <TableCell>{pro.brand}</TableCell>
                    <TableCell>{pro.price}</TableCell>
                    <TableCell>{pro.quantity}</TableCell>
                    <TableCell>{pro.total}</TableCell>

                    {/* <TableCell style={{ background: "#f3f3f3" }}>
                      {pro.status === "Missing - Urgent" ? (
                        <button style={{ border: "1px solid #1e633f", fontSize: '15px', borderRadius: "50px", padding: '8px', width: '150px', background: "red", color: 'white', fontWeight: 'bold', marginLeft: '20px' }}>{pro.status}</button>
                      ) : pro.status === "Missing" ? (
                        <button style={{ border: "1px solid #1e633f", fontSize: '15px', borderRadius: "50px", padding: '8px', width: '150px', background: "#f66d44", color: 'white', fontWeight: 'bold', marginLeft: '20px' }}>{pro.status}</button>
                      ) : pro.status === "Approved" ? (
                        <button style={{ border: "1px solid #1e633f", fontSize: '15px', borderRadius: "50px", padding: '8px', width: '150px', background: "green", color: 'white', fontWeight: 'bold', marginLeft: '20px' }}>{pro.status}</button>
                      ) : (
                        <button style={{ display: "none" }}></button>
                      )}
                    </TableCell> */}

                    <TableCell style={{ background: "#f3f3f3" }}>
                      {pro.status === "Missing - Urgent" || pro.status === "Missing" ? (
                        <button
                          style={{
                            border: "1px solid #1e633f",
                            fontSize: "15px",
                            borderRadius: "50px",
                            padding: "8px",
                            width: "150px",
                            background: pro.status === "Missing - Urgent" ? "red" : "#f66d44",
                            color: "white",
                            fontWeight: "bold",
                            marginLeft: "20px",
                          }}
                          onClick={() => handleMarkMissing(pro.id, !pro.status === "Missing - Urgent")}
                        >
                          {pro.status}
                        </button>
                      ) : pro.status === "Approved" ? (
                        <button
                          style={{
                            border: "1px solid #1e633f",
                            fontSize: "15px",
                            borderRadius: "50px",
                            padding: "8px",
                            width: "150px",
                            background: "green",
                            color: "white",
                            fontWeight: "bold",
                            marginLeft: "20px",
                          }}
                        >
                          {pro.status}
                        </button>
                      ) : (
                        <button style={{ display: "none" }}></button>
                      )}
                    </TableCell>

                    <TableCell colSpan={7} align="right" style={{ background: "#f3f3f3" }}>
                      <IconButton onClick={() => handleApproval(pro.id)}>
                        {pro.status === "Approved" ? (
                          <DoneIcon style={{ fontSize: "1.5rem", margin: "10px", color: "green" }} />
                        ) : (
                          <DoneIcon style={{ fontSize: "1.5rem", margin: "10px" }} />
                        )}
                      </IconButton>


                      <IconButton onClick={() => handleMarkMissing(pro.id, true)}>
                        {pro.status === "Missing - Urgent" ? (
                          <CloseIcon style={{ fontSize: "1.5rem", margin: "10px", color: "red" }} />
                        ) : pro.status === "Missing" ? (
                          <CloseIcon style={{ color: "#f66d44", fontSize: "1.5rem", margin: "10px" }} />
                        ) : (<CloseIcon style={{ fontSize: "1.5rem", margin: "10px" }} />)}
                      </IconButton>
                      {/* <IconButton onClick={() => handleMarkMissing(pro.id, false)}>
                        <CloseIcon style={{ fontSize: "1.5rem", margin: "10px" }} />
                      </IconButton> */}
                      <button style={{ fontSize: "1.5rem", marginLeft: "5px", marginTop: "-50px", border: "none" }}>Edit</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={confirmationDialogOpen} onClose={handleConfirmationDialogClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Do you want to mark the product as {urgentMark ? "Missing - Urgent" : "Missing"}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationDialogClose}>No</Button>
          <Button onClick={handleConfirmationDialogConfirm}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Products;
