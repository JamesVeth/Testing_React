

function List() {

    const fruits1 = ["apple", "orange", "banana", "coconut", "pineapple"];
    
    const fruits2 = [{id: 1, name:"kiwi", calories:95}, 
                     {id: 2, name:"grapes", calories:75}, 
                     {id: 3, name:"mango", calories:35},
                     {id: 4, name:"pear", calories:70}, 
                     {id: 5, name:"lemon", calories:45}];



    fruits2.sort((a,b)=> a.calories - (b.calories)); // Sort by calories


    const listItems1 = fruits1.map((fruit)=> <li>{fruit}</li> );
    const listItems2 = fruits2.map((fruit)=> { return <li key = {fruit.id}>ID: {fruit.id} Fruit Name: &nbsp; {fruit.name}: Calories: <b>{fruit.calories}</b></li> });


    return (<div id = "listDiv">
                <ul>{listItems2}</ul>
            </div>);
    return (<ul>{listItems1}</ul>);
}

export default List;

    // remember to add returin if you use curly braces, as that denotes a block of code, else single line doesn't require a return as it's implicit for single line code examples
    // fruits2.sort((a,b)=> a.name.localeCompare(b.name)); // Sort by name alphabetically

    
    /* 
    
    Notes Curly Braces Cause Conflict
    
    Arrow functions:

    // Wrong ****
    Because this is inside a jsx file, if it sees {} that means it's a dedicated area for JS code.
    So any time you put {} including inside an arrow function, it prevents that from working as usual.
    Single line arrow functions without {} aren't affected.
    For a multi-line arrow functions
    // Wrong ****

    The above is wrong. 
    
    The curly braces considerations only applied to code inside html tags for inserting javascript.
    Everything else behaves like regular Javascript. 
    
    In regards to the arrow functions, that was because single line arrow functions DON'T NEED a return.
    Return is 'implicit' in a single line arrow function; it's optional.
    But if you're using a curly brace in an arrow function, that's considered a code block, thus requires the actual return.
    
    
    */