document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    if(e.target.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
    }