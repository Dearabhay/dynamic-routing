import React,{useContext,useEffect} from 'react'
import axios from 'axios'
import {MyStore} from '../context/MyContext'
import  ProductsCard from '../components/ProductsCard.jsx'


const Home =()=>{
    let{productData,setProductData} =useContext(MyStore);

    let getProductData = async () =>{
       try{
           let res= await axios.get("https://fakestoreapi.com/products");
          setProductData(res.data);
       }catch(error){
        console.log(error);
       };
    };
    useEffect(()=>{
        getProductData ();
    },[])
    

    return(
        <div className='p-2 grid grid-cols-4 gap-2'>
            
            {
                productData.map((val)=>{
                  return  < ProductsCard key={val.id} product={val}/>
                })
            }
            
        </div>
    )
}
export default Home;