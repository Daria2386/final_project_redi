import React, { useEffect } from 'react'

function AdminOrders({orders}) {

  // useEffect(() => {

  // }, [])
  return (
  <div>
    <div className="overflow-x-auto">
  <table className="table overflow-auto">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {orders && orders.map((i, j) => <tr key={j}>
        <th>{j + 1}</th>
        <td>{i.client}</td>
        <td>{i.email}</td>
        <td>{i.payment}</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AdminOrders