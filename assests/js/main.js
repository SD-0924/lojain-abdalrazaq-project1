import data from "../data/topics.js"
let filteredCourses = data;
/**
 *  Create single course html with given info
 */
const createCourse = (courseInfo) => {
    return `<div class="card">
        <img src="../assests/Logos/${courseInfo.image}" alt="${courseInfo.topic}" class="card-image">
        <h4 class="card-title">${courseInfo.category}</h4>
        <p class="technology">${courseInfo.topic}</p>
        <span class="rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
        </span>
        <p class="author">Author: ${courseInfo.name}</p>
    </div>`
    
}

/**
 * 
 */
const createCourseList = (courseList) => {
    const arr = courseList.map(course => createCourse(course)).join("")
    return arr
}

const searchCourse = (list,searchText) => {
    return list.filter(course => course.topic.toLowerCase().includes(searchText.toLowerCase()))
}
/**
 * 
 */
const renderCourses = () => {
    const courseContainer = document.getElementById("card-container")
    const courseHTML = createCourseList(filteredCourses)
    courseContainer.innerHTML = courseHTML
}

renderCourses()

document.getElementById("searchInput").oninput = (evt) =>{
    filteredCourses = searchCourse(data, evt.target.value)
    renderCourses()
}

