$('a').hover(function(){  

    setTimeout(() => {

        sessao = $(this).attr('href');
        

        window.location.href="./index.html/"+sessao;

    }, 2000);
});
