function myFunction(email)
{
if(myFunction.value==" ")
{
	alert("Please fill all the field");
	return false;
}

else
{
	alert("Successfully Registered").then(response => {
	window.location.href = "join_with_us.html";
})
}
}
