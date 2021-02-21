// Modify the previous program to create a simple login system utilizing an array of user objects

var objPeople = [
	{
		username: "sam",
		password: "codify"
	},
	{
	 	username: "matt",
		password: "academy"
	},
	{
		username: "chris",
		password: "forever"
	}
]

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	for (i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}
	console.log("Incorrect username/password")
}
