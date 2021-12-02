$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    title:'Digite o valor', 
    html:true,
    content:'<div class="container"><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"><div class="input-group-append"><span class="input-group-text">.00</span></div></div><button type="button" class="btn btn-success">Confirmar</button></div>'});   
    return;
}); 