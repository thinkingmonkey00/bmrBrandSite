//ES5
'use strict';

window.onscroll = function () {
    var nav = document.querySelector('#navbar');
    if (undefined.scrollY <= 10) nav.className = '';else nav.className = 'scroll';
};



//ES6
    //window.onscroll = () => {
  //const nav = document.querySelector('#navbar');
  //if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//};