function closeScreen() {
    $('#screen').removeClass('active');
}

function addScreen(img) {
    $('.screenImage').attr('src', img);
    $('#screen').attr('class', ' screen active');
}

$('#more').on('click', function () {
    addMore();
});

var dataBusiness = [
    {
        name: '全部业务', li: [
            {image: 'img/1technological development.jpg', name: '技术开发', describe: ''},
            {image: 'img/2technological consulting.jpg', name: '技术咨询', describe: ''},
            {image: 'img/3technological transfer.jpg', name: '技术转让', describe: ''},
            {image: 'img/4technology%20promotion.jpg', name: '技术推广', describe: ''},
            {image: 'img/5technical%20services.jpg', name: '技术服务', describe: ''},
            {image: 'img/6computer%20system.jpg', name: '计算机系统集成及布线', describe: ''},
            {image: 'img/7computer%20network.jpg', name: '计算机网络工程', describe: ''},
            {image: 'img/8electionic%20products.jpg', name: '电子产品', describe: ''},
            {image: 'img/9electronic%20consumables.jpg', name: '电脑耗材', describe: ''},
            {image: 'img/10computer%20accessories.jpg', name: '计算机软硬件及配件', describe: ''},
            {image: 'img/11general%20machinery.jpg', name: '普通机械设备', describe: ''},
            {image: 'img/12arts%20and%20crafts.jpg', name: '工艺美术品的销售', describe: ''},
            {image: 'img/13financial%20knowledge%20process%20outsourcing.jpg', name: '知识流程外包', describe: ''},
            {image: 'img/14financial%20information%20technology%20outsourcing.jpg', name: '信息技术外包', describe: ''},
            {image: 'img/15financial%20business%20process%20outsourcing.jpg', name: '业务流程外包', describe: ''}]
    },
    {
        name: '计算机软硬件', li: [
            {image: 'img/1technological development.jpg', name: '技术开发', describe: ''},
            {image: 'img/2technological consulting.jpg', name: '技术咨询', describe: ''},
            {image: 'img/3technological transfer.jpg', name: '技术转让', describe: ''},
            {image: 'img/4technology%20promotion.jpg', name: '技术推广', describe: ''},
            {image: 'img/5technical%20services.jpg', name: '技术服务', describe: ''}
        ]
    },
    {
        name: '计算机系统集成及布线', li: [
            {image: 'img/6computer%20system.jpg', name: '计算机系统集成及布线', describe: ''},

        ]
    },
    {
        name: '计算机网络工程', li: [
            {image: 'img/7computer%20network.jpg', name: '计算机网络工程', describe: ''},
        ]
    },
    {
        name: '电子产品', li: [
            {image: 'img/8electionic%20products.jpg', name: '电子产品', describe: ''},
        ]
    },
    {
        name: '电脑耗材', li: [
            {image: 'img/9electronic%20consumables.jpg', name: '电脑耗材', describe: ''},
        ]
    },
    {
        name: '计算机软硬件及配件', li: [
            {image: 'img/10computer%20accessories.jpg', name: '计算机软硬件及配件', describe: ''},
        ]
    },
    {
        name: '普通机械设备', li: [
            {image: 'img/11general%20machinery.jpg', name: '普通机械设备', describe: ''},
        ]
    },
    {
        name: '工艺美术品的销售', li: [
            {image: 'img/12arts%20and%20crafts.jpg', name: '工艺美术品的销售', describe: ''},
        ]
    },
    {
        name: '金融方面', li: [
            {image: 'img/13financial%20knowledge%20process%20outsourcing.jpg', name: '知识流程外包', describe: ''},
            {image: 'img/14financial%20information%20technology%20outsourcing.jpg', name: '信息技术外包', describe: ''},
            {image: 'img/15financial%20business%20process%20outsourcing.jpg', name: '业务流程外包', describe: ''}
        ]
    }

];
var changeindex = 0;
var severfor;

// function severfor() {
    severfor = setInterval(function () {
        if (changeindex == 0) {
            addMore(changeindex);
            changeindex = 6
        } else if (changeindex == 6) {
            addMore(changeindex);
            changeindex = 12
        } else if (changeindex == 12) {
            addMore(changeindex);
            changeindex = 0
        }
    }, 5000);
// }

businessData();

//获取业务体系 数据
function businessData() {
    console.log(dataBusiness[0].li);
    for (var i = 0; i < 15; i++) {
        $('#isotope-gallery-container').append(`
         <div class="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative isotope-item">
                            <div class="gallery-item">
                                <div class="gallery-thumb" style="width: 293px;height: 195px">
                                    <img src='${dataBusiness[0].li[i].image}' class="imges-responsive" alt="1st gallery Thumb">
                                    <div class="image-overlay"></div>
                                    <a onclick="addScreen('${dataBusiness[0].li[i].image}')" class="gallery-zoom"><i class="fa fa-eye"></i></a>
                                  
                                </div>
                                <div class="gallery-details">
                                    <div class="editContent">
                                        <h5>${dataBusiness[0].li[i].name}</h5>
                                    </div>
                                    <div class="editContent" style="width: 300px">
                                         <p>${dataBusiness[0].li[i].describe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

    `);
    }
}

//业务体系


//点击查看更多
function addMore(index) {

    if (index == 6) {
        $('.team-index li').removeClass('active');
        $('.team-index li:nth-child(2)').addClass('active');
        $('#isotope-gallery-container div').remove();
    } else if (index == 12) {
        $('.team-index li').removeClass('active');
        $('.team-index li:nth-child(3)').addClass('active');
        $('#isotope-gallery-container div').remove();
    } else if (index == 0) {
        $('.team-index li').removeClass('active');
        $('.team-index li:first-child').addClass('active');
        $('#isotope-gallery-container div').remove();

    }

    for (var i = index; i < 15; i++) {
        $('#isotope-gallery-container').append(`
          <div class="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative isotope-item">
                            <div class="gallery-item">
                                <div class="gallery-thumb" style="width: 293px;height: 195px">
                                    <img src='${dataBusiness[0].li[i].image}' class="imges-responsive" alt="1st gallery Thumb">
                                    <div class="image-overlay"></div>
                                    <a onclick="addScreen('${dataBusiness[0].li[i].image}')" class="gallery-zoom"><i class="fa fa-eye"></i></a>
                                  
                                </div>
                                <div class="gallery-details">
                                    <div class="editContent">
                                        <h5>${dataBusiness[0].li[i].name}</h5>
                                    </div>
                                    <div class="editContent" style="width: 300px">
                                         <p>${dataBusiness[0].li[i].describe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

    `);
    }
    $('#more').attr('class', 'more active');
    $('#hide').removeClass('active');
}


//点击关联事件
function business(index) {
    clearInterval(severfor);
    var length = 0;
    if (index == 0) {
        clearInterval(severfor);
        severfor = setInterval(function () {
            if (changeindex == 0) {
                addMore(changeindex);
                changeindex = 6
            } else if (changeindex == 6) {
                addMore(changeindex);
                changeindex = 12
            } else if (changeindex == 12) {
                addMore(changeindex);
                changeindex = 0
            }
        }, 5000);
        length = 6;
        $('#more').attr('class', 'more');
    } else if (index == 1) {
        length = dataBusiness[index].li.length
        $('#more').attr('class', 'more active');
    } else if (index == 9) {
        length = dataBusiness[index].li.length
        $('#more').attr('class', 'more active');
    } else {
        length = dataBusiness[index].li.length
        $('#more').attr('class', 'more active');
    }
    console.log(dataBusiness[index].li);
    $('#isotope-gallery-container div').remove();
    for (var i = 0; i < length; i++) {
        $('#isotope-gallery-container').append(`
             <div class="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative isotope-item">
                            <div class="gallery-item">
                                <div class="gallery-thumb" style="width: 293px;height: 195px">
                                    <img src='${dataBusiness[index].li[i].image}' class="imges-responsive" alt="1st gallery Thumb">
                                    <div class="image-overlay"></div>
                                    <a onclick="addScreen('${dataBusiness[index].li[i].image}')" class="gallery-zoom"><i class="fa fa-eye"></i></a>
                                </div>
                                <div class="gallery-details">
                                    <div class="editContent">
                                        <h5>${dataBusiness[index].li[i].name}</h5>
                                    </div>
                                    <div class="editContent" style="width: 300px">
                                        <p>${dataBusiness[index].li[i].describe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

    `);
    }
}

//字体的增加
function pMore(index) {
    if (index == 1) {
        $('#left .p-right').addClass('active');
        $('#left .p').removeClass('active');
        $('#left .p-left').removeClass('active');
    } else {
        $('#right .p-right').addClass('active');
        $('#right .p').removeClass('active');
        $('#right .p-left').removeClass('active');
    }

}

function pLess(index) {
    if (index == 1) {
        $('#left .p-right').removeClass('active');
        $('#left .p').addClass('active');
        $('#left .p-left').addClass('active');
    } else {
        $('#right .p-right').removeClass('active');
        $('#right .p').addClass('active');
        $('#right .p-left').addClass('active');
    }

}

//banner图的自动切换
var picture = [{pic: 'img/BG-banner1.jpg'}, {pic: 'img/BG-banner1.jpg'}, {pic: 'img/BG-banner2.jpg'}, {pic: 'img/BG-banner3.jpg'}];
var bannerset;
banner();

function banner() {
    var index = 1;
    bannerset = setInterval(function () {
        $('#spot li').attr('class', '');
        $(`#spot li:nth-child(${index})`).addClass('active');
        $(`.tpp-banner`).attr('style', `background:url(${picture[index].pic})no-repeat; background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;`);
        index += 1;
        if (index == 4) {
            index = 1
        }
    }, 5000);

}

$('#spot li').mouseover(function () {
    clearInterval(bannerset)
}).mouseout(function () {
    banner();
});

function spotList(index) {
    if (index == 1) {
        $('#spot li').attr('class', '');
        $(`#spot li:nth-child(${index})`).addClass('active');
        $(`.tpp-banner`).attr('style', `background:url(${picture[index].pic})no-repeat; background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;`);

    } else if (index == 2) {
        $('#spot li').attr('class', '');
        $(`#spot li:nth-child(${index})`).addClass('active');
        $(`.tpp-banner`).attr('style', `background:url(${picture[index].pic})no-repeat; background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;`);

    } else if (index == 3) {
        $('#spot li').attr('class', '');
        $(`#spot li:nth-child(${index})`).addClass('active');
        $(`.tpp-banner`).attr('style', `background:url(${picture[index].pic})no-repeat; background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit;`);
    }
}


// 团队介绍

var teamset;
var teamindex=3;
var teamStar=0;
var teambannerindex=0;
teambanner();

function teambanner() {

    teamset=setInterval(function () {
        teambannerindex+=1;
        if(teambannerindex==3){
            teambannerindex=0;
        }
        morePeople(teambannerindex);
    },5000)
}
function morePeople(index){
    if(index==0){
        $(`.team .team-index li`).removeClass('active');
      $(`.team .team-index li:nth-child(${index+1})`).addClass('active')
        teamindex=3;
        teamStar=0;
        team();
    }else if(index==1){
        $(`.team .team-index li`).removeClass('active');
        $(`.team .team-index li:nth-child(${index+1})`).addClass('active')
        teamStar=3;
        teamindex=6;
        team();
    }else if(index==2){
        $(`.team .team-index li`).removeClass('active');
        $(`.team .team-index li:nth-child(${index+1})`).addClass('active')
        teamStar=6;
        teamindex=9
        team();
    }
}
team();
function team() {
    var teamData = [
        {name: '赵总', sex: '男', work: '老板',image:'images/member-2.jpg'},
        {name: '曹总', sex: '男', work: '老板',image:'images/member-1.jpg'},
        {name: '姚总', sex: '男', work: '老板',image:'images/member-2.jpg'},
        {name: '力总', sex: '男', work: '老板',image:'images/member-3.jpg'},
        {name: '白总', sex: '男', work: '老板',image:'images/member-2.jpg'},
        {name: '小总', sex: '男', work: '老板',image:'images/member-2.jpg'},
        {name: '陈总', sex: '男', work: '老板',image:'images/member-3.jpg'},
        {name: '赵总', sex: '男', work: '老板',image:'images/member-3.jpg'},
       ];
    $('#team div').remove();
    for (var i = teamStar; i < teamindex; i++) {
        $('#team').append(`
                          <div class="col-md-4 team-in-testi ">
                                            <article><img class="img-responsive" src="${teamData[i].image}" alt="">
                                                <div class="team-hover">
                                                    <div class="team-name">
                                                        <h5>${teamData[i].name}</h5>
                                                        <span class="span">Code Worrior</span>
                                                    </div>
                                                </div>
                                            </article>
                                        <!-- Avatars -->
                                    </div>

      `)
    }
}

// 服务案列
sever();

function sever() {
    $('#sever div').remove();
    $(`#sever`).append(`
     <div class="col-md-12">

                        <!-- Test Slider -->
                        <div class="testi">
                            <div class="severTesti">

                                <!-- Slider 1 -->
                                <div class="in-testi" style="padding: 20px;">

                                    <!-- Avatars -->
                                    <div class="avatars"><img src="img/512-512-1.png" alt=""></div>
                                    <div class="testi-name">
                                        <h5>山西尧都农村商业银行</h5>
                                        <span>整体POS设备全流程管理服务外包</span>
                                        <div style="padding: 0;margin: 0;float: left">负责人：郭振波</div>
                                    </div>
                                    <p id="left">服务内容：提供智能聚合POS机具专业维护、专业技术服务；提供POS机具管理系统平台；
                                        配合对方做好特约商户额度资金清算、账务咨询、核对差错和异常处理、退货调账，请款等服务；
                                        <span class="p-right"  onclick="pMore(1)"> 》</span>
                                    <span class="p active">负责对商户提供包括终端设备安装、商户培训日常巡检、耗材配送、机具维护、商户关闭和终端的销售专业化服务；
                                        为对方提供智能聚合POS商户版keypos APP，包含本地的系统搭建及源码提供。
                                    </span><span class="p-left active" onclick="pLess(1)">《</span>

                                    </p>
                                </div>

                                <!-- Slider 1 -->

                                <div class="in-testi " style="padding: 20px;">

                                    <!-- Avatars -->
                                    <div class="avatars"><img src="img/512-512.png" alt=""></div>
                                    <div class="testi-name">
                                        <h5>长治银行</h5>
                                        <span>长治银行服务外包项目</span>
                                        <div style="padding: 0;margin: 0;float: left">负责人：郭振波</div>
                                    </div>
                                    <p id="right">服务内容：提供多种移动支付业务接入和运维管理服务；
                                        提供移动支付商户交易管理平台，包括商户录入、审核管理、对账管理、
                                        信息查询、信息查询统计等功能，并负责相应的系统部署、测试、
                                        培训等相关技术服务； <span class="p-right"  onclick="pMore(2)"> 》</span>
                                        <span class="p active">
                                        提供技术支付服务；提供技术支持服务；
                                            负责移动支付平台及商户管理系统上线后的技术服务和系统维护；
                                        负责商户接口的技术服务和系统维护。 </span>
                                        <span class="p-left active" onclick="pLess(2)">《</span>
                                </div>
                            </div>
                        </div>
                 </div>
    `);
}

//地部的动态图
arrowChange();

function arrowChange() {
    var i = 52;
    setInterval(function () {
        if (i < 100) {
            i++;
        } else {
            i = 52
        }
        $('.arrow-1').attr('style', ` 
           background:rgb(27, 189, 232,0.2);
           width:${i}px;
           height:${i}px;
           border-radius:50%;
         `)
    }, 30);


}

//回到顶部的事件

var obtn = document.querySelector('.arrow-1');
var timer = null;
var isTop = true;
//获取页面的可视窗口高度
var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

//滚动条滚动时触发
window.onscroll = function () {
    //在滚动的时候增加判断
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;//特别注意这句，忘了的话很容易出错
    if (osTop >= clientHeight) {
        obtn.style.display = 'block';
    } else {
        obtn.style.display = 'none';
    }

    if (!isTop) {
        clearInterval(timer);
    }
    isTop = false;
};


function getTop() {

    //设置定时器
    timer = setInterval(function () {
        //获取滚动条距离顶部的高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器

        //减小的速度
        var isSpeed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
        //console.log( osTop + isSpeed);

        isTop = true;

        //判断，然后清除定时器
        if (osTop == 0) {
            clearInterval(timer);
        }
    }, 30);


};


