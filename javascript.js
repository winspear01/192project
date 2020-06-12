function search() {
    let query = $("#searchText").val();
    query = query.toLowerCase().trim();

    let matches = [];
    for(let course of COURSES) {
        let courseTitle = course.course_title.toLowerCase();
        if(courseTitle.includes(query)) {
            matches.push(course);
        }
    }
    displayCourses(matches);
}

$("#Learn More").on("click", funciton(){
    $("Learn More.panel-body").html("Here is you can apply")