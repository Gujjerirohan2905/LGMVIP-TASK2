import React from 'react';
import loader from '../img/loading.gif';
import '../css/Loading.css';
export default function Loading() {
  return (
    <center> <div className='loader'><img className='gif' src={loader} alt='Loading....'/></div></center>
  )
}
