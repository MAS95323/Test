function calBMI(){
	var W= Number(document.getElementById("txtWeight").value);
	var H= Number(document.getElementById("txtHeight").value);
	
	var bmi=W/(H*H);
	
	document.getElementById("txtBMI").value=""+bmi;
}