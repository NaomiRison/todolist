

$(document).ready(function(){
	//when li inside ul is clicked the code below runs
	//using on instead of click- why?
	// so when we add new li's the toggleClass('completed')
	// works on new added items
$("ul").on("click","li",function(){
	// passing class from css file so dont
	// need the dot, "." only for elements from
	// html file
	//notice how $(this) does not need paranthese
  $(this).toggleClass("completed");
  });
});
// this refers to li that was clicked

//click on span, x to delete to do list item
$("ul").on("click","span",function(event){
	// to Stop the click event from
	// bubbling to parent elements like li, ul, div and body:
	// preventing any 
	//parent event handlers from being executed.
	//passing event: tell the event in the span to not trigger any
	//other events on parent element
	//Syntax
     //event.stopPropagation() 
	//event refers to the click event
	//to prevent the clicking event from happening
	// when u click on other elements
	//besides a span element
	
	event.stopPropagation();
	//this refers to span clicked on
	// The parent() method returns the 
	//direct parent element of the selected element.
	$(this).parent().fadeOut(1000,function(){
		//just fading out method does not remove it
		$(this).remove();
		// when u click on span $this refers to span
		// with .parent your addressing the li
		//using a call back function so fadeout() method
		//finishes and remove() does not start before
		// the effect is finished
		//since we used the parent method
		//the $this is refer the li and not the span
		// if we inspect we will see the li removed
	});
});
$("input[type=text]").keypress(function(event){
       // javascript code for enter is 13
       // more codes on website 
       //https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
		
		if(event.which===13){
			// console.log("you hit enter!");
			// below grabbing new todoText from input
			 var todoText=$(this).val();
			 
			 //create new li and add to ul
			 //adding trash can icon to each new li
			 $("ul").append("<li><span><i class='fa fa-trash'aria-hidden='true' ></i></span> "+todoText+"</li>")
		     //BELOW sets text bar to blank
			 $(this).val("");
		}
});
$('h1').funText(10, 'reverseCandy');

//when we click the plus icon text box should
// fade in and out, toggle
$(".fa-plus").click(function(){
    ("input[type='text']").fadeToggle();

});



// The event.which property returns which keyboard key or mouse button was pressed for the event.
// Syntax
// event.which 

// The val() method returns or sets the 
//value attribute of the selected elements.
// Syntax

// Return the value attribute:
// $(selector).val()

// We will use the same three methods from the previous page to set content:

//     text() - Sets or returns the text content of selected elements
//     html() - Sets or returns the content of selected elements (including HTML markup)
//     val() - Sets or returns the value of form fields


//append method : can take a string on html with
//text being in tags. the elements are added to whatever 
//selected



// The event.which property returns which keyboard key or mouse button was pressed for the event.

// Syntax
// event.which

// Parameter	Description
// event	Required. The event parameter comes from the event binding function