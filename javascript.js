function terimainput(){
	var x=document.forms['biodata']['nik'].value;
	var y=document.forms['biodata']['nama'].value;
	var z=document.forms['biodata']['alamat'].value;
	var a=document.forms['biodata']['agama'].value;
	var b=document.forms['biodata']['nama ayah'].value;
	var c=document.forms['biodata']['nama ibu'].value;

	var tabel = document.getElementById("terimainput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
	cell5.innerHTML = b;
	cell6.innerHTML = c;
}