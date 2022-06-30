import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function P1() {
  const [isClicked, setStatus] = useState(false);
  return (
    <div className="project">
      <h1>Astronomy Picture of the Day:</h1>
      <Button variant="primary" className="APODButton" disabled={isClicked}
        onClick={function (event) { fetchPicture(); setStatus(true) }}>Click here to get a picture</Button>{' '}
      <div id="placeholder" className="container">
      </div>
    </div>
  );
}

function fetchPicture() {
  const apiKey = "api_key=4WLS0o49pYd7ANwbuxmehMEuKoSPZB4RQbusfrTZ"
  const request = "https://api.nasa.gov/planetary/apod?" + apiKey;
  //using fetch API
  fetch(request)
    .then(response => response.json())
    .then(data => {
      const { url, copyright, media_type, title } = data
      var img
      //Create video if needed
      if (media_type === "image") {
        img = document.createElement("img")
        img.setAttribute("src", url)
        img.setAttribute("alt", "Astronomy Picture of the Day")
        img.setAttribute("className", 'img-thumbnail')
      }
      if (media_type === "video") {
        img = document.createimgent("iframe")
        img.setAttribute("src", url)
        document.getimgentById("placeholder").appendChild(img)
      }
      //Create Elements on page
      let imgTitle = document.createElement("h2")
      imgTitle.innerHTML = title
      let imgAuthor = document.createElement("p")
      imgAuthor.innerHTML = copyright
      document.getElementById("placeholder").appendChild(imgTitle)
      document.getElementById("placeholder").appendChild(imgAuthor)
      document.getElementById("placeholder").appendChild(img)
    })
    .catch(error => { console.log(error) })
}

export default P1;