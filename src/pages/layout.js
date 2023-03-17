import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
  <div>
    <Navbar key="navbar"/>
    <Outlet/>
  </div>
  );
}
