// 商品列表功能
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope, $window, GoodsListFty, $stateParams,$ionicLoading,$ionicHistory) {

    // 列表数据对象
    $scope.obj_goodsListData=[];
    // 默认让他有更多数据可以加载
    $scope.pms_isMoreItemsAvailable=true;
    // 分页查询对象,保存一些分页信息和查询条件2
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };



    // 在我们进入视图页面的时候调用我们的刷新方法
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });

    // 错误的进入时间会导致上拉加载更多的bug
    //$scope.$on('$ionicView.enter', function (e) {
    //  $scope.func_refreshGoodsList();
    //});

    // 刷新获取最新数据
    $scope.func_refreshGoodsList=function(){
      // 每次刷新将页码值变为1，增强我们代码的健壮性
      $scope.obj_pagingInfo.pageNum=1;
      // 将商品编号传入分页信息中
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      // 将分页信息变为字符串对象
      var message=JSON.stringify($scope.obj_pagingInfo)
      var promise=GoodsListFty.refreshGoodsList(message);
      promise.then(
        // 成功的回调函数
        function(data){
          // 如果数据不为空，我们将数据挂载到 $scope.obj_goodsListData数组中
          if(data!=null){
            $scope.obj_goodsListData=data;
          }
          else{
            $scope.pms_isMoreItemsAvailable=false;
          }
        },
        //失败的回调函数
        function(reason){
          console.log("3");

        }).finally(function(){
          // 停止广播ion-refresher
          $scope.$broadcast('scroll.refreshComplete');
          // 刷新之后我们再让他默认变回来可以加载更多数据
          $scope.pms_isMoreItemsAvailable=true;
      })
    }

    // 获取跟多数据的方法（上啦加载更多数据效果）
    $scope.func_loadMoreGoodsList=function(){

      // 为了用户友好性，加一个遮罩层
      $ionicLoading.show({
        template: '正在加载数据...'
      });

      // 增加分页信息
      $scope.obj_pagingInfo.pageNum=$scope.obj_pagingInfo.pageNum+1;
      console.log($scope.obj_pagingInfo.pageNum);
      // 将商品编号传入分页信息中
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      // 将分页信息变为字符串对象
      var message=JSON.stringify($scope.obj_pagingInfo)

      var promise=GoodsListFty.loadMoreGoodsList(message);
      promise.then(
        // 成功的回调函数
        function(data){

          // 如果数据不为空，我们将数据挂载到 $scope.obj_goodsListData数组中
          if(data!=null){
            // 用jquery中的each方法对新数据遍历，将每一条数据添加到obj_goodsListData数组中
            $.each(data,function(index,item){
              $scope.obj_goodsListData.push(item);
            })
          }
          else{
            $scope.pms_isMoreItemsAvailable=false;
          }

        },
        //失败的回调函数
        function(reason){

        }).finally(function(){
        // 停止广播ion-infinite
        $scope.$broadcast('scroll.infiniteScrollComplete');
        // 关闭遮罩层
        setTimeout(function(){
          $ionicLoading.hide();
        },2000)


      })
    }




  })




