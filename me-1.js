const ent1 = document.getElementById("n1")
const ent2 = document.getElementById("n2")
const par = document.getElementById("p1")

function add(a,b){
    let c = a+b;
    par.innerText=`Addtion of ${a} and ${b} = ${c}`
}

function sub(a,b){
    let c = a-b;
    par.innerText=`Substraction of ${a} and ${b} = ${c}`
}

function mul(a,b){
    let c = a*b;
    par.innerText=`Multipilication of ${a} and ${b} = ${c}`
}

function div(a,b){
    let c = a/b;
    par.innerText=`Division of ${a} and ${b} = ${c}`
}

function mat(a,b){
    var c ='';
    var num=a+b;
    for(i=1;i<=num;i++){
            for(j=1;j<=num;j++){
                c+='*'
            }
        c+='\n'
    }
    par.innerText=` of ${a} and ${b} =\n ${c}`
}
