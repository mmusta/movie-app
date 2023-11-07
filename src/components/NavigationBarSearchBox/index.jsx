import React from 'react';
import S from './index.module.css';

function NavigationBarSearchBox () {
    return (
        <div className={S.NavigationBarSearchBox}>
            <input className={S.NavigationBarSearchBoxInput} placeholder='Search IMDB'type='search' ></input>
            <button type="submit" className={S.NavigationBarSearchButton}/>
        </div>

    );
}


export default NavigationBarSearchBox;