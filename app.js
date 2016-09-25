function hel(){
    //var testrate= document.getElementById("test").value;
    var testrate= $("#test").val();
    //var timeslot= document.getElementById("time").value;
    var timeslot= $("#time").val();
    var result= testrate*timeslot;
    window.alert("Your bill is "+result);

   
}


    function validate()
      {
      
         if( document.forms["health"]["pname"].value == "" )
         {
            window.alert( "Please provide your name!" );
            document.health.pname.focus() ;
            return false;
         }
         
         if( document.forms["health"]["ag"].value == "" )
         {
            window.alert( "Please provide your age!" );
            document.health.ag.focus() ;
            return false;
         }

         if( document.forms["health"]["wt"].value == "" )
         {
            window.alert( "Please provide your weight!" );
            document.health.wt.focus() ;
            return false;
         }
         
         
         
         
         return( true );
      }

      function allin(){
          validate();
          hel();

      }

