var show=1;
			document.getElementById('first_logo').style.display="block";
			document.getElementById('btn-img').onclick = () =>	
					  {
								if (show==1) {
                                     
                                     document.getElementById('first_logo').style.display="none";
                                     document.getElementById('second-logo').style.display="block";
                                     show++;


								}
								else if (show==2) {
                                     
                                     document.getElementById('second-logo').style.display="none";
                                     document.getElementById('thrid-logo').style.display="block";
                                     show++;


								}

								else if(show==3)
								{
									document.getElementById('thrid-logo').style.display="none";
									document.getElementById('fourth-logo').style.display="block"
									show++;

								}
								else if (show==4) {

									document.getElementById('fourth-logo').style.display="none";
									document.getElementById('first_logo').style.display="block"
									show=1;
								}
									
                      }


         // VIEW PORT SIZE*******

						let viewportHeight = window.innerHeight;
						let viewportWidth = window.innerWidth;
						let size=viewportHeight + viewportWidth;
						alert("ViewPort-Size =" + size);


        // SCROLLING POPUP******
                    
            			window.addEventListener('scroll', () =>{
		             if (window.pageYOffset >= 900){

		             document.querySelector(".popup").style.display="block";}
		              // if(window.pageYOffset < 900) 
		              else 

		              	{document.querySelector(".popup").style.display="none";}

		             document.querySelector("#close").addEventListener("click", function(){
	                 document.querySelector(".popup").style.display="none"; });


	               

        
					});
