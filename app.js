const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

form.addEventListener('submit', (event) => {
		event.preventDefault()
		nameValidate()
		usuarioValidate()
		emailValidate()
		mainPasswordValidate()
		comparePassword()
	})

function setError(index){
	campos[index].style.border = '2px solid #e43434'
	spans[index].style.display = 'block'
}

function removeError(index){
	campos[index].style.border = '2px solid ghostwhite'
	spans[index].style.display = 'none'
}

function nameValidate(){
	if(campos[0].value.length < 3){
		setError(0)
	}else{
		removeError(0)
	}
}

function emailValidate() {
  	let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  	if(emailPattern.test(campos[1].value)){
  		removeError(1)
  	}else{
  		setError(1)
  	}
}

function celularValidate(){
	console.log("Validando número de telefone celular...");
	let cellPattern = /^\(\d{2}\)\s?\d{5}-\d{4}$/
	if(cellPattern.test(campos[2].value)){
  		removeError(2)
  	}else{
  		setError(2)
  	}
}

