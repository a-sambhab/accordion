import React, {useState} from 'react';
import { Info } from './Info';
import './App.css'
// import { Button } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';const App = () => {
  const [Icon, setIcon] = useState(AddBoxRoundedIcon);
  const [state, setState] = useState(false);
  const Change = () => {
    // var element = document.getElementsById(id);
    if(Icon===AddBoxRoundedIcon){
      setIcon(IndeterminateCheckBoxIcon);
      // setState(true);
    }
    else{
      setIcon(AddBoxRoundedIcon);
      // setState(false);
    }
  }
  return(
    <>
      <div className="container">
        <div className="centerdiv">
          <h1>React Interview Questions</h1>
          <div className="content">
            {Info.map(function cards(val){
              return(
                <>
                <div className="cards">
                  <div className="show">
                    <button onClick={() => setState(!state)} onClick={Change}><Icon/></button>
                      <h3>{ val.question}</h3>
                    </div>
                  {state && <p className="ans">{val.answer}</p> }
                </div>
                </>
              );
            })

            }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;