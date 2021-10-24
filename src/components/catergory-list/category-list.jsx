import React, { Component } from "react";
import "./style.css";

class CategoryList extends React.Component {
    render() { 
        return (
            <section className="category-list">
                <ul className="category-list-list">
                    <li className="category-list-item">categoria</li>
                    <li className="category-list-item">categoria</li>
                    <li className="category-list-item">categoria</li>
                    <li className="category-list-item">categoria</li>
                </ul>
                <input type="text" className="category-list-input"/>
            </section>
        );
    }
}
 
export default CategoryList;