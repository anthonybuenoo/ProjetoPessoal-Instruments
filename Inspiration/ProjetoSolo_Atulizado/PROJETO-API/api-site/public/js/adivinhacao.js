


   var tentativas = 0;
   
   function sorteia() {

       return Math.round(Math.random()* 14 + 1);

    }

    function sorteiaNumeros(quantidade) {

        var segredos = [];

        var numero = 1;

        while(numero <= quantidade) {

              var numeroAleatorio = sorteia();
              var achou = false;

              if (numeroAleatorio !== 0) {
                     for(var posicao = 0; posicao < segredos.length; posicao++) {

                           if(segredos[posicao] == numeroAleatorio){
                                achou = true;
                                break;
                           }

                     }

                     if (achou == false) {
                           segredos.push(numeroAleatorio);
                           numero++;
                     }
              }

        }

        return segredos;

    }

    var segredos = sorteiaNumeros(2);

    console.log(segredos);

 


    function verifica() {
      
      var achou = false;
      tentativas++

       for(var posicao = 0; posicao < segredos.length; posicao++) {
            
              if(ipt_gen.value == segredos[posicao]) {
                     alert("Você ACERTOU!");
                     div2.style.display = "block"
                     div1.style.display = "none"
                     achou = true
                     break;
                     
              } 

            }

            console.log(tentativas);


            if (tentativas < 3) {
                  
                 if(achou == false ) {

                  alert("Você ERROU!");
           }

      }   

      if (tentativas == 3 && achou == false) {
            
            alert('Voce errou,Acabou suas tentativas')
            div3.style.display = "block"
            div1.style.display = "none"
           div2.style.display = "none"
            
      }

      // condição 1

      if (ipt_gen.value == 1 && ipt_gen.value == segredos[segredos.indexOf(1)] ) {

         
            img1.innerHTML = `  <img src="https://i2.wp.com/maistocadas.mus.br/wp-content/uploads/2019/06/musicas-gospel-mais-tocadas.png?fit=600%2C359&ssl=1"  style="width: 400px;" alt="">`  
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/lzCf7JyHbPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                 
      }


      else if (ipt_gen.value == 2 && ipt_gen.value == segredos[segredos.indexOf(2)] ) {

           
            img1.innerHTML = `  <img src="https://img.freepik.com/vetores-gratis/palavra-de-neon-de-rap-e-microfone-no-contorno-de-chama_1262-11901.jpg?size=338&ext=jpg"  style="width: 400px;height:300px;" alt="">`            
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7pD8k2zaLqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      }

      else if (ipt_gen.value == 3 && ipt_gen.value == segredos[segredos.indexOf(3)] ) {

         
            img1.innerHTML = `  <img src="data:image/jpeg;base64,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"  style="width: 400px;" alt="">`   
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dvFkPDWk0OM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`        
      }

      else if (ipt_gen.value == 4 && ipt_gen.value == segredos[segredos.indexOf(4)] ) {

          
            img1.innerHTML = `  <img src="https://musica.culturamix.com/blog/wp-content/uploads/2020/01/Trap.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/6Tlscs__yf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 5 && ipt_gen.value == segredos[segredos.indexOf(5)] ) {

           
            img1.innerHTML = `  <img src="https://www.vagalume.com.br/1470154983100588/default"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/uph0CERrjPM?start=28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 6 && ipt_gen.value == segredos[segredos.indexOf(6)] ) {

            
            img1.innerHTML = `  <img src="https://pausadrammatica.files.wordpress.com/2013/10/pop-art-gary-grayson.jpg?w=736"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/MOWDb2TBYDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 7 && ipt_gen.value == segredos[segredos.indexOf(7)] ) {

         
            img1.innerHTML = `  <img src="http://www.fmodia.com.br/wp-content/uploads/2018/07/me-encontra-no-pagode-rei-do-bacalhau-fm-o-dia-01.jpg"  style="width: 400px;" alt="">`  
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/EfXB0cHkNB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`        
      }
      else if (ipt_gen.value == 8 && ipt_gen.value == segredos[segredos.indexOf(8)] ) {

            
            img1.innerHTML = `  <img src="https://4429028l.ha.azioncdn.net/img/2020/09/produto/4555/1/large/reggae-just-relax-02.jpg"  style="width: 400px;" alt="">`
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/fxvUzfzr6-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`          
      }

      else if (ipt_gen.value == 9 && ipt_gen.value == segredos[segredos.indexOf(9)] ) {

        
            img1.innerHTML = `  <img src="https://img.vagalume.fm/1464201608479108132/bg";  style="width: 400px;" alt="">`    
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/-B19u9tHnIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`      
      }
      else if (ipt_gen.value == 10 && ipt_gen.value == segredos[segredos.indexOf(10)] ) {

        
            img1.innerHTML = `  <img src="https://www.vagalume.com.br/146411300413492499/default"  style="width: 400px;" alt="">`   
            iframe2.innerHTML =   `<iframe width="560" height="315" src="https://www.youtube.com/embed/5_voPff_EPE?start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`      
      }
      else if (ipt_gen.value == 11 && ipt_gen.value == segredos[segredos.indexOf(11)] ) {

        
            img1.innerHTML = `  <img src="https://cdns-images.dzcdn.net/images/cover/e988a0aed4092034d00b0421569253c8/500x500.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/_mVW8tgGY_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }
      else if (ipt_gen.value == 12 && ipt_gen.value == segredos[segredos.indexOf(12)] ) {

            img1.innerHTML = `  <img src="https://image.freepik.com/vetores-gratis/instrumentos-musicais-de-jazz_81894-3155.jpg"  style="width: 400px;" alt="">`  
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/gy1B3agGNxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`       
      }
      else if (ipt_gen.value == 13 && ipt_gen.value == segredos[segredos.indexOf(13)] ) {

          
            img1.innerHTML = `  <img src="https://i.ytimg.com/vi/EV_26_5FRzA/hqdefault.jpg"  style="width: 400px;" alt="">`   
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/bWnS2dIDgQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`       
      }

      else if (ipt_gen.value == 14 && ipt_gen.value == segredos[segredos.indexOf(14)] ) {

         
            img1.innerHTML = `  <img src="http://pm1.narvii.com/6947/a1fad3f9b80150f374d1653c4f8e425adb8c3ad2r1-900-500v2_uhq.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/4z-RgbJ8NJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 15 && ipt_gen.value == segredos[segredos.indexOf(15)] ) {

            
            img1.innerHTML = `  <img src="https://www.univeritas.com/sites/ung.br/files/fields/imagemTopo/noticias/2018/11/samba.png"  style="width: 400px;" alt="">`   
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1i38P2MgHBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

























    
     
       ipt_gen.value = "";
       ipt_gen.focus();

    }

    
    function recomecar() {
          location.reload(div1);
       
    }