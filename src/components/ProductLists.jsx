
import React, { Component } from 'react'
import {getAll, remove} from '../stateManagement/actions/productAction'
import {connect} from 'react-redux';

class ProductLists extends Component {
  render() {
    return (
        <div className="relative overflow-x-auto">
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
            </tr>
        </thead>
        <tbody>

            {this.props.products.map(item => 
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.id}
                    </th>
                    <td className="px-6 py-4">
                        {item.productName}
                    </td>
                    <td className="px-6 py-4">
                        {"$"+item.price}
                    </td>
                </tr>
            )}
        </tbody>
    </table>
</div>
    )
  }
}

// const mapStateToProps = state => {
//     return { 
//         products: state.productState.items
//     }
// };

function mapStateToProps(state) {
    return{
        
        products : state.productState.items
    }
}

export default connect(mapStateToProps)(ProductLists);