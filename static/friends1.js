const images = (id, index) => {
         document.getElementById(id).style.display = 'block';
        var a1=document.getElementById("h51");
       if(id==='slide1')
        	a1.innerHTML="AMAN RAJ SUNDRAM";
        else if(id=="slide2")
            a1.innerHTML="SURAJ KUMAR";
         else if(id=="slide3")
            a1.innerHTML="KISHAN GUPTA";
         else if(id=="slide4")
            a1.innerHTML="BIJAY PARIHAR";
         else if(id=="slide5")
            a1.innerHTML="CHANDAN KUMAR";
          else if(id=="slide6")
            a1.innerHTML="KISHAN KUMAR";
          else if(id=="slide7")
           a1.innerHTML="PRIYANSHU NAYAN";
          else if(id=="slide8")
            a1.innerHTML="ANURAG RAI";
        else if(id=="slide9")
            a1.innerHTML="GAURAV RAI";
        else if(id=="slide10")
            a1.innerHTML="DEVENDRA";
        else if(id=="slide11")
            a1.innerHTML="VIVEK";
        else if(id=="slide12")
            a1.innerHTML="ANKIT RAJ";
        else if(id=="slide13")
            a1.innerHTML="VIKASH";
        else if(id=="slide14")
            a1.innerHTML="PRATEEK RAI";
        else if(id=="slide15")
            a1.innerHTML="UDIT WARSNEY";
        else if(id=="slide16")
            a1.innerHTML="SUPRABHAT KUMAR";
        else if(id=="slide17")
            a1.innerHTML="";
        else if(id=="slide18")
            a1.innerHTML="";
        else if(id=="slide19")
            a1.innerHTML="";
        else if(id=="slide20")
            a1.innerHTML="";
        else if(id=="slide21")
            a1.innerHTML="";
        else if(id=="slide22")
            a1.innerHTML="";


      for(let i=1; i<17; i++){
        let id = 'slide' + i;
        if(i!=index){
          document.getElementById(id).style.display = 'none';
        }
       

      }
     }
  function slideShow(){
    let index = 1;
    setInterval(

      () => {
        let id = 'slide' + index;
        if(index<17){
          images(id, index);
          index += 1;
        } else {
          index = 1;
        }; 
    }, 2000)
  }
  slideShow();//function call inside html