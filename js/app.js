const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

// счетчик
let number = document.getElementById('1'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onscroll() {
    if (window.pageYOffset > numberTop - this.window.innerHeight / 2) {
        this.removeEventListener('scroll', onscroll);
        const interval = this.setInterval(function () {
            number.innerHTML = ++start;
            if (start == end) {
                clearInterval(interval);
            }
        }, 120)
    }
});
let number1 = document.getElementById('2'),
    number1Top = number1.getBoundingClientRect().top,
    start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > number1Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval1 = setInterval(function () {
            number1.innerHTML = ++start1;
            if (start1 == end1) {
                clearInterval(interval1);
            }
        }, 2);
    }
});
let number2 = document.getElementById('3'),
    number2Top = number2.getBoundingClientRect().top,
    start2 = +number2.innerHTML, end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > number2Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval2 = setInterval(function () {
            number2.innerHTML = ++start2;
            if (start2 == end2) {
                clearInterval(interval2);
            }
        }, 35);
    }
});
let number3 = document.getElementById('4'),
    number3Top = number3.getBoundingClientRect().top,
    start3 = +number3.innerHTML, end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > number3Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval3 = setInterval(function () {
            number3.innerHTML = ++start3;
            if (start3 == end3) {
                clearInterval(interval3);
            }
        }, 22);
    }
});

///////

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('data-href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
        

    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.lenght > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '1px';
            }
        }
        body.style.paddingRight = '1px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

/// AOS

AOS.init();



