### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById = We can find an html element from DOM using it's id with getElementById method.

getElementsByClassName = One or more element with having same class can be found using getElementsByClassName method. It gives htmlCollection and we can loop through it.

querySelector / querySelectorAll: Using querySelector we can find an element with an id,  a class or a tagname. Again we can use them all(id, class, tagname) to find a specific element.
And using querySelectorAll a nodeList of elements(which is an array) can be found. The nodes inside the nodelist will have same class or tagname.

### 2. How do you create and insert a new element into the DOM?
Answer: 
First I have to get the parent element where i want to insert the child. I can use a method from DOM(getElementById, querySelector) to get that parent. Then I need to create an element using document.createElement method.And i have to put html and classes in the child element object, i can use innerHtml for putting html and classList.add() to add classes.  Finally i have to append that child into the parent using parentElement.appendChind method.

### 3. What is Event Bubbling? And how does it work?
Answer:Event bubbling is the default behavior of Javascript where an event triggered on a child propagates upward through its ancestor elements in the DOM tree. It goes from the innermost target up to the document object. It works by first firing the event on the target element, then its parent and grandparent and so on. We can catch the event in any of the ancestor elements and handle it using addEventListener method.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is a pattern based upon the concept of Event bubbling.It is an event-handling pattern that allows you to handle events higher level(ancestor element) in a DOM tree other than the level where the event was first recieved.
The idea is that we can delegate the handling of an event to a different element(ancestor) instead of actual element that recieved the event.
It is useful to write cleaner code and create fewer event listeners with similar logic. We don't have to add event listener to all elements(those triggers events maybe  buttons) rather we add listener to the parent and handle the events. Again if we want to add an element to a parent element then the event happens on that new element will be handled by the parent event listener also.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
event.preventDefault() prevents the default browser behavior associate with a specific event from occuring. 
  Ex:Prevents an anchor link from navigating to the URL when clicked.
I does not stop the event from continuing its journey through the DOM.

event.stopPropagation() prevents the event from reaching other elements in the DOM hierarchy during the capturing and bubbling phases.
 EX: Useful in complex user interfaces where you want to handle an event within a specific component without affecting its parent elements.
It does not prevent the default browser behavior.
