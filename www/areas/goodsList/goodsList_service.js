// 商品列表服务
angular.module('goodsList.service', [])
  .factory('GoodsListFty', function ($http, $q,GlobalVariable) {
    return {
      // 刷新列表商品列表
      refreshGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            productId: "1",
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            productId: "2",
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            productId: "3",
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            productId: "4",
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            productId: "5",
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            productId: "6",
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      //下拉加载更多列表商品列表
      loadMoreGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      //$http的跨域访问
      crossGetData:function(message){
        var deferred = $q.defer();
        // callback=JSON_CALLBACK这是固定写法，只有这样写了，才会走我们的success方法
        var url = GlobalVariable.SERVER_PATH+"/WXPlatformServlet?method=mobileUserUndoTaskList&message="+message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+"&module=bill&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data,status,config,headers) {
          deferred.resolve(data);
        }).error(function (reason,status,config,headers) {
          deferred.reject(reason);
        });
        return deferred.promise;
      },
      // 测试我们promise对象的执行顺序
      testPromise: function() {
        console.log("5");
        var deferred=$q.defer();
        setTimeout(function(){
          console.log("6");
          deferred.resolve("我是testPromise方法")
        },4000)
        console.log("7");
        return deferred.promise;
      },
      // 获取数据
      getData: function (typeNumber) {
        // 定义了一个延迟对象
        var deferred=$q.defer();
        // 通过$http.get进行数据请求
        $http.get('localhost:8080'+'?typenumber='+typeNumber)
          .success(function(data,status,config,headers){
             // 在请求成功的回调函数中通过deferred.resolve方法改变promise对象的状态
             deferred.resolve(data);
          })
          .error(function(reason,status,config,headers){
            // 在请求失败的回调函数中通过deferred.reject方法改变promise对象的状态
             deferred.reject(reason);
        })
        return deferred.promise;
      },
      // 删除数据
      deleteById: function () {
        console.log("这是deleteById方法");
      },
      // ajax和$http请求方式简介
      demo: function () {

        ////$http的方式
        //$http.post('localhost:8080',{typeNumber:1}).success(function(data,status,config,headers){
        //
        //}).error(function(data,status,config,headers){
        //
        //})
        ////$http的get请求方式
        $http.get('localhost:8080').success(function(data,status,config,headers){
          setTimeout(function(){
            console.log("Promise/a+规范");
          },4000)

        }).error(function(data,status,config,headers){

        })
        //
        ////ajax的方式
        //$.get(url,func);
        //$.post(url,object,func)
      }
    }

  });
