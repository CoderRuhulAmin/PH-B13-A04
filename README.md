## Welcome To Assignment - 04 

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer to the Question No. 01:**
* getElementById("id"): Selects a single element by its ID. Returns a 'HTMLElement'.

* getElementsByClassName("class"): Selects all elements with a specific class. Returns a 'HTMLCollection'.

* querySelector("selector"): Selects the first element matching a CSS selector. Returns a 'HTMLElement'.

* querySelectorAll("selector"): Selects all elements matching a CSS selector. Returns a 'NodeList'.

**Example:**

const elById = document.getElementById("mainID");

const elsByClass = document.getElementsByClassName("itemClass");

const firstQuery = document.querySelector("h2");

const allQuery = document.querySelectorAll(".item");



### 2. How do you create and insert a new element into the DOM?

**Answer to the Question No. 02:**

step 01: Select a DOM

step 02: Create the element using 'document.createElement()'

step 03: Set content and attributes

step 04: Insert the element into DOM using "appendChild()"

**Example:**
const container = document.getElementById("container");

const p = document.createElement("p");

p.textContent = "Hello, I am new!";

p.classList.add("new-paragraph");

container.appendChild(p);



### 3. What is Event Bubbling? And how does it work?

**Answer to the Question No. 03:**
- Event bubbling is a process, when an event starts at the target element then propagates up through its ancestors to the document.

- Example: Clicking a <button> inside a <div> triggers the button's click first, then the div's click.

-- Clicking the button outputs:

	01. Button clicked
	
	02. Div clicked



### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer to the Question No. 04:**
- Event Delegation is a technic where set an event listener on parent element then handle the event for child elements.

- Useful because:
  
	01. Good Performance

	3. if new element is added then no need to set event listener differently.



### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer to the Question No. 05:**

preventDefault(): this method use to stop default action of Browser.

stopPropagation(): this method use to stop the event bubbling.
