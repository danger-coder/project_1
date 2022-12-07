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


//for document sub folders
let task4 = document.querySelector(".subfolder4");
task4.addEventListener('click', () => {
    let sub = document.querySelector(".sub_nested4")
  
    sub.classList.toggle("showss")
})


let task3 = document.querySelector(".subfolder3");

task3.addEventListener('click', () => {
    let sub = document.querySelector(".sub_nested3")
  
    sub.classList.toggle("showss")
})


let task2 = document.querySelector(".subfolder2");

task2.addEventListener('click', () => {
    let sub = document.querySelector(".sub_nested2")
  
    sub.classList.toggle("showss")
})



let task1 = document.querySelector(".subfolder1");

task1.addEventListener('click', () => {
    let sub = document.querySelector(".sub_nested1")
  
    sub.classList.toggle("showss")
})


//for document main folders
let primary = document.querySelector(".primary");
primary.addEventListener('click', () => {
    let main = document.querySelector(".nested")

    main.classList.toggle("nested_show")
})


let primary2 = document.querySelector(".primary2");

primary2.addEventListener('click', () => {
    let main = document.querySelector(".nested2")
  
    main.classList.toggle("nested_show")
})


let primary3 = document.querySelector(".primary3");

primary3.addEventListener('click', () => {
    let sub = document.querySelector(".nested3")
  
    sub.classList.toggle("nested_show")
})



let primary4 = document.querySelector(".primary4");

primary4.addEventListener('click', () => {
    let sub = document.querySelector(".nested4")
  
    sub.classList.toggle("nested_show")
})
