import Vue from 'vue';

import HelloWorld from './components/HelloWorld.vue';

const vue = new Vue({
    el: '#app',
    render: h => h(HelloWorld),
});

console.log(vue);
