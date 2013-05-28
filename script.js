(function() {
    var ID_NOTIFICATION = 'notification';
    var div = document.createElement('div');
    div.id = ID_NOTIFICATION;
    div.innerHTML = location.href;
    document.body.appendChild(div);
})();
