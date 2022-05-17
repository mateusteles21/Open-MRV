let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

$.getJSON(url, function(data){
    let conteudo = '<ul>';
    $.each(data, function(v, val){
        conteudo += '<li>'+val.nome+'</li>';
    });
    conteudo += '</ul>';
    $("#lista").html(conteudo);
});