$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
});

$('form').validate({
rules: {
    nome: {
        required: true
    },
    email: {
        required: true,
        email: true
    },
    telefone: {
        required: true
    }
},
messages: {
    nome: 'Por favor, insira o seu nome',
    email: 'Por favor, insira um e-mail válido',
    telefone: 'Por favor, insira o seu telefone'    
},
submitHandler: function (form) {
    alert("Recebemos seu ticket e logo entraremos em contato pelo telefone ou via Whatsapp!");
    form.reset();  // Reinicia o formulário após envio
},
invalidHandler: function (event, validador) {
    let invalidFields = validador.numberOfInvalids();  // Número de campos inválidos
    if (invalidFields) {
        alert(`Por favor, preencha ${invalidFields} campos para prosseguir com a compra!`);
    }
}
});