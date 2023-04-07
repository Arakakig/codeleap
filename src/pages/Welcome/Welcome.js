import React from 'react'
import './welcome.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { editarUser } from '../../redux/actions/userStore'

function Welcome() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
      setIsDisabled(event.target.value === '');
    };
    
    function click() {
        dispatch(editarUser({userName: inputValue}));
        navigate("/step");
      }
      
    
    return (
        <section className='container'>
            <div className='square_container'>
                <div className='square_information'>
                    <h3> Welcome to CodeLeap network!</h3>
                    <br/>
                    <span>Please enter your username</span>
                    <input placeholder='John doe' value={inputValue} onChange={handleChange}/>
                    <div className='btn-final'>
                        <button className='btn-enter'  disabled={isDisabled} onClick={()=>click()}>
                            ENTER
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Welcome