import React from 'react';
import { Info } from './Info';
import './App.css'
import Cards from './Cards';
// import { Button } from '@material-ui/core';

const App = () => {
  
  return(
    <>
      <div className="container">
        <div className="centerdiv">
          <h1>React Interview Questions</h1>
          <div className="content">
            {Info.map(function cards(val){
              const { id } = val;
              return(
                <>
                  <Cards
                    key = {id}
                    {... val}
                  />
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