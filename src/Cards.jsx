import React, {useState} from 'react';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const Cards = (props) => {
    const [state, setState] = useState(false);
    const [Icon, setIcon] = useState(AddBoxRoundedIcon)
    const Change = () => {
        setState(!state);
        if(Icon === AddBoxRoundedIcon){
            setIcon(IndeterminateCheckBoxIcon);
        }
        else{
            setIcon(AddBoxRoundedIcon);
        }
    }
    return (
        <>
            <div className="cards">
                  <div className="show">
                    <p onClick={Change} > <Icon/> </p>
                      <h3>{ props.question}</h3>
                    </div>
                  { state && <p style={{transition : "all 3s ease-in-out"}} className="ans">{props.answer}</p> }
            </div>
        </>
    );
};

export default Cards;