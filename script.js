
/*

^ Approach 1 -> Add event listener to each button, and change background color for every button.


const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');
const purple = document.getElementById('purple');



red.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red';
})

green.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'green';
})

blue.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'blue';
})

orange.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'orange';
})

purple.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'purple';
})

? if there were 100 buttons we have to write code 100 times, so it not an efficient approach.

*/


//? instead, we can select all buttons at once and forEach loop can help to iterate over each button.
//? select all buttons and add event listener using forEach to change color as button.id


//^ Approach 2 -> Use for each loop to access all buttons and change color using button.id access.

/*

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    
    button.addEventListener('click',()=>{
        document.body.style.backgroundColor = button.id;
    })

})

? forEach loop is adding event listener for every button using a loop but it not optimised approach.
? if there were 100 buttons then 100 event listeners will be added by loop, 
?  these event listeners consume memory and system slow.


*/

//* NOTE - we need to reduce number of event listeners added to make code more optimized.


//^ Approach 3 -> Add event listener to parent and use event bubbling to change color when child is clicked.

const parent = document.getElementById('box');

parent.addEventListener('click',(event)=>{

    // console.log(event.target);
    // console.log(event.target.id);

    if(event.target.tagName === 'BUTTON'){
        document.body.style.backgroundColor = event.target.id;
    }

})


/*

?  Adding event listener to parent and using event bubbling to capture event triggered.
?  event.target -> it returns the child element that triggered the event , to parent element.
?  event.target.id -> used to get id of child element that triggered event to change bg-color.

* Only one event listener is added to parent and hence code is optimized.

*/


//* if there is another element present then use event.target.tagName to execute color change only 
//*   if the button is clicked, not when other elements are clicked.

//  otherwise, those other elements can change the color to default when clicked.






