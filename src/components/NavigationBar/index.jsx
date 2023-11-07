import React from 'react';
import S from './index.module.css';
import { MenuOutlined } from '@ant-design/icons';
import MyImage from '../../image/IMDb_website_logo.svg';
import NavigationBarSearchBox from '../NavigationBarSearchBox';
import Imdbpro from '../../image/IMDbPro_SmallFormatBlue.png';

function NavigationBar() {
  return (
    <div className={S.NavigationBar}>
      <img className={S.NavigationBarLogo} src={MyImage} alt='example'/>
      <button type='button' className={S.NavigationBarButton}><MenuOutlined /><span>Menu</span></button>
      <form className={S.NavigationBarForm}><NavigationBarSearchBox/></form>
      <img className={S.NavigationBarImdbpro} src={Imdbpro} alt='example'/>
    </div>
  );
}

export default NavigationBar;
