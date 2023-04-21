import React from 'react';

const ProductDetails = () => {

  const save = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('ProductId');
    const productName = form.get('ProductName');
    const price = form.get('ProductPrice');

  }  

  return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-400 h-screen">
        <div className=" h-96" />
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-white">Add Product</p>
            <form onSubmit={(event) => save(event)} >
                <div className="md:flex items-center mt-12">
                <div className="w-full  flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">Product ID</label>
                    <input name="ProductId" type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>

                </div>
                <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">Product Name</label>
                    <input name="ProductName" type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>

                </div>
                <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">Product Price</label>
                    <input name="ProductPrice" type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                </div>

                </div>
                <div>
                </div>
                <div className="flex items-center justify-center w-full">
                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                    Send
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}

export default ProductDetails;
