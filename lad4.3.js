function getTarget{
    if (!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elparent, elGrandparent;
    target = getTarget(e);

    if ( target.nodeName.tolowerCase()=="a"){
        eJListItem = target.parentNode;
        eJlist = eJlistItem.parentNode;
        eJlist.removeChild(eJlistItem)
    }
    if ( target.nodeName.tolowerCase()=="em"){
        eJListItem = target.parentNode.parentNode;
        eJlist = eJlistItem.parentNode;
        eJlist.removeChild(eJlistItem)
    }
    if (e.preventDefault){
        e.preventDefault();
    }else{
        e.returnvalue = false;
    }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click',function(e){itemDone(e);
    },false);
} else{
    el.attachEvent('onclick', function(e){itemDone(e);
    });
}