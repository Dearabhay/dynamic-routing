import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const ProductDetail = () => {
    let { id } = useParams();
    const [singleProductData, setSingleProductData] = useState({});
    
    let getsingleProductData = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSingleProductData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getsingleProductData();
    }, [id]);

    return (
        <div className="mt-8 min-h-screen  bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center rounded">
            <div className="mx-auto max-w-5xl w-full rounded-3xl border border-gray-800 bg-gray-900 p-6 sm:p-10 shadow-2xl">
                
                {/* Grid Layout: Image on Left, Details on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
                    
                    {/* Left Side: Product Image Section */}
                    <div className="flex items-center justify-center rounded-2xl bg-gray-950 p-8 border border-gray-800 h-96">
                        <img
                            src={singleProductData.image}
                            alt={singleProductData.title}
                            className="max-h-full w-full object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="flex flex-col space-y-6 text-white">
                        
                        {/* Category Badge */}
                        <div>
                            <span className="inline-block rounded-full bg-blue-950 border border-blue-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                                {singleProductData.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-100">
                            {singleProductData.title}
                        </h1>

                        {/* Rating if available */}
                        {singleProductData.rating && (
                            <div className="flex items-center gap-2 text-sm text-yellow-400">
                                <span className="font-bold">★ {singleProductData.rating.rate}</span>
                                <span className="text-gray-400">({singleProductData.rating.count} Reviews)</span>
                            </div>
                        )}

                        {/* Price */}
                        <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                            ${singleProductData.price}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            In Stock
                        </div>

                        {/* Description Section */}
                        <div className="space-y-2 pt-2 border-t border-gray-800">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                                Description
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-300">
                                {singleProductData.description}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;