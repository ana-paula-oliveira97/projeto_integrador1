function validar(){
    var nome =Formulário.nome.value;
    var contato =Formulário.contato.value;
    var semana =Formulário.semana.value;
    var horario =Formulário.horario.value;
    
    if(nome == ""){
    alert('Prencha o campo nome');
    Formulário.nome.focus();
    return false;
    }
    if(contato ==""){
    alert('Prencha o campo contato');
    Formulário.contato.focus();
    return false;
    }
    if(semana == ""){
    alert('Selecione uma opção');
    Formulário.semana.focus();
    return false;
    }
    if(horario == ""){
    alert('Selecione uma opção');
    Formulário.horario.focus();
    return false;
    }
    
    }
