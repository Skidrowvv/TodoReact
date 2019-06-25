import React,{Component} from 'react';
import Test from './component/test';




export default class App extends Component{
  constructor(props){
    super(props);
      this.state={
        newItem:'',
        list:[]
      }
  }

  updateInput(key,value){
    this.setState({
      [key]:value
    });
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(i=> i.id !== id)
    this.setState({list:updateList})
  }

addItem(){
  const newItem ={
    id:1 + Math.random(),
    value:this.state.newItem.slice()
  };
  const list = [...this.state.list];
  list.push(newItem);
  this.setState({
    list,
    newItem:''
  })
}

  render(){
    return(
      <div>
        <h1>

        </h1>
            <input 
              type="text" 
              placeholder="Write here"
              value={this.state.newItem}
              onChange={e=>this.updateInput('newItem',e.target.value)}
            />
            <button onClick={()=>this.addItem()}>
              Add
            </button>
        <hr/>
          <ul>
              {this.state.list.map(i=>{
                return(
                  <li key={i.id}>
                    {i.value}
                    <button 
                    onClick={()=>this.deleteItem(i.id)}
                    
                    >
                      Dellete
                    </button>
                  </li>
                )
              })}
          </ul>
      </div>
    )
  }
}