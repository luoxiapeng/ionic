/*
*创建者             石国庆
*创建时间           2016.2.25
*文件功能           app的首页
 */

// 首页面
angular.module('home.controller', [])
  .controller('HomeCtrl', function($scope,GlobalVariable,$window) {
    headerChangeColor();
    getHeaderSlideData();
    goTop();
    // 监听视图完全加载之后的事件
    $scope.$on('$ionicView.afterEnter', function (e) {
      initHeaderSlide();
      initToutiaoSlide();
    });


    // 获取头部滚动条数据，模拟了一个json对象
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/home-headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/home-headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/home-headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/home-headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/home-headerSlide-5.jpg"
        }
      ];
    }

    // 初始化头部swiper滚动条的方法
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        slidesPerView: 1, // 在slider的前后各添加一张相同的slider
        paginationClickable:true,// 分页器是否可以点击
        centeredSlides: true,
        autoplay: 2000,// 多少毫秒切换页面
        autoplayDisableOnInteraction: false,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,// 当我们修改swiper的时候，他会自动重新实例化switer
        observeParents:true


        //paginationClickable: true,
        //autoplay: 2000,
        //autoplayDisableOnInteraction: false,
        //loop: true,
        //// 如果需要分页器
        //pagination: '.swiper-pagination',
        //// 改变自动更新
        //observer:true,
        //observeParents:true
      });
    }

    // 初始化京东头条滚动条
    function initToutiaoSlide(){
      var toutiaoSwiper = new Swiper('#toutiaoSlider', {
        direction:'vertical',
        autoplay: 2000,
        loop: true
      });
    }

    // 改变头部颜色
    function headerChangeColor(){
      // 获取滚动对象
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }

    //回到顶部
    function goTop(){
      var bg=window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
    };


  })
