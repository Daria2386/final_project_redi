import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function AdminService({isLogged, services}) {
  const navigate = useNavigate()


  useEffect(() => {
    if(!isLogged){
      navigate('/')
    }
  })
  return (
    <div>Admin Service
       <p>{services && services.map(i => <p>{i.name}</p>)}</p>
       <button ><ion-icon name="trash-outline"></ion-icon></button>
       <button ><ion-icon  name="add-circle-outline"></ion-icon></button>
      


    </div>
  )
}

export default AdminService