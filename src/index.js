import './index.scss';
import {
    SearchButton
} from './scripts/SearchButton';
import { HideData } from './scripts/HideData';
'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let btn = new SearchButton;
    btn.start();
    let hide = new HideData;
    hide.stop();
})

