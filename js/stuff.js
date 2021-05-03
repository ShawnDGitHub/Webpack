//搜索栏展开
function searchEx() {
    document.getElementById("searchBar").setAttribute("id","searchBarEx");
    document.getElementById("searchPage").setAttribute("id","searchPageEx");
    document.getElementById("line").setAttribute("id","lineEx");
    document.getElementById("cover").setAttribute("id","coverEx");
    document.getElementById("searchStuff").setAttribute("id","searchStuffEx");
    

    return
}
//搜索结果算法
function searchResult() {

   return
}
//搜索栏关闭
function ExBack() {
    document.getElementById("searchPageEx").setAttribute("id","searchPage");
    document.getElementById("searchBarEx").setAttribute("id","searchBar");
    document.getElementById("lineEx").setAttribute("id","line");
    document.getElementById("coverEx").setAttribute("id","cover");
    document.getElementById("searchStuffEx").setAttribute("id","searchStuff");

    return
}
//显示记录卡
function create() {
     document.getElementsByClassName("context0")[0].setAttribute("class","context0Ex");
    //  document.getElementsByClassName("press")[0].setAttribute("class","pressEx");
     document.getElementById("text").setAttribute("id","textEx");
     document.getElementById("add").setAttribute("id","addEx");

     document.getElementsByClassName("for")[0].setAttribute("class","form");
     document.getElementById("sub").setAttribute("id","subEx");
    

     return
}
//隐藏记录卡
function uncreate() {
  document.getElementsByClassName("context0Ex")[0].setAttribute("class","context0");
    //  document.getElementsByClassName("pressEx")[0].setAttribute("class","press");
     document.getElementById("textEx").setAttribute("id","text");
     document.getElementById("addEx").setAttribute("id","add");

     document.getElementsByClassName("form")[0].setAttribute("class","for");
     document.getElementById("subEx").setAttribute("id","sub");
}
//创建卡片





//输入强调
function input() {
  var in1 = document.getElementById("input1");
  if(in1) in1.setAttribute("id","input1Ex");
  return
}


//检测标签长度
function label() {
  var val = document.getElementById("input0").value;
  var intLen = 0;
    for(var i = 0; i < val.length; i++) {
      if(val.charCodeAt(i) < 0 || val.charCodeAt(i) > 255) intLen = intLen + 2;
      else intLen += 1;
    }
    if(intLen >= 11) {
      document.getElementById("mention0").setAttribute("id","mention0Ex");
    }
    else {
      document.getElementById("mention0Ex").setAttribute("id","mention0");
    }

    return intLen;
}

//载入图片
var getUserPhoto = document.getElementById("inputPic");
      getUserPhoto.onchange = function () {
        var file = this.files;
        console.log(file);
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function () {
          var image = document.createElement("img");
          image.width = "400";
          image.src = reader.result;
          var showPicture = document.getElementById("show");
          showPicture.append(image);
        };
      };