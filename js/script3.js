

$(document).ready(function() {



    if(document.location.hash == "#eng"){
        if($.cookie('lang') == "rus") {
            $.cookie('lang', "eng", {
                expires: 5,
                path: '/'
            });
            location.reload();
        }
    }else if(document.location.hash == "#rus"){
        if($.cookie('lang') == "eng") {
            $.cookie('lang', "rus", {
                expires: 5,
                path: '/'
            });
            location.reload();
        }
    }



    if($.cookie('lang') != null){
        var lang = "#lang_"+$.cookie('lang');

        $(lang).addClass('active');


    }

    $('body').on('click', '[lang]', function () {
        $.cookie('lang', $(this).attr('lang'), {
            expires: 5,
            path: '/'
        });


        location.reload();
    });

    LoadingNews('all', 1);
    //News navigator
    jQuery('.page_navigator a').click(function(){
        var server_name = 'all';
        var page = $(this).attr('data-bind');
        var pages = $('.news_servers.' + server_name).attr('data-group');
        $(this).parent().siblings().removeClass('current');
        $(this).parent().addClass("current " + server_name);
        $(this).removeClass().addClass("page_active " + server_name);
        LoadingNews(server_name, page);
        return false;
    });










});

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function getURLAddresses( name ) {
    return decodeURI(
        (RegExp( '\/' + name + '(\/|)' ).exec( location )||[,null])[1]
    );
}

function LoadingNews(server_name, page){

    switch(server_name)
    {
        case 'lionna': var server_id = 0; break;
        case 'vidar':  var server_id = 1; break;
        case 'baldr':  var server_id = 2; break;
        case 'bartz':  var server_id = 3; break;
        case 'nanna':  var server_id = 4; break;
        case 'skadi':  var server_id = 5; break;
        case 'erica':  var server_id = 6; break;
        case 'eva':  var server_id = 7; break;
        case 'aria':  var server_id = 8; break;
        case 'teya':  var server_id = 9; break;
        case 'all':  var server_id = -1; break;
        default: document.location.pathname = '/'; break;
    }
    var pages = parseInt($('.news_servers.' + server_name).attr('data-group'));
    var page_count = 5;
    var page_del = (page_count - 1) / 2;
    if (pages > page_count)
    {
        if ((pages - page) >= page_count)
        {
            if ((page - page_del) <= 0)
            {
                $('.page_unactive.' + server_name).hide();
                $('b.' + server_name).hide();
                for (var i = 1; i <= page_count; i++) {
                    $('.page_unactive.' + server_name + '[data-bind="' + i + '"], .page_active.' + server_name + '[data-bind="' + i + '"]').show();
                    if (i > 1)
                    {
                        $('b.' + server_name + '[data-bind="' + i + '"]').show();
                    }
                }
            }
            else
            {
                $('.page_unactive.' + server_name).hide();
                $('b.' + server_name).hide();
                for (var i = (page - page_del); i <= (parseInt(page) + page_del); i++) {
                    $('.page_unactive.' + server_name + '[data-bind="' + i + '"], .page_active.' + server_name + '[data-bind="' + i + '"]').show();
                    if (i > (page - page_del))
                    {
                        $('b.' + server_name + '[data-bind="' + i + '"]').show();
                    }
                }
            }
        }
        else
        {
            if ((parseInt(page) + page_del) >= pages)
            {
                $('.page_unactive.' + server_name).hide();
                $('b.' + server_name).hide();
                for (var i = (page - (page_count - (pages - page + 1))); i <= pages; i++) {
                    $('.page_unactive.' + server_name + '[data-bind="' + i + '"], .page_active.' + server_name + '[data-bind="' + i + '"]').show();
                    if (i > (page - (page_count - (pages - page + 1))))
                    {
                        $('b.' + server_name + '[data-bind="' + i + '"]').show();
                    }
                }
            }
            else
            {
                if ((page - page_del) >= 1)
                {
                    var page_start = page - page_del;
                    var page_end = parseInt(page) + page_del;
                }
                else
                {
                    var page_start = 1;
                    var page_end = parseInt(page) + page_del + 1;
                }
                $('.page_unactive.' + server_name).hide();
                $('b.' + server_name).hide();
                for (var i = page_start; i <= page_end; i++) {
                    $('.page_unactive.' + server_name + '[data-bind="' + i + '"], .page_active.' + server_name + '[data-bind="' + i + '"]').show();
                    if (i > page_start)
                    {
                        $('b.' + server_name + '[data-bind="' + i + '"]').show();
                    }
                }
            }
        }
    }

    $('.page.' + server_name).hide();
    $('.news_servers').hide();
    $('.page.' + server_name + '[data-bind="' + page + '"]').show();
    $('.news_servers.' + server_name).show();
};












