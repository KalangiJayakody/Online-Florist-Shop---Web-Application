import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

 
 const Layout = ({children}) => {
   return (
     <>
      <ScrollToTop/>
        <Header/>
       <div> {children} </div>
       <Footer/>
     </>
   )
 }
 
 export default Layout
 