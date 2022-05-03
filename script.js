// Não Esta funciondo
$('a').hover(function(){  
setTimeout(() => {
    sessao = $(this).attr('href');
    $( this ).trigger( "click" );

     window.location.href="./index.html"+sessao;

}, 2000);
});
