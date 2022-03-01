$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });
});

let accordian_label = document.querySelectorAll('.explore'),
    accordian = document.querySelectorAll('.recent-project-cards');

accordian_label.forEach((i, index) => {
    i.addEventListener('click', function () {
        accordian[index].classList.toggle('recent-project-cards-explore');
        this.classList.toggle('hide');
    })
})