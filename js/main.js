let tabs = document.querySelectorAll(".tabs");
let content = document.querySelectorAll(".tab_content")


tabs.forEach((tabb, index) => {
    tabb.addEventListener('click', () => {
        content.forEach((content) => {
            content.classList.remove("is_active");
        });
        tabs.forEach((tabss) => {
            tabss.classList.remove("is_active");
        });
        content[index].classList.add('is_active');
        tabs[index].classList.add('is_active');
    })

})