import React from 'react'

function Order() {
    return (
        <div style={{ background: 'white', position: 'sticky' ,boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",height: '80px'}}>
            <div style={{ display: 'flex',flexDirection:'column', height: '80px', justifyContent: 'space-between', width: "90%", margin: 'auto', alignItems: "center" }}>
                <div style={{ display: 'flex', width:'100%'}}>
                    <p style={{ fontSize: '20px', opacity: '0.5',margin:"0px" }}>Orders <i className='pi pi-angle-right'></i> Order 32567ABC</p>
                   
                </div>
                <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                <p style={{ fontSize: '25px', fontWeight: 'bold', margin:"10px 0px"}}>Order 32567ABC</p>
                <div >

                    <button style={{border:"1px solid #1e633f" ,fontSize:'15px',borderRadius:"50px" ,padding:'8px', width:'80px',background:"white",color:'#1e633f', fontWeight:'bold'}}>Back</button>
                    <button style={{border:"1px solid #1e633f" ,fontSize:'15px',borderRadius:"50px" ,padding:'8px', width:'150px',background:"#1e633f",color:'white', fontWeight:'bold',marginLeft:'20px'}}>Approve order</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Order
