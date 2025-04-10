// Add and Delete items to list
function addItem() {
    // Get the value from the input field
    const newItem = document.getElementById('itemInput').value;

    // If the input is not empty
    if (newItem.trim() !== '') {
        // Create a new list item (li element)
        const li = document.createElement('li');

        // Create a text node for the item and append it to the list item
        const textNode = document.createTextNode(newItem);
        li.appendChild(textNode);

        // Create a delete button for each list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add an event listener to the delete button to remove the item
        deleteButton.onclick = function() {
        li.remove();  // Remove the list item (li) from the list
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Add the new list item to the unordered list (ul)
        document.getElementById('myList').appendChild(li);

        // Clear the input field after adding the item
        document.getElementById('itemInput').value = '';
    }
}

//Handle Dropdown selection
function handleButtonClick() {
    var selectedValue = document.getElementById("activity").value;

    // Redirect to the linked page if "Work" is selected
    if (selectedValue === "Work") {
        window.location.href = "http://www.linkedin.com"; // Redirect to LinkedIn
    }
    else if(selectedValue === "Learning") {
        window.location.href = "http://www.udemy.com"; // Redirect to Udemy
    }
    else {
        // If another option is selected, just log the value or take other actions
        alert("You selected: " + selectedValue);
    }
}

//Get time
function showTime() {
  const now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}

setInterval(showTime, 1000); // Update every second

//Get Weather
const apiKey = 'a3b0c7721c9446e6ae7120224250904'; // your actual key
const city = 'Ventura';

// For example using WeatherAPI.com (update URL if using a different provider)
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    const temp = data.current.temp_f;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;

    document.getElementById('weather').innerHTML =
      `<img src="${icon}" alt="icon"> ${temp}°C, ${condition}`;
  })
  .catch(error => {
    document.getElementById('weather').textContent = "Weather data unavailable.";
    console.error("Error:", error);
  });
