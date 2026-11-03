//your JS code here. If required.
const element = document.getElementById("level");
let count = 0
while(element != document.documentElement){
	element = element.parentElement
	count ++
}
alert("The level of the element is:" + count)