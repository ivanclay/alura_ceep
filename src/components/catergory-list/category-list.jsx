import React, { Component } from "react";
import "./style.css";

class CategoryList extends React.Component {

    _hadleInputEvent(event){
        if(event.key === "Enter"){
            this.props.addCategory(event.target.value);
        }
    }

    render() { 
        return (
            <section className="category-list">
                <ul className="category-list-list">
                    {this.props.categories.map((category, index) => {
                        return <li className="category-list-item" key={index}>{category}</li>
                    })}
                </ul>
                <input 
                    type="text" 
                    className="category-list-input"
                    placeholder="add category"
                    onKeyUp={this._hadleInputEvent.bind(this)}
                />
            </section>
        );
    }
}
 
export default CategoryList;