   

   $("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#services").offset().top
    }, 2000);
  });


                function validations(params){
                 
                    var templateParams = {
                        name: document.getElementById("name").value,
                        email:  document.getElementById("email").value,
                        num:  document.getElementById("num").value,
                        sub:  document.getElementById("sub").value,
                        messg:  document.getElementById("messg").value,
                      
                    };
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                
                if(email.value.match(mailformat)){
                    
                    if(num.value.length == 10){
                         

                                             
                        var radios = document.getElementsByName('opti');

                        for (var i = 0, length = radios.length; i < length; i++) {
                          if (radios[i].checked) {
                            // do whatever you want with the checked radio
                        
                            if(radios[i].value= "sugg")
                            {
                              (function () {
                                emailjs.init('user_vrfq1VPKZAq9HGqsy5mbV');
                            })();
                            emailjs.send('service_0zd5y7d', 'template_jixqjdn', templateParams);
                          alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");
                            
                            return true;

                            }
                        else {
                            if(radios[i].value= "emp")
                            {
                            emailjs.send('service_m4yuili', 'template_jixqjdn', templateParams);
                          alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");
                          return true;

                          window.location.href = "file:///C:/Users/MOHAMAD_ALKHBBAZ/Desktop/website/insurance/site_insurance/index.html";

                            }
                           else{ 
                            if(radios[i].value = "sales")
                            {
                            emailjs.send('service_g2uybnt', 'template_18coxxp', templateParams);
                          alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");

                            return true;

                            }
                        }
                        }

                            // only one radio can be logically checked, don't check the rest
                            break;
                          }
                        }
                                
                                
                    }
                    else
                    { 
                         // error.innerText = "مش رقم";
                         alert("رقم الهاتف غير صحيح");
                        return false ;
                    }
                }
                else{
                
                    alert("البريد الإلكتروني غير صحيح");

                    return false ;
                
                }
                }
                
              