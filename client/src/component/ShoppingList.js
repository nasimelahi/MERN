import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { getItems , deleteItem, addItem } from '../action/itemAction';
import PropTypes from 'prop-types';

class ShoppingList extends Component{
    componentDidMount(){
        this.props.getItems();
    }
    // add function
    add = () => {
        const name = prompt('Enter Name');
           if(name){
              this.props.addItem({ name})
             }
    }
    
    deletePro = (id) => {
        this.props.deleteItem(id);
    }
    
    render(){
        const {items} = this.props.item;
        return(
            <div>
                <div className="container">
                    <div className="col-sm-4 col-md-6">
                        <button className="btn btn-info btn block text-center my-4"
                    
                         onClick = { this.add }
                        >
                        Add Item
                        </button>

                        <div className="list-group">
                            {this.props.item.items.map(({ _id, name}) => {
                               return(
                               <li className= "list-group-item d-flex justify-content-between" 
                               key={ _id }> { name } 
                               <button className="btn btn-danger btn-sm"
                               onClick={ this.deletePro.bind(this,_id) }
                               > 
                               &times; 
                               </button>
                               </li>
                               )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}
ShoppingList.propTypes =  ({
    getItems : PropTypes.func.isRequired,
    item : PropTypes.object.isRequired
})
const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, {getItems , deleteItem,addItem })(ShoppingList);