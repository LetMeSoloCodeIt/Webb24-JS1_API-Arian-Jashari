
document.getElementById('userbutton').addEventListener('click', function() {
    console.log("Button was clicked");

    fetch('https://randomuser.me/api/')
        .then(function(response) {
            //Omvandlar datan till json
            return response.json();
        })
        .then(function(data) {
            //Hämtar första användaren från datan vi fått tillbaka
            var user = data.results[0]; 
            
            // HTML uppdateras med informationen om personerna
            document.getElementById('name').innerText = 'Name: ' + user.name.first + ' ' + user.name.last;
            document.getElementById('gender').innerText = 'Sex: ' + user.gender;
            document.getElementById('email').innerText = 'Email: ' + user.email;
            document.getElementById('phone').innerText = 'Phone: ' + user.phone;
            document.getElementById('userImage').src = user.picture.large;
            
            // Jag har gömt diven, den blir nu synlig med all information
            document.getElementById('userInfo').style.display = 'block';
        })
        .catch(function(error) {
            //Log om något går fel
            console.log('Something went wrong:', error);
        });

});