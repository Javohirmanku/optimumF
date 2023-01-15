const toogller = document.querySelector(".navbar-toggler");

toogller.addEventListener('click', (event) => {
    const target = event.target

    let navbarCol = document.querySelector('.navbar-col');

    if (target && target.classList.contains('icons__menyu')) {
        console.log(target.src);
        
        if (target.classList.contains('toggle__icon')) {
            target.src = "./../images/0.svg";
            target.classList.remove('toggle__icon')
            navbarCol.classList.add('navbar-col_');
            document.querySelector('.heading__title').style.color='#000';
            document.querySelector('.heading__subtitle').style.color='#000';
            document.querySelector('.d-none-nav').classList.add('toggel-nav-costum');
        } else {
            target.src = "./../images/menu.svg";
            target.classList.add('toggle__icon') 
            navbarCol.classList.remove('navbar-col_');
            document.querySelector('.heading__title').style.color='#FFF';
            document.querySelector('.heading__subtitle').style.color='#FFF';
            document.querySelector('.d-none-nav').classList.remove('toggel-nav-costum');
        }
    } 
})