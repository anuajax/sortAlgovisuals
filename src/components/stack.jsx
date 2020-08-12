import React from 'react';
import Element from './div.element.component';
class Stack extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            stack: []
        }
    }
handleSubmit=(event)=>
{
    event.preventDefault();
    this.state.stack.push(event.target.value);
    console.log(event.target.value);

}
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="number"/>
                <button type="submit">Push</button>
                </form>
                {this.state.stack.map((item) => <Element val = {item}/>)}
            </div>
        )
    }
}
export default Stack;