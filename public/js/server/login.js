Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text}}</li>'
});
var vm = new Vue({
  el: '#app',
  data: {
    userName: 'J.E',

    list: [{
        id: 0,
        text: '1111'
      },{
        id: 1,
        text: '2222'
      }],

      rawHtml: '<h1>我是插入的h1</h1>'
  },
  methods: {
    onLogin(e){
      alert('您的用户名是：' + this.userName);
      e.preventDefault();
      //e.stopPropagation();
    },

    tapBody(){
      console.log('你点击了body');
    }
  }
  
});
