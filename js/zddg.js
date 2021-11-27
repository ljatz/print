/* javascript validator */			

		function chois(){
			document.getElementById('datepicker').style.visibility = 'hidden';
			document.getElementById('datepickers').style.visibility = 'hidden';
			document.getElementById('do').style.visibility = 'hidden';
			document.getElementById('bih').style.visibility = 'hidden';
			document.getElementById('od').style.display = 'none';
		}
		
		function pick(){
			var days = document.forms['my']['days'].value;
			
			if(days == 'jednog dana'){
				document.getElementById('datepicker').style.visibility = 'visible';
				document.getElementById('bih').style.visibility = 'visible';
				document.getElementById('do').style.visibility = 'hidden';
				document.getElementById('o').style.visibility = 'hidden';
				document.getElementById('od').style.display = 'none';
				document.getElementById('d').style.display = 'none';
				document.getElementById('datepickers').style.visibility = 'hidden';
			} else {
				document.getElementById('datepicker').style.visibility = 'visible';
				document.getElementById('bih').style.visibility = 'visible';
				document.getElementById('od').style.display = 'inline';
				document.getElementById('o').style.visibility = 'visible';
				document.getElementById('do').style.visibility = 'visible';
				document.getElementById('d').style.display = 'inline';
				document.getElementById('datepickers').style.visibility = 'visible';
			}
		}

	var d = new Date();
				
		function hit(){
			var name = document.forms['my']['names'].value;
			var gender = document.forms['my']['genders'].value;
			var days = document.forms['my']['days'].value;
			var datepicker = document.forms['my']['datepicker'].value;
			var datepickers = document.forms['my']['datepickers'].value;
			var sections = document.forms['my']['sections'].value;
			var day = datepicker.slice(0,2);
			// rješiti za mjesec
			var section;
			var sign;
			
			switch(sections){
				case 'tz':
					var section = 'Voditelj Pododsjeka za poslove tjelesne za&#353;tite';
					var sign = 'nikica mi&#353;&#263;evi&#263;';
				break;
				case 'in':
					var section = 'Voditelj Pododsjeka za poslove intervencije po dojavnom signalu';
					var sign = 'robert juren';
				break;
				case 'dc':
					var section = 'Voditelj Pododsjeka za poslove dojavnog centra';
					var sign = 'boris ivankovi&#263;';
				break;
				case 'zo':
					var section = 'Voditelj Pododsjeka za poslove za&#353;tite od po&#382;ara';
					var sign = 'ivana vuger';
				break;
			}		
		
			if((name.match(new RegExp(' ', 'g')) || []).length < 1 || isNaN(name) != true || name == ""){
				document.getElementById('alert').style.padding = '10px';
				document.getElementById('alert').innerHTML = 'upi&#353;i ime i prezime!';
				document.forms['my']['names'].focus();
			} else if (days == ''){
				document.getElementById('alert').style.padding = '10px';
				document.getElementById('alert').innerHTML = 'nije ispunjeno polje!';
				document.forms['my']['days'].focus();
			} else if(gender == ''){
				document.getElementById('alert').style.padding = '10px';
				document.getElementById('alert').innerHTML = 'nije ispunjeno polje!';
				document.forms['my']['genders'].focus();
			} else if(section == ''){
				document.getElementById('alert').style.padding = '10px';
				document.getElementById('alert').innerHTML = 'nije ispunjeno polje!';
				document.forms['my']['sections'].focus();			
			} else if(day <= d.getDate()){
				document.getElementById('alert').style.padding = '10px';
				document.getElementById('alert').innerHTML = 'nije dobar datum!';
			} else {
				document.getElementById('name').innerHTML = name;
				document.getElementById('dana').innerHTML = days;
				document.getElementById('gender').innerHTML = gender;
				document.getElementById('nyear').innerHTML = d.getFullYear() - 1;
				document.getElementById('date').innerHTML = datepicker;
				document.getElementById('dates').innerHTML = datepickers;
				document.getElementById('day').innerHTML = d.getDate();
				document.getElementById('month').innerHTML = d.getMonth() + 1;
				document.getElementById('year').innerHTML = d.getFullYear();
				document.getElementById('section').innerHTML = section;
				document.getElementById('sign').innerHTML = sign;
				window.print();
				location.reload();
				}
			}