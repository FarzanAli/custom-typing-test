import React from 'react';
import useSound from 'use-sound';
import './toggle.css';
import boopOn from '../../../audio/toggle/boop-on.mp3';

let Toggle = (props) => {

    let onChange = e => {
        for(let i = 0; i < document.getElementsByClassName("toggle").length; i++){
            if(document.getElementsByClassName("toggle").item(i).checked && i !== parseInt(e.target.id)){
                document.getElementsByClassName("toggle").item(i).checked = false;
            }
            if(document.getElementsByClassName("toggle").item(i).checked === false && i === parseInt(e.target.id)){
                document.getElementsByClassName("toggle").item(i).checked = true
            }
        }
    }

    const [boop] = useSound(boopOn);

    return(
        <div className="toggle-container">
            {
                props.toggle.map((object, idx) => (
                    
                    <div key={idx}>
                        <label className="label-container">
                            <input className="toggle" type="checkbox" defaultChecked={object.checked} id={idx} onChange={onChange} onClick={boop}/>
                            <span className="custom-toggle"></span>
                            &nbsp;{object.name}
                        </label>
                        <br/>
                    </div>
                ))
            }
        </div>
    );
}

export default Toggle;