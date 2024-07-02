import React from 'react'
import Header2 from './Header2'
import Footer from './Footer'
 
 const Layout2 = ({children}) => {
   return (
     <>
        <Header2/>
       <div> {children} </div>
       <Footer/>
     </>
   )
 }
 
 export default Layout2
 