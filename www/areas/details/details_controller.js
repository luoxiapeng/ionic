// 商品列表功能
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function ($scope, $stateParams,$state,$ionicHistory) {

    //$scope.obj_cartCount = {
    //  count: "0"
    //}
    //
    //$scope.$on('$ionicView.beforeEnter', function (e) {
    //  IndexdbJs.getAll("cart",function(data){
    //    for(var i =0;i<data.length;i++){
    //      $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
    //    }
    //  },null)
    //});
    //
    //
    // 通过后台获取到的商品详细信息
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };

    // 用户选择信息，进行维护
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }

    // 数量加1
    $scope.jia1 = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.jian1 = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }
    //
    //
    //
    //
    //// 加入购物车方法
    //$scope.func_addToCart = function () {
    //
    //  var obj_newData={};
    //  angular.copy($scope.obj_goodsDetailInfo,obj_newData);
    //
    //  obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;
    //
    //  IndexdbJs.get(obj_newData.goodsId,"cart",
    //    function(data){
    //      if(data==null||data==undefined){
    //        //不存在商品就添加
    //        IndexdbJs.add("cart", obj_newData, function () {
    //          //变更购物车数量
    //          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
    //          $scope.$digest();
    //        }, null);
    //      }
    //      else {
    //        // 存在商品
    //        // 是新增加6个数量，所以要处理一下，这个还影响下面变更购物车数量的逻辑
    //        obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);
    //
    //        IndexdbJs.update("cart", obj_newData, function () {
    //          //变更购物车数量
    //          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
    //          $scope.$digest();
    //        }, null);
    //      }
    //    },
    //    null
    //  )
    //
    //}
    //
    // 返回首页面
    $scope.func_goHome=function(){
      $state.go("tab.home");
    }

    // 返回前一个页面
    $scope.goBack=function(){
      $ionicHistory.goBack();
    }


  })




