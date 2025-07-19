const menuBar = document.getElementById('menu-Bar');
const sideBar = document.getElementById('side-Bar');
    
 
  
        menuBar.addEventListener('click', () => {
          sideBar.classList.toggle('open');
        });
      
  


      

            const close = document.getElementById('Close')
 
            close.addEventListener('click', () => {
                sideBar.classList.toggle('open');
            });

            // darkmode toggle

              const click =   document.getElementById('toggleA')
     
          flag =1;
          click.addEventListener('click', function(){
            const boll = document.getElementById('darkmode')
            if(flag == 1){
                click.style.justifyContent ="right"
                click.style.border = " 3px solid white"
                boll.style.backgroundColor = "white"
                document.body.style.backgroundColor = "#212121"
                document.body.style.color = "#fff"

                sideBar.style.backgroundColor = "#212121"

                // const togleline = document.querySelectorAll('.toggle-line')
                // togleline.style.border = "none"
                
                
                flag = 0
            }
            else{
                click.style.justifyContent = "left"
                click.style.border = " 3px solid black"
                boll.style.backgroundColor = "black"
                document.body.style.backgroundColor = "#fff"
                document.body.style.color = "#000"
                sideBar.style.backgroundColor = "#fff"
                flag = 1;
            }
        })
   
     

 
