import React from 'react'
import Navbar from './navbar'


export default function Header( { currentPage, handlePageChange } ) {



    return (
        <div>
            {/* Navbar Section */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}
