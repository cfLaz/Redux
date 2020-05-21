import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state ={ //no need to store this in global redux.js, this is only used here
        name: '',
        age: '',
    }
    
    nameChangedH = (event) => {
        this.setState({name: event.target.value});
    }
    ageChangedH = (event) =>{
        this.setState({age: event.target.value});
    }
    rennder () {
        return (
        <div className="AddPerson">
            <input type='text' placeholder='Name'
                onChange={this.nameChangedH}
                value={this.state.name}
            />
            <input type='number' placeholder='Age'
                onChange={this.ageChangedH}
                value={this.state.age}
            />
            <button onClick={()=> this.props.personAdded(this.state.name, this.state.age)}>Add Person
            </button>
        </div>        
        );
    }
};
export default AddPerson;