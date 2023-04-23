
import React, { Component } from 'react';
import {getAllProducts} from '../stateManagement/actions/productThunkActions';
import {connect} from 'react-redux';

class ProductListsWhitThunk extends Component {

    componentDidMount = () => {
      this.props.getAllProducts()
    }
    

  render() {
    return (
        
        <div className="relative overflow-x-auto">
            {this.props.isLoading ? <div>Loading Data From Server ...</div> :  null}
            {this.props.message ? <div>{this.props.message}</div> : null}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TITLE
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Add-Remove
                        </th>
                    </tr>
                </thead>
                <tbody>

                {this.props.products.map(item => 
                    <tr key={item.productId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.productId}
                        </th>
                        <td className="px-6 py-4">
                            {item.productName}
                        </td>
                        <td className="px-6 py-4">
                            {"$"+item.unitPrice}
                        </td>
                        <td>
                            <button onClick={() => this.props.removeProduct(item.productId)} type="button" className="text-white py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                                delete
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
  }
}


const mapStateToProps = (state)  => {
    return{   
        products  : state.productThunkState.items,
        isLoading : state.productThunkState.isLoading,
        message   : state.productThunkState.message
    }
}

const mapDispathToProps = dispath => {
    return {
        getAllProducts : (id) => getAllProducts(dispath)
    }
}

export default connect(mapStateToProps, mapDispathToProps )(ProductListsWhitThunk);