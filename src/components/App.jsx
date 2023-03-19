import React, { useState, useEffect } from 'react';
import storage from '../helpers/storage';
import css from '../index.css';

export function App () {

const [currentState, setCurrentState] = useState(()=>storage.load('currentState') ?? false);
const [followersCounter, setFollowersCounter] = useState(()=>storage.load('followersCounter') ?? 100500);

const toggleCounterState = () => {
console.log("before click", currentState)
setCurrentState(!currentState);
setFollowersCounter((!currentState) ? (followersCounter + 1) : (followersCounter) - 1);
};


useEffect(() => {
  storage.save('currentState', currentState); 
  storage.save('followersCounter', followersCounter); 
}, [currentState, followersCounter]);

    return (
    <>
        <div>
          <ul>
            <li>
              <p>followers</p>
              <p>{followersCounter}</p>
            </li>
          </ul>
          <button className={css.btnSubmit} type='button' onClick={toggleCounterState}>add</button>
        </div>

    </>
    );
}

/* <div className={currentState ? [css.btnSubmit, css.active].join(' ') : css.btnSubmit}> */