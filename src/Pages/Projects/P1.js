import Button from 'react-bootstrap/Button';

function P1() {
  return (
    <div className = "project">
      <h1>Astronomy Picture of the Day:</h1>
      <Button variant="primary" className="APODButton" onClick={fetchPicture}>Click here to get a picture</Button>{' '}
      <div id="placeholder" className="container">
      </div>
    </div>
  );
}

function fetchPicture() {
  const apiKey = "api_key=4WLS0o49pYd7ANwbuxmehMEuKoSPZB4RQbusfrTZ"
  const request = "https://api.nasa.gov/planetary/apod?" + apiKey
  //using fetch API
  fetch(request)
      .then(response => response.json())
      .then(data => {
          const { url, copyright, date, explanation, hdurl, media_type, service_version, title } = data
          //Only allow 1 picture to be added
          if (!(document.getElementById("placeholder").childNodes.length > 1)) {
              var img
              //Create video if needed
              if (media_type === "image") {
                  img = document.createElement("img")
                  img.setAttribute("src", url)
                  img.setAttribute("alt", "Astronomy Picture of the Day")
                  img.setAttribute("className", "img-fluid")
                  img.style.display = "flex"
                  img.style.margin = "auto"
                  img.style.textAlign = "center"
              }
              if (media_type === "video") {
                  img = document.createimgent("iframe")
                  img.setAttribute("src", url)
                  document.getimgentById("placeholder").appendChild(img)
              }
              //Create Elements on page, remove button since no longer needed
              let imgTitle = document.createElement("h2")
              imgTitle.innerHTML = title
              let imgAuthor = document.createElement("p")
              imgAuthor.innerHTML = copyright
              document.getElementById("placeholder").appendChild(imgTitle)
              document.getElementById("placeholder").appendChild(imgAuthor)
              document.getElementById("placeholder").appendChild(img)
              document.getElementById("APODButton").remove()
          }
      })
      .catch(error => { console.log(error) })
}

export default P1;