import React, { Component, } from 'react';
import {connect} from 'react-redux'; //funtion that returns a HOC
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as aT from '../../store/actions/actions';
import  * as actionCreators from '../../store/actions/actions';
class Counter extends Component {
 /*   state = {
        counter: 0
    }

     counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    } */

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />

                <CounterControl label="Increment" clicked={this.props.onIncCounter} />

                <CounterControl label="Decrement" clicked={this.props.onDecCounter}/>

                <CounterControl label="Add 8" clicked={this.props.onAddCounter}  />

                <CounterControl label="Subtract 7" clicked={this.props.onSubCounter} />

                <button onClick={ () => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strRes => (
                      <li key={strRes.id}onClick={() => this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}
// stores instructions on how the state, managed by redux, should be mapped to props we can use in this container
                    //state from redux
const mapStateToProps = state => {
    return { //map of prop names and slices of the state stored in redux
        // will be executed by the react redux pckg bcz we will pass it to it
        ctr: state.ctr.counter, //from rootReducer in index.js
        storedResults: state.res.results,
    };
}
//What kind of actions we want to dispatch to this container
const mapDispatchtoProps = dispatch => {
    return {//type is the only property that we need and its name cannot be changed
        onIncCounter: () => dispatch(actionCreators.increment() ),
        onDecCounter: () => dispatch(actionCreators.decrement() ),
        onAddCounter: () => dispatch(actionCreators.add(8)),
        onSubCounter: () => dispatch(actionCreators.subtract(7)),
        //onStoreResult: (result) => dispatch({storeResult(), result:result}),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))

    };

};//if we have container that just needs to dispatch the state
                //we can put (null, mapDispatchtoProps)
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);