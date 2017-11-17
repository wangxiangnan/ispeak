



var vm = new Vue({
  el: '#app',

  data: {
    userInfo: {
      name: '刘素颜'
    },

    tabList: [{
      id: 0,
      text: '文章录入',
      isActive: true
    },{
      id: 1,
      text: '文章列表',
      isActive: false
    }],

    artcleList: [{
      id: 0,
      imgUrl: '/images/server/star.png',
      desc: '携程“虐童”亲子园停业整顿携程“虐童”亲子园停业整顿携程“虐童”亲子',
      oriTile: '睡前伴读',
      oriPubTime: '2017-05-01',
      author: '刘素颜',
      curPubTime: '2017-11-17',
      isChecked: false
    },{
      id: 0,
      imgUrl: '/images/server/star.png',
      desc: '携程“虐童”亲子园停业整顿携程“虐童”亲子园停业整顿携程“虐童”亲子',
      oriTile: '睡前伴读',
      oriPubTime: '2017-05-01',
      author: '刘素颜',
      curPubTime: '2017-11-17',
      isChecked: false
    },{
      id: 0,
      imgUrl: '/images/server/star.png',
      desc: '携程“虐童”亲子园停业整顿携程“虐童”亲子园停业整顿携程“虐童”亲子',
      oriTile: '睡前伴读',
      oriPubTime: '2017-05-01',
      author: '刘素颜',
      curPubTime: '2017-11-17',
      isChecked: false
    },{
      id: 0,
      imgUrl: '/images/server/star.png',
      desc: '携程“虐童”亲子园停业整顿携程“虐童”亲子园停业整顿携程“虐童”亲子',
      oriTile: '睡前伴读',
      oriPubTime: '2017-05-01',
      author: '刘素颜',
      curPubTime: '2017-11-17',
      isChecked: false
    },{
      id: 0,
      imgUrl: '/images/server/star.png',
      desc: '携程“虐童”亲子园停业整顿携程“虐童”亲子园停业整顿携程“虐童”亲子',
      oriTile: '睡前伴读',
      oriPubTime: '2017-05-01',
      author: '刘素颜',
      curPubTime: '2017-11-17',
      isChecked: false
    }],

    imgList: [
      3,3,3,3,3,3,3,3,3
    ],    
  },

  methods: {
    toggleTab(e){
      let target= e.target;
      let index = target.dataset.index;
      let tabList = this.tabList;
      if(!this.tabList[index].isActive){
        for(let i= 0, len= tabList.length; i< len; i++){
          if(i == index){
            tabList[i].isActive = true;
            continue;
          }
          tabList[i].isActive = false;
        }
      }
    }
  }
});