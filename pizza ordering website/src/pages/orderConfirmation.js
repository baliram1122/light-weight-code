import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


export default function orderConfirmation() {
  return (
    <div>
        <Header />
        <h1 className='text-light'>order placed</h1>
    </div>
  )
}

