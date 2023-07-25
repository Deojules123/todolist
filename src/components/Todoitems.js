import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Todoitems extends Component {

        getstyle = () =>
        {
            return {
                background:"#f4f4f4",
                padding:"10px",
                borderBottom:"2px #ccc solid",
                textDecoration: this.props.todo.completed ? 'line-through' : "none"
        };
        } 
        render() {
        const {id, title} = this.props.todo;
        return (
                <div style={this.getstyle()}>
                    <p>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {title}
                        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                    </p>
                </div>
            )
        }
        }
        //PropTypes
        Todoitems.propTypes = {
        todo: PropTypes.object.isRequired
        };

        const btnStyle = {
            background:'crimson',
            color:'#fff',
            border:'none',
            padding:'5px 10px',
            borderRadius:'50%',
            cursor:'pointer',
            float:'right',
        }


export default Todoitems