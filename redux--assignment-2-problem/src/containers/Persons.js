import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
   /*  state = {
        persons: []
    } */

    /* personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    } */

    /* personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    } */

    

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addBtn} />
                {this.props.per.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDelHandler(person.id)}/>
                ))}
            </div>
        );
    }
        
}

                    // state given by redux
const mapStateToProps = state => {
    return {
        per: state.persons,
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        onDelHandler: (id) => dispatch({type: 'DELETE', id:id}),
        addBtn: (name, age) => dispatch({type: 'ADD', personData: {name: name, age: age} }),
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Persons);