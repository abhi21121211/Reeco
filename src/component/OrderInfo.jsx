import React from 'react'

function OrderInfo() {
  return (
    <div style={{display:'flex', width:'90%',margin:'auto',background:'white',height:'100px',border:'1px solid black',borderRadius:'10px',padding:'10px', justifyContent:'space-evenly', marginTop:"20px"}}>
      <div>
        <p>Supplier</p>
        <h3>East coast fruits & vegetables</h3>
        
      </div>
      <hr/>
      <div>
        <p>Shipping data</p>
        <h3>Thu, Feb 10</h3>
        
      </div>
      <hr/>
      <div>
        <p>Total</p>
        <h3>$ 15,028.3</h3>
        
      </div>
      <hr/>
      <div>
        <p>Category</p>
        <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
<i className="pi pi-paypal" style={{ fontSize: '1.5rem'  }}></i>
<i className="pi pi-reddit" style={{ fontSize: '1rem' }}></i>
<i className="pi pi-prime" style={{ fontSize: '1rem' }}></i>
<i className="pi pi-slack" style={{ fontSize: '1rem' }}></i>
      </div>
      <hr/>
      <div>
        <p>Department</p>
        <h3>300-444-678</h3>
        
      </div>
      <hr/>
      <div>
        <p>Status</p>
        <h3>Awaiting your approval</h3>
        
      </div>
    </div>
  )
}

export default OrderInfo
