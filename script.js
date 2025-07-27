const menuBar = document.getElementById('menu-Bar');
const sideBar = document.getElementById('side-Bar');
    
 
  
        menuBar.addEventListener('click', () => {
          sideBar.classList.toggle('open');
           
        });
      
  

        
        const close = document.getElementById('Close')
        
        close.addEventListener('click', () => {
            sideBar.classList.toggle('open');
         
            });