
import './App.css';
import { useDispatch } from 'react-redux';
import {add,dec} from './functions/actions';
import {connect} from 'react-redux';

function App(props) {
  console.log(props.counts.countNumber)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span> Number : {props.counts.countNumber} </span> <br />
          <div className="wrapper">
            <input
              type="button"
              value="Increment"
              className="btn"
              onClick={() => {
                dispatch(add());
              }}
            />
            <input type="button" value="Decrement" className="btn" 
               onClick={() => {
                dispatch(dec());
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}


const mapStatetoProps = state =>{
  return {
    counts: state
  };
}
const mapDispatchToProps = dispatch =>{
  return {
    countNumber: () => dispatch(add()),
    DecrementNum: () => dispatch(dec()),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
