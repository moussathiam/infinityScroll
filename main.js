$('#load').hide();
var num = 1;
function adds() {
    for (let index = 0; index < 10; index++) {
        setTimeout(() => {
            var div = `<div class="col-sm-3">
                        <div>numero ${num}</div>
                    </div>`;
            $("#elements").append(div);
            num++;
        }, index * 200);
    }
}
adds();

function load() {
    $('#load').show();
    setTimeout(() => {
        adds();
        $('#load').hide();
    }, 2000);
}
var temptop = 0
var tempbottom = 0
var etat = 1;
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop + clientHeight == scrollHeight) {
        load();
    }

    console.log(scrollTop, temptop);

    if(scrollTop >= temptop)
    {
        if(scrollTop - temptop > 100 && etat == 1){
            temptop = scrollTop;
            tempbottom = scrollTop;
            etat = 0;
            $(".header").animate({ top: "-100px" }, 700);
        }
    }else{
        temptop = scrollTop;
    }

    if(scrollTop <= tempbottom)
    {
        if(tempbottom - scrollTop > 100 && etat == 0){
            tempbottom = scrollTop;
            temptop = scrollTop;
            etat = 1;
            $(".header").animate({ top: "0px" }, 700);
        }
    }else{
        tempbottom = scrollTop;
    }

});