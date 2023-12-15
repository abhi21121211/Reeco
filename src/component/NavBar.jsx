import React from 'react'

import 'primeicons/primeicons.css';

function NavBar() {
    return (
        <div style={{ background: '#1e633f ', position: 'sticky' }}>
            <div style={{ display: 'flex', height: '50px', justifyContent: 'space-between', width: "90%", margin: 'auto', alignItems: "center" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: "35%", alignItems: 'center' }}>
                    <a href="#" style={{ fontSize: '20px', fontWeight: "bolder" }}>Reeco</a>
                    <a href="#">Store</a>
                    <a href="#">Orders</a>
                    <a href="#">Analytics</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <i className="pi pi-cart-plus" style={{ paddingRight: '20px', color: 'white' }}></i>
                    <a href="#" >Hello,James <i className='pi pi-angle-down'></i> </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
