function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML=`agora são exatamente ${hora} horas.`
    if(hora>=0 && hora<12){
        //bom dia
        msg.innerHTML+='<p>Bom dia!</p>'
        img.src='manha.png'
        document.body.style.background='#cb7b39'
    }else if(hora>=12 && hora <=18){
        //boa tarde
        msg.innerHTML+='<p>Boa tarde!</p>'
        img.src='ta.png'
        document.body.style.background='#cab58e'
    }else{
        //boa noite
        msg.innerHTML+='<p>Boa noite!</p>'
        img.src='noite.png'
        document.body.style.background='#233b43'
}
}