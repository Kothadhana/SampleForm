$(".btn").click(function(){
  validate();
})
function validate()
{
  var l=["First Name",  "last Name" ,"mail ID", "password" , "Reenter Password"];
  for(var i=0;i<l.length;i++)
  {
    console.log(i);
    console.log(document.forms["MyForm"][l[i]].value);
    console.log(document.forms["MyForm"][l[i]].value=="");
    if(document.forms["MyForm"][l[i]].value=="")
    {
      alert(l[i]+" must be filled out");
      return false;
    }
  }
  return true;
}
