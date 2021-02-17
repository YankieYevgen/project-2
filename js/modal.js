window.addEventListener('DOMContentLoaded', () => {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        closeBtn = document.querySelector('[data-close]');



    modalTrigger.forEach(item => {
        item.addEventListener('click', openModel);
    });

    function openModel() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(triggerTime);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }


    });


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList('show')) {
            closeModal();
        }
    });


    // modalTrigger.addEventListener('click', () => {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     // modal.classList.toggle('show');
    //     document.body.style.overflow = 'hidden';
    // });


    const triggerTime = setTimeout(openModel, 4000);

    function ShowModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModel();
            window.removeEventListener('scroll', ShowModalByScroll);
        }
    }
    window.addEventListener('scroll', ShowModalByScroll);
});