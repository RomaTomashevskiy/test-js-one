const listFilms = document.querySelector('.list');



const newList = new Set();


listFilms.addEventListener('click', onClickFilms);

function onClickFilms(e) {
    const btnActive = e.target;
    if (btnActive.nodeName !== 'BUTTON') {
        return;
    };

    const isActiveBtn = btnActive.classList.contains('button_active--cklick');
    if (isActiveBtn) {
        newList.delete(btnActive.dataset.value);
    } else {
        newList.add(btnActive.dataset.value);
    }

    btnActive.classList.toggle('button_active--cklick');

    console.log(newList)
}

















