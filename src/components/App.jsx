import React, { useState, useEffect } from 'react';
import storage from '../helpers/storage';
import { CardList } from '../components/CardList/CardList';
import logo from '../components/images/Logo.png';
import css from './App.module.css';

export function App () {

const [currentState, setCurrentState] = useState(()=>storage.load('currentState') ?? false);
const [followersCounter, setFollowersCounter] = useState(()=>storage.load('followersCounter') ?? 100500);

const toggleCounterState = () => {
setCurrentState(!currentState);
setFollowersCounter((!currentState) ? (followersCounter + 1) : (followersCounter) - 1);
};

useEffect(() => {
  storage.save('currentState', currentState); 
  storage.save('followersCounter', followersCounter); 
}, [currentState, followersCounter]);

    return (
    <>
        <div className={css.cardContainer}>
        <img
          src={logo}
          alt="logo"
          className={css.logo}
          />
          <CardList currentState={currentState} followersCounter={followersCounter} toggleCounterState={toggleCounterState} />
        </div>
    </>
    );
}

