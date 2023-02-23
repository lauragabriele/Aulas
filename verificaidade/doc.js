function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')

    if (fano.value.length==0 || Number(fano.value>ano)){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano-Number(fano.value)
        var genero=''
        var img=window.document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade <10){
            img.setAttribute('src', 'bebemenino.png')
           }
            else if(idade<21){
                 img.setAttribute('src', 'jovemmas.png')
            }
            else if(idade<50){
                img.setAttribute('src', 'adultomas.png')

            }
            else{
                img.setAttribute('src', 'idosomas.png')
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade <10){
                img.setAttribute('src', 'bebemenina.png')

            }
            else if(idade<21){
                img.setAttribute('src', 'jovemfem.png')
            }
            else if(idade<50){
                img.setAttribute('src', 'adultafem.png')
            }
            else{
                 img.setAttribute('src', 'idosafem.png') 
            }
        }

        res.style.textAlign='center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos. `
        res.style.textAlign='center'
        res.appendChild(img) 
    }
}