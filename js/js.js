$(document).ready(function(){
    //          $(".submit").click(fuction(){
    //                    event.preventDefault();
                       console.log("Clicked button");
                       var email = $(".email").val();
                       var name = $(".name").val();
                       var message = $(".message").val();
                       Var statusElm = $(".submit");
                       if(email.length > 5 && email.include("@") && email.include("."){
                           console.log("Email is valid");
                       });
                        else {
                          console.log("Email is not valid");
                   }
                  });
           })