
console.log(felizinho);
var felizinho = Number(Math.random()*9+1).toFixed()
var calminho = Number(Math.random()*9+1).toFixed()
var apaixonadinho = Number(Math.random()*9+1).toFixed()
var motivadinho = Number(Math.random()*9+1).toFixed()

console.log(felizinho)
console.log(calminho)
console.log(motivadinho)
console.log(apaixonadinho)




    function voltar() {

        location.reload(aparece_div.value);
        
    }

  
function mostrar() {


    

    if (sel_sentimento.value == 'selecioneEmo' || sel_genero_musical.value == 'selecioneGen') {
      
    }
    else{
        refresh.style.display ="block"
    }

   

    if (sel_sentimento.value == 'selecioneEmo' || sel_genero_musical.value == 'selecioneGen') {

        alert('Selecione alguma emocão ou genero')
        
        
    }

    if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'pop' ) {
        felizinho++
        
        aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/MOWDb2TBYDg?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
        sessionStorage.setItem('feliz_pop',1);
    }
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'rock' ) {
        felizinho++
        aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/Y-NjZp7Aurg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
        sessionStorage.setItem('feliz_rock',2);
    }
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'MPB' ) {
        felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;"  width="560" height="315" src="https://www.youtube.com/embed/uph0CERrjPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
    sessionStorage.setItem('feliz_MPB',3);
}
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'rap' ) {
        felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/7pD8k2zaLqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    sessionStorage.setItem('feliz_rap',4);
}

else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'funk' ) {
    felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/bWnS2dIDgQA?start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    sessionStorage.setItem('feliz_funk',5);
}

else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'gospel' ) {
    felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/lzCf7JyHbPg?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   `
    sessionStorage.setItem('feliz_gospel',6);
}


else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'pop' ) {
    calminho++
    sessionStorage.setItem('calmo_pop',7);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/vD0JsUY4ATE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'rock' ) {
    sessionStorage.setItem('calmo_rock',8);
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/5Nj1D2y-PY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'MPB' ) {
    calminho++
    sessionStorage.setItem('calmo_MPB',9);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/V6kTUpRoRHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'rap' ) {
    calminho++
    sessionStorage.setItem('calmo_rap',10);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/TQ5DUv_ZwRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'funk' ) {
    calminho++
    sessionStorage.setItem('calmo_funk',11);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/D91HXC_o_QQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'gospel' ) {
    calminho++
    sessionStorage.setItem('calmo_gospel',12);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/YDbtPDbHdqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}



 else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'pop' ) {
    sessionStorage.setItem('motivado_pop',13);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/Svtr-p4mrQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'rock' ) {
    sessionStorage.setItem('motivado_rock',14);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/04854XqcfCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'MPB' ) {
    sessionStorage.setItem('motivado_mpb',15);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/FmMleq61iJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'rap' ) {
    sessionStorage.setItem('motivado_rap',16);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/h8lzw6ZRjLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'funk' ) {
    sessionStorage.setItem('motivado_funk',17);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/5LqeD-m7Iho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'gospel' ) {
    sessionStorage.setItem('motivado_gospel',18);
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/UnEd_pFGWGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}



 else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'pop' ) {
    sessionStorage.setItem('apaixonado_pop',19);
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/9YcrMk_cZyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'rock' ) {
    sessionStorage.setItem('apaixonado_rock',20);
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/8aZHCPc9EwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'MPB' ) {
    sessionStorage.setItem('apaixonado_mpb',21);
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/wyaCWQvOLYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'rap' ) {
    sessionStorage.setItem('apaixonado_rap',22);
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe  style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/yfGMPDKq1Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'funk' ) {
    apaixonadinho++
    sessionStorage.setItem('apaixonado_funk',23);
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/dNNL70kE6Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'gospel' ) {
    apaixonadinho++
    sessionStorage.setItem('apaixonado_gospel',24);
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/Df8Wxxjv5Xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}


}


localStorage.setItem('feliz',felizinho);
localStorage.setItem('calmo',calminho);
localStorage.setItem('apaixonado',apaixonadinho);
localStorage.setItem('motivado',motivadinho);









