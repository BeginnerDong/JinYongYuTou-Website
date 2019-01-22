window.base={
    g_restUrl:'https://xianjiaoda.solelycloud.com/api/public/index.php/api/v1/',


    getData:function(params){
        if(!params.type){
            params.type='get';
        }
        var that=this;
        $.ajax({
            type:params.type,
            url:this.g_restUrl+params.url,
            data:params.data,
            success:function(res){
                if(res.solely_code==201000){
                    var loca = window.location;
                    window.location.href = loca.origin + loca.pathname;
                }else if(res.solely_code==200000){
                /*	console.log(that.GetUrlRelativePath().substr(6,5));
                    if(that.GetUrlRelativePath().substr(5,4)=='user'||that.GetUrlRelativePath().substr(5,5)=='index'){
                        localStorage.removeItem('user_token');
                        localStorage.removeItem('user_no');
                        that.getUserToken();
                    }else if(that.GetUrlRelativePath().substr(5,8)=='join'){
                        localStorage.removeItem('join_token');
                        localStorage.removeItem('join_no');
                        window.location.href = './login.html'
                    };*/
                    if(localStorage.getItem('user_type')==0){
                    	window.location.href = './login.html'	
                    }else if(localStorage.getItem('user_type')==1){
                    	window.location.href = './manager_login.html'
                    }
                    localStorage.removeItem('token');
                    localStorage.removeItem('user_no');
                    localStorage.removeItem('user_type');
                    
                }else{
                    params.sCallback && params.sCallback(res);
                };
            },
            error:function(res){
                params.eCallback && params.eCallback(res);
            }
        });
    },

    articleGet:function(param,callback) {
  
        var allParams = {
            url:'Common/Article/get',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    labelGet:function(param,callback) {
  
        var allParams = {
            url:'Common/Label/get',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    userGet:function(param,callback) {
  
        var allParams = {
            url:'Base/User/get',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },
    relationGet(param,callback){
        var allParams ={
            url:'Common/Relation/get',
            type:'post',
            data:param,
            sCallback: function(data) {
                callback && callback(data);
            }
        };
        this.getData(allParams);       
    },


    relationAdd(param,callback){
        var allParams ={
            url:'Common/Relation/add',
            type:'post',
            data:param,
            sCallback: function(data) {
                callback && callback(data);
            }
        };
        this.getData(allParams);       
    },

    relationUpdate(param,callback){
        var allParams ={
            url:'Common/Relation/update',
            type:'post',
            data:param,
            sCallback: function(data) {
                callback && callback(data);
            }
        };
        this.getData(allParams);       
    },

    relationDel(param,callback){
        var allParams ={
            url:'Common/Relation/delete',
            type:'post',
            data:param,
            sCallback: function(data) {
                callback && callback(data);
            }
        };
        this.getData(allParams);       
    },

    userInfoUpdate:function(param,callback) {
  
        var allParams = {
            url:'Common/UserInfo/update',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    messageAdd:function(param,callback) {
  
        var allParams = {
            url:'Common/Message/add',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    messageGet:function(param,callback) {
  
        var allParams = {
            url:'Common/Message/get',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    messageUpdate:function(param,callback) {
  
        var allParams = {
            url:'Common/Message/update',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    getMemberToken:function(callback){
        var href =  window.location.href;
        console.log('href',href);
        var token = localStorage.getItem('member_token');
        if(token){
           callback&&callback();
        }else{
            window.location.href = './login.html'
        };
    },

    getManergerToken:function(callback){
        var href =  window.location.href;
        console.log('href',href);
        var token = localStorage.getItem('manerger_token');
        if(token){
           callback&&callback();
        }else{
            window.location.href = './login.html'
        };
    },

    login:function(param,callback) {

        var allParams = {
            url:'Func/Common/loginByUp',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    findKeyFromArray:function(Array,key,value) {  
        var new_array = []; 
        for (var i = 0; i < Array.length; i++) {
            
            if(Array[i][key]&&Array[i][key] == value){
                new_array.push(Array[i])
                console.log('Array',Array[i])
            };
        };
        return new_array; 
    },

    articleOne:function(param,callback) {
        var allParams = {
            url:'UserArticle/GetInfo',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    

    cloneForm:function(form) {
        var res =  JSON.parse(JSON.stringify(form));   
        return form; 
    },
    
    getDataSet:function(e) {   
        return e.target.dataset; 
    },
    
    GetRequest:function() {  
       var url = location.search; //获取url中"?"符后的字串  
       var theRequest = new Object();  
       if (url.indexOf("?") != -1) {  
          var str = url.substr(1);  //去掉“？”
          strs = str.split("&");  
          for(var i = 0; i < strs.length; i ++) {  
             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
          }  
       }  
       return theRequest;  
    },
    checkComplete:function(obj){
        var pass = true;
        for(var key in obj){
          if(!obj[key]){
            pass = false;
          };
        };
        return pass;
        console.log(pass);
    },

    computePageArr:function(self) {   
        self.allPages = Math.ceil(self.paginate['count']/self.paginate['pagesize']);
        console.log(self.allPages);
        self.pageArray = [];
        self.pageArray.push(self.paginate.currentPage);
        if(self.paginate.currentPage+1 <= self.allPages){
            if(self.paginate.currentPage+2 <= self.allPages){
                self.pageArray.push(self.paginate.currentPage+1);
                self.pageArray.push(self.paginate.currentPage+2);
            }else{
                self.pageArray.push(self.paginate.currentPage+1);
            }
        };
        if(self.paginate.currentPage-1 > 0){
            if(self.paginate.currentPage-2 > 0){
                self.pageArray.unshift(self.paginate.currentPage-1);
                self.pageArray.unshift(self.paginate.currentPage-2);
                
            }else{
                self.pageArray.unshift(self.paginate.currentPage-1);
            }
        };
         
    },

    changePage:function(dataSet,self) {   
        if(dataSet.type == 'next'){
            if(self.paginate.currentPage >= self.allPages){
                alert('已经到底啦')
            }else{
                self.paginate.currentPage++;
                self.getMainData(true);
            }
        };
        if(dataSet.type == 'back'){
            if(self.paginate.currentPage == 1){
                alert('已经没有啦')
            }else{
                self.paginate.currentPage--;
                self.getMainData(true);
            }
        };
         
    },
    
    linkTo:function(self) {   
        if(self.linkPage>self.allPages||self.linkPage<1){
            alert('没有那一页');
            self.linkPage = '';
        }else{
            self.paginate.currentPage = self.linkPage;
            self.getMainData(true);
        }
         
    },


    upLoadFile:function(param,callback) {
        var that=this;
        $.ajax({ // $.post，告辞
            type: 'post',
            contentType: false, // 关关关！必须得 false
                                // 这个不关会扔一个默认值 application/x-www-form-urlencoded 过去，后端拿不到数据的！
                                // 而且你甚至不能传个字符串 'multipart/form-data'，后端一样拿不到数据！
            processData: false, // 关关关！重点
            url: 'https://xianjiaoda.solelycloud.com/api/public/index.php/api/v1/Base/FtpFile/upload',
            data: param,
            success:function(res){

                if(res.solely_code==201000){
                    var loca = window.location;
                    window.location.href = loca.origin + loca.pathname;
                }else if(res.solely_code==200000){
                    localStorage.removeItem('token');
                    localStorage.removeItem('user_no');
                    localStorage.removeItem('user_type');
                    window.location.href = './login.html'
                }else{
                    callback && callback(res);
                };

            },
            error:function(res){
                callback && callback(res);
            }
        });
    },

	shortString:function(str,i){
	   if(str){
	     return str.substring(0,i);
	   };
	  console.log('str',666)
	},

}

// console.log(this);