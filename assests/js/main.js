import data from "../data/topics.js"

/**
 *  Fetch the data from the data.json file
 * const fetchData = () => {
    return data;
};
 */

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
// genrate the course on the HTML file

/**
 * 
 */
const renderCourses = () => {
    const courseContainer = document.getElementById("card-container")
    const courseHTML = createCourseList(data)
    courseContainer.innerHTML = courseHTML
}


document.onload = renderCourses()
