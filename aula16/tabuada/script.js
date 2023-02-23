function tabuada(){
var n=window.document.getElementById('txtn')
var res=window.document.getElementById('res')
var tab=window.document.getElementById('seltab')
if(n.value.length==0){
    window.alert('Por favor, digite um número!')
}
else{
    var n=Number(n.value)
    var c=1
    tab.innerHTML=''
    while(c<=10){
        var item=window.document.createElement('option')
        item.text=`${n} x ${c} = ${n*c}`
        item.value=`tab${c}`
        tab.appendChild(item)
        c++
    }
}


}