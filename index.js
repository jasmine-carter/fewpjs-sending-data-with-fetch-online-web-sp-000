function submitData(name, email) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
    document.body.innerHTML - object["id"];
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    })
  }
