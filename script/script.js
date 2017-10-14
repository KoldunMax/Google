var inputrq = document.getElementById('enterRq');
var main_field = document.getElementById('id_main_field');


inputrq.addEventListener('click', effects_for_mainfield); 

document.body.addEventListener('click', delete_effect_from_mainfield);


function effects_for_mainfield(e){
		
	main_field.classList.remove("main_field_effects");
	main_field.classList.add('delete_effects_from_mainfield');
	e.stopPropagation();

}

function delete_effect_from_mainfield(e){

	if(main_field.classList.contains('delete_effects_from_mainfield')){
		main_field.classList.remove('delete_effects_from_mainfield');
		main_field.classList.add('main_field_effects');
	}

}

/*.main_field_effects{
	box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
}

.delete_effects_from_mainfield{
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
}*/