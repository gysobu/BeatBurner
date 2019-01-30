var inputs = document.querySelectorAll('input[type="text"], input[type="datepicker"], input[type="file"], input[type="textarea"], input[type="password"], input[type="email"], input[type="number"]');
infoTooltip = document.querySelectorAll('.info-tooltip'), body = document.querySelector('body');

//Inputs underline animation
if (inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].previousElementSibling.classList.add('floating-label');
        inputs[i].addEventListener('focusin', function () {
            this.previousElementSibling.classList.add('label-active');
        })
        inputs[i].addEventListener('focusout', function () {
            if (!(this.value == '')) {
                this.classList.add('input-active');
            }
            else if (this.value == '') {
                this.classList.remove('input-active');
                this.previousElementSibling.classList.remove('label-active');
            }
            else {
                this.previousElementSibling.classList.remove('label-active');
            }
        })
    }
}

//Required inputs
if (inputs) {
    for (var m = 0; m < inputs.length; m++) {
        if (inputs[m].hasAttribute('required')) {
            inputs[m].previousElementSibling.classList.add('label-required');
        }
    }
}

// Play button redirect opens in a new tab
//Warm up
window.open(
    'https://open.spotify.com/playlist/1pkRyS9BK5ktJB89uQNtWp',
    '_blank' // <- This is what makes it open in a new window.
);

//Easy
window.open(
    'https://open.spotify.com/playlist/3z1O1cHDYZeRPDOGboJuaM',
    '_blank' // <- This is what makes it open in a new window.
);

//Medium
window.open(
    'https://open.spotify.com/playlist/7pINDdovFr890SmNhZ1VU2',
    '_blank' // <- This is what makes it open in a new window.
);

//Hard
window.open(
    'https://open.spotify.com/playlist/7m5krTPyW1PkDR2cfhHFj9',
    '_blank' // <- This is what makes it open in a new window.
);
