import React from 'react';
import S from './index.module.css';
import { MenuOutlined } from '@ant-design/icons';
import MyImage from '../../image/IMDb_website_logo.svg';

function NavigationBar() {
  return (
    <div className={S.NavigationBar}>
      <img className={S.NavigationBarImage} src={MyImage} alt='example'/>
      <button type='button' className={S.NavigationBarButton}><MenuOutlined />     Menu</button>
      <form className={S.NavigationBarForm}><input placeholder='Search IMDB'type='search' className={S.NavigationBarSearchBox}></input><button></button></form>
    
    </div>
  );
}

export default NavigationBar;
