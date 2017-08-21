$(document).ready(function() {

//récupère le contenu de post_it.php
//{ } paramètres post
//displayPostits : fonction callback
//"json" type des données attendues

$("body").append('<div id="board"></div>');
var button_add = $("<div/>");
button_add.addClass("button").attr("id", "button_ad").append(" ").click(postit_add);
$("body").append(button_add);
$.post("post_it.php", {}, display_all_postits, "json");
});


function display_all_postits(data) {
    $.each(data, display_postit);
}


function display_postit(i, postit) {
    var div_postit = $("<div/>");
    div_postit
    .addClass('postit')
    .css({
        top: postit.y + "px",
        left: postit.x + "px",
    })
    .draggable({
        containment: "parent",
        zIndex: 100,
        start: drag_start,
        stop: drag_stop,
    })
    .data(postit);
    var text_postit = $("<div/>");
    text_postit.addClass('text_postit').append(postit.content.replace(/\n/g,"</br>"));
    div_postit.append(text_postit);
    $("#board").append(div_postit);
//text_postit.click(edit_content);
$('.text_postit').click(edit_content);

var delete_postit = $('<div/>');
delete_postit
.addClass('btn-delete')
.attr('delete-button');
div_postit.append(delete_postit);
delete_postit.click(remove_postit);
}

function edit_content(){

    var text_box = $(this);
    var parent = $(this).parent();
    var edit_box = $("<textarea/>");
    edit_box.addClass("edit_box");
    edit_box.val($(this).html().replace(/<\/br>/g,"\n"));
    $(this).replaceWith(edit_box);
    edit_box.focus();
    edit_box.blur(function(event) {
        var postit = {};
        var html = $(this).val();
        postit.id = parent.data().id;
        postit.content = $(this).val();
        postit.color = parent.data().color;
        postit.y = parent.position().top;
        postit.x = parent.position().left;
        $.post('post_it.php', {"action": "update", "value": postit}, function(data) {
        }, "json");
        $(this).replaceWith(text_box);
        text_box.html(html.replace(/\n/g,"</br>"));
        text_box.click(edit_content);
    });
}

function drag_start(event, ui) {

}

function drag_stop(event, ui) {

    var postit = {};
    postit.id = $(this).data().id;
    postit.content = $(this).children().html();
    postit.color = $(this).data().color;
    postit.y = ui.position.top;
    postit.x = ui.position.left;

    $.post('post_it.php', {"action": "update", "value": postit}, function(data) {  }, "json");
}

function postit_add() {
    $.post('post_it.php', {"action": "create"}, function(data) {
        var postit = data[data.length - 1];
        display_postit(-1, postit);
    }, "json");
}

function remove_postit(){
    var id = $(this).parent().data().id;
    console.log('remove : '+id)
    $.post('post_it.php', {"action": "delete", "value" : id}, function(data) {
        console.log(data);
    }, "json");
    $(this).parent().remove();
}

