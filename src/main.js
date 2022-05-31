import Vue from 'vue'
//コンポーネントのオブジェクトをインポートimportすると、コンポーネントのオブジェクトになる
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
// グローバル登録
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
