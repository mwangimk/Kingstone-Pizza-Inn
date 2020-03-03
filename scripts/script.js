$(document).ready(function()
{
  $("button#submit").click(function(e)
  {
    e.preventDefault();
    var myType=$("#type option:selected").html();
    var mySize=$("#size option:selected").html();
    var myCrust=$("#crust option:selected").html();
    var myTopping=$("form#topping input:selected").val();
    alert("Your pizza type is "+myType+ " size "+mySize+" with "+myCrust+" and "+myTopping+" topping");
  });
$("button#final-order").click(function()
{
  var yourName=$("#name").val();
  var yourPhone=$("#phone").val();
  var yourLocation=$("#location").val();
  alert("Jambo "+yourName+" your pizza shall be delivered to "+yourLocation+" in 120 minutes. Thank you for choosing Kingstone Pizza Inn")
});
  
});