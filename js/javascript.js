  // شكاوي واقتراحات                  amaar@takafulmia.sa
  // توظيف                             afnan@takafulmia.sa
  // مبيعات التأمين                   nader@takafulmia.sa
  // وكله بيروح منه نسخة ل            info@takafulmia.sa


  // A

  // name              : takafulmia
  // Email           :   website@takafulmia.sa
  // User ID         :  user_M3GlqTp0kmfahh5EjxGdl
  // Email Services  :   service_a00zzrd

  // template :  
  // 1-To_amaar_suggestion : template_ykfaqlt
  // 2-To_afnan_emp        : template_2f1do3o



  // B

  // name            : nader
  // Email           :   nader@takafulmia.sa
  // User ID         :  user_DFBlK1p8X8bkOS87zd319
  // Email Services  :   service_illbzxf

  // template :  
  // 3-To_nader_sale : template_18coxxp




  var code;

  function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
      "0123456789abcdefghijklmnopqrstuvwxy";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 70;
    var ctx = canv.getContext("2d");
    ctx.font = "30px Cairo";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  }



  // $("#button").click(function () {
  //   $('html, body').animate({
  //     scrollTop: $("#services").offset().top
  //   }, 2000);
  // });


  function validations(params) {

    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      num: document.getElementById("num").value,
      sub: document.getElementById("sub").value,
      messg: document.getElementById("messg").value,

    };
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mailformat)) {

      if (num.value.length == 10) {

        event.preventDefault();
        // debugger

        var radios = document.getElementsByName('opti');



        if (document.getElementById("cpatchaTextBox").value == code) {
          // alert("Valid Captcha")

          for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              // do whatever you want with the checked radio

              if (radios[i].value == "sugg") {
                (function () {
                  // https://dashboard.emailjs.com/admin/integration
                  emailjs.init('user_M3GlqTp0kmfahh5EjxGdl');
                })();
                emailjs.send('service_a00zzrd', 'template_ykfaqlt', templateParams);
                alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");
                // alert(messg.value);
                console.log(radios[i].value);

                window.location.href = "file:///C:/Users/MOHAMAD_ALKHBBAZ/Desktop/website/insurance/takafulmia/index.html";

                return true;


              } else {
                if (radios[i].value == "emp") {
                  (function () {
                    // https://dashboard.emailjs.com/admin/integration
                    emailjs.init('user_M3GlqTp0kmfahh5EjxGdl');
                  })();
                  emailjs.send('service_a00zzrd', 'template_2f1do3o', templateParams);
                  alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");
                  // alert(radios[i].value);
                  console.log(radios[i].value);

                  window.location.href = "file:///C:/Users/MOHAMAD_ALKHBBAZ/Desktop/website/insurance/takafulmia/index.html";
                  return true;



                } else {
                  if (radios[i].value == "sales") {
                    (function () {
                      // https://dashboard.emailjs.com/admin/integration
                      emailjs.init('user_DFBlK1p8X8bkOS87zd319');
                    })();
                    emailjs.send('service_illbzxf', 'template_18coxxp', templateParams);
                    alert(" تم ارسال طلبك سوف يتم التواصل معكم في اقرب وقت وشكرا لك ");
                    console.log(radios[i].value);
                    window.location.href = "file:///C:/Users/MOHAMAD_ALKHBBAZ/Desktop/website/insurance/takafulmia/index.html";

                    return true;

                  }
                }
              }


            }
          }


        } else {
          alert("رمز التحقق غير صحيح الرجاء اعادة المحاولة ");
          createCaptcha();
          return false;

        }

      } else {
        // error.innerText = "مش رقم";
        alert("رقم الهاتف غير صحيح");
        return false;
      }
    } else {

      alert("البريد الإلكتروني غير صحيح");

      return false;

    }

  }