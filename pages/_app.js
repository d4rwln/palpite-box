import React from 'react';
import './../css/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';


const MyApp = ({ Component, pageProps }) => {
    return (

        <div >
            <Head><title>PalpiteBox</title></Head>

            <Header/>
            <div className='container mx-auto'>
                <Component {...pageProps} />
            </div>
            <Footer/>
        </div>
    )

}
export default MyApp