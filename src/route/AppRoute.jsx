import {Routes,Route} from 'react-router'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductDetail from '../pages/ProductDetail'


const AppRoute =()=>{
    return(
        <div>
            <Routes>
                <Route path ="/" element ={<Home/>}/>
                <Route path ="/about" element ={<About/>}/>
                <Route path ="/contact" element ={<Contact/>}/>
                <Route path ="/productdetail/:id" element ={<ProductDetail/>}/>
        

                
            </Routes>
        </div>
    )
}
export default AppRoute;