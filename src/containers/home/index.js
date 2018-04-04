import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from '../../modules/counter'

const Home = props => (

  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <button onClick={() => props.changePage()}>Go To about page via Redux</button>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>
  </div>
)


const mapStateToProps = state => ({
  count: state.counter.count,
  isDecrementing: state.counter.isDecrementing,
  isIncrementing: state.counter.isIncrementing
});




const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
