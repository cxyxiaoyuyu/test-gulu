import Vue from 'vue'
import { Button,ButtonGroup,Icon,Input } from 'xiaoyu-test-1'
import 'xiaoyu-test-1/dist/index.css'

console.log(Button,ButtonGroup,Icon,Input)
Vue.component('g-button',Button)
Vue.component('button-group',ButtonGroup)
Vue.component('g-icon',Icon)
Vue.component('g-input',Input)

new Vue({
    el: '#app',
    data: {
        loading: true,
        message: "Hello Vue"
    }
})