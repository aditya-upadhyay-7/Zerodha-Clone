import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Universe/>
            <LeftSection/>
            <RightSection/>
            <Footer/>
        </>
     );
}

export default ProductPage;