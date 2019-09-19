var a=25,b=30,c=10;
if(a>b&&a>c)
{
  console.log("a is greater");
}
else if(b>a&&b>c)
{
  console.log("b is greater");
}
else 
{
  console.log("c is greater");
}
(function date()
{
  var day=new Date().getDay(); //store in array form like sunday =0;
 switch(day){
case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case  6:
      console.log("Saturday");
      break;
    default:
      console.log("Unknown Day");
 }
  
})();
