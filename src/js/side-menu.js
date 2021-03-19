
// sub-menu close and open
function toggleParentClass(elem, cls) {
    const element = document.querySelectorAll(elem);
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < element.length; i++) {
                if (current != element[i]) {
                    element[i].parentElement.classList.remove(cls);
                } else if (current.parentElement.classList.contains(cls) === true) {
                    current.parentElement.classList.remove(cls);
                } else {
                    current.parentElement.classList.add(cls);
                }
            }
            e.preventDefault();
        });
    };
}

function toggleClass(elem, cls) {
    const element = document.querySelectorAll(elem);
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < element.length; i++) {
                if (current != element[i]) {
                    element[i].classList.remove(cls);
                } else if (current.classList.contains(cls) === true) {
                    current.classList.remove(cls);
                } else {
                    current.classList.add(cls);
                }
            }
            e.preventDefault();
        });
    };
}

function toggleOtherElementClass(elem, other, cls) {
    const element = document.querySelector(elem);
    element.addEventListener("click", function(e) {
        const otherElement = document.querySelector(other);
        if (otherElement.classList.contains(cls) === true) {
            otherElement.classList.remove(cls);
        } else {
            otherElement.classList.add(cls);
        }
        e.preventDefault();
    });
}

function removeOtherElementClass(elem, other, cls) {
    const element = document.querySelectorAll(elem);
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function(e) {
            const otherElement = document.querySelectorAll(other);
            for (let i = 0; i < otherElement.length; i++) {
                otherElement[i].classList.remove(cls);            
            }
            e.preventDefault();
        });
    };
}

removeOtherElementClass('#menu-toggler-1', '.side-bar-item', 'expanded');
//removeOtherElementClass('#menu-toggler-2', '.side-bar-item', 'expanded');

removeOtherElementClass('#menu-toggler-1', '.side-bar-item-2', 'expanded');
//removeOtherElementClass('#menu-toggler-2', '.side-bar-item-2', 'expanded');

toggleOtherElementClass('#menu-toggler-1', '.side-bar', 'collapse');
//toggleOtherElementClass('#menu-toggler-2', '.side-bar', 'collapse');

removeOtherElementClass('.side-bar-item-title', '.side-bar', 'collapse');
toggleParentClass('.side-bar-item-title', 'expanded');

removeOtherElementClass('.side-bar-item-title', '.side-bar-item-2', 'expanded');
toggleParentClass('.side-bar-item-title-2', 'expanded');

toggleClass('.side-bar-sub-item', 'active');
