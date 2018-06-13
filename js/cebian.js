
function initTree(t) {
    var tree = document.getElementById(t);

    var lists = tree.getElementsByTagName('li');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i];//li
        (function (num) {
            var sub_ul = item.getElementsByTagName('ul');
            var a_el = item.getElementsByTagName('a');
            if (sub_ul.length != 0) {
                sub_ul[0].style.display = 'none';

                a_el[0].onclick = function () {
                    if (sub_ul[0].style.display == 'block') {
                        sub_ul[0].style.display = 'none';
                    } else {
                        sub_ul[0].style.display = 'block';
                    }
                }
            }
            else{
                
                
            }

        })(i);
    }

}


window.onload = function () {
    initTree('main_navs')
}