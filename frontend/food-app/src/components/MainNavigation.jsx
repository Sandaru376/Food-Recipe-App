/* // components/MainNavigation.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function MainNavigation() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
 */

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Model from './Model';
import InputForms from './InputForms';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Outlet context={{ setIsOpen }} />
      <Footer />

      {isOpen && (
        <Model onClose={() => setIsOpen(false)}>
          <InputForms setIsOpen={setIsOpen} />
        </Model>
      )}
    </>
  );
}
