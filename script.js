// This is a JavaScript file! If you've done more HTML and CSS work, you'll likely spend a bit more time working in here.
// However, if you're totally new, feel free to ask me questions, and I'll do my best to help out! :) I'm still learning as well.
// In modern web development, a lot of professional websites will usually utilise some form of front-end library. For now, we'll just get you working on the absolute basics
// To begin with, we'll want to be able to reference elements within the page. Everything sits within a Document Object Model, or the 'DOM', which is broadly how JS interacts with and updates
// page elements.


// This declares a constant 'nameSubmit', which is what we'll point to in the code!
const nameSubmit = document.getElementById('submitName')

// TASK: We're going to need to refer to the nameInput element. How might we do this? We'll need to do this so we can refer to it in further code.

// We're going to need to add something called an 'addEventListener' to the submit button so that JS is actively 'watching' the button for activity.
// The way you'd do this is a little involved if you're quite new, so I'll give you a litle time to try and have a go, and then can sit down and do this with you!


nameSubmit.addEventListener("click", ()=>{
    // In here, we'll need to get the *value* contained within an element. How do we do that? 
    // Well, if you have an input element, that you've defined above, the below example may help:

    // This code won't work, and should be placed on line 14.
    const NAMEINPUT = document.getElementById('id-of-the-input-element')
    let nameValue = NAMEINPUT.value
    
}, false)


// For now, a basic console.log and alert() of data is already great! JS can get *fairly* complex, and I'm by no means a senior dev, so 