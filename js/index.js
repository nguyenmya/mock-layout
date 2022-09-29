const listMap = document.querySelector(".list-map");
const onClickList = document.querySelector(".header-icon-list");
const closeListMap = document.querySelector(".list-map-close");

const activeClassMap = "is-show";

onClickList.addEventListener("click" , () => {
    listMap.classList.add(activeClassMap);
})
closeListMap.addEventListener("click" , () => {
    listMap.classList.remove(activeClassMap);
})
