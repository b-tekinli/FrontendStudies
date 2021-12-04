const cardBody = document.querySelectorAll('.card-body')[1];

const title = document.querySelector("#tasks-title");


// Click Event
title.addEventListener("click", run);


// Double Click
title.addEventListener("dblclick", run);


// Mouse Down 
title.addEventListener("mousedown", run);


// Mouse Up
title.addEventListener("mouseup", run);


// Mouse Over
title.addEventListener("mouseout", run);


// Mouse Out
title.addEventListener("mouseout", run);


cardBody.addEventListener("mouseover", run);
cardBody.addEventListener("mouseout", run);


// Mouse Enter
cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);




function run(e) {
    console.log(e.type);
}