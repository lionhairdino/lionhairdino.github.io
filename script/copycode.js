window.addEventListener("load", function(evnet) {
    document.querySelectorAll('pre > code.haskell').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'cp';

    button.addEventListener('click', function () {
        navigator.clipboard.writeText(codeBlock.innerText).then(function () {
            button.blur();

            button.innerText = 'copied!';
            button.style.backgroudColor = "lightblue";

            setTimeout(function () {
                button.innerText = 'cp';
            }, 2000);
        }, function (error) {
            button.innerText = 'Error';
        });
    });

    var pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('highlight')) {
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);
    } else {
        pre.parentNode.insertBefore(button, pre);
    }
});
});
