import Vue from 'vue'
import { Button,ButtonGroup,Icon} from 'xiaoyu-test-1'
import 'xiaoyu-test-1/dist/index.css'

Vue.component('g-button',Button)
Vue.component('button-group',ButtonGroup)
Vue.component('g-icon',Icon)

new Vue({
    el: '#app',
    data: {
        loading: true
    }
})