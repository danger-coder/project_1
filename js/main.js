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

let plus = document.getElementById("plus");
// plus.forEach((pluss,index)=>)
plus.addEventListener("mouseover", () => {
    let add_folder = document.querySelector(".add_folder")
    add_folder.style.display = "block";
})
plus.addEventListener("mouseout", () => {
    let add_folder = document.querySelector(".add_folder")

    setTimeout(function () {
        add_folder.style.display = "none";
    }, 3000);
})


let plus2 = document.getElementById("plus2");

plus2.addEventListener("mouseover", () => {
    let add_folder = document.querySelector(".add_folder2")
    add_folder.style.display = "block";
})
plus2.addEventListener("mouseout", () => {
    let add_folder = document.querySelector(".add_folder2")

    setTimeout(function () {
        add_folder.style.display = "none";
    }, 3000);
})


let plus3 = document.getElementById("plus3");
plus3.addEventListener("mouseover", () => {
    let add_folder = document.querySelector(".add_folder3")
    add_folder.style.display = "block";
})
plus3.addEventListener("mouseout", () => {
    let add_folder = document.querySelector(".add_folder3")

    setTimeout(function () {
        add_folder.style.display = "none";
    }, 3000);
})

let plus4 = document.getElementById("plus4");
plus4.addEventListener("mouseover", () => {
    let add_folder = document.querySelector(".add_folder4")
    add_folder.style.display = "block";
})
plus4.addEventListener("mouseout", () => {
    let add_folder = document.querySelector(".add_folder4")

    setTimeout(function () {
        add_folder.style.display = "none";
    }, 3000);
})
//add folder functionality

let add = document.querySelectorAll(".folder");

add.forEach((adds, index) => {
    adds.addEventListener('click', () => {
        let folderContainer = document.querySelector(".openAddFolder");

        folderContainer.style.display = "block"
    })

    // let container = document.querySelector(".body")
    // container.style.backgroundColor = "red";
    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", () => {
        let folderContainer = document.querySelector(".openAddFolder");
        folderContainer.style.display = "none";
    })
})

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
    let folderContainer = document.querySelector(".openAddFolder");
    folderContainer.style.display = "none";
})


let add_task = document.querySelectorAll(".add_task");

add_task.forEach((adds, index) => {
    adds.addEventListener('click', () => {
        let folderContainer = document.querySelector(".addTaskFolder");

        folderContainer.style.display = "block"
    })

    // let container = document.querySelector(".body")
    // container.style.backgroundColor = "red";
    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", () => {
        let folderContainer = document.querySelector(".openAddFolder");
        folderContainer.style.display = "none";
    })
})

let cancels = document.getElementById("close");
cancels.addEventListener("click", () => {
    let folderContainer = document.querySelector(".addTaskFolder");
    folderContainer.style.display = "none";
})



let search_task = document.querySelector(".search_task");
search_task.addEventListener("click", () => {
    let addTaskFolder = document.querySelector(".addTaskFolder")
    let task_container_div = document.querySelector(".task_container_div");
    search_task.classList.add("task_active")
    let new_task = document.querySelector(".new_task");
    new_task.classList.remove("task_active")
    let search_task_container = document.querySelector(".search_task_container")
    search_task_container.style.display = "block"
    task_container_div.style.display = "none";
    addTaskFolder.style.width = '1238px';
    addTaskFolder.style.height = '723px';
    addTaskFolder.style.background = 'white';
    addTaskFolder.style.transition = 'all 0.5s ease-in-out';
    addTaskFolder.style.top = '187px';
    addTaskFolder.style.left = '234px';
})
let new_task = document.querySelector(".new_task");
new_task.addEventListener("click", () => {
    let task_container_div = document.querySelector(".task_container_div");
    let addTaskFolder = document.querySelector(".addTaskFolder");
    let search = document.querySelector(".search_task");
    search.classList.remove("task_active")
    new_task.classList.add("task_active")
    task_container_div.style.display = "block";
    let search_task_container = document.querySelector(".search_task_container")
    search_task_container.style.display = "none"
    addTaskFolder.style.width = '969px';
    addTaskFolder.style.height = '507px';
    addTaskFolder.style.top = '180px';
    addTaskFolder.style.left = '321px';
    addTaskFolder.style.background = 'white';
    addTaskFolder.style.transition = 'all 0.5s ease-in-out';

})