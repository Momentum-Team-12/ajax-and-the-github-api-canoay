console.log('linked')
let profileDiv = document.querySelector('#profile')


fetch ('https://api.github.com/users/canoay', {
    method: 'GET',
    headers: {},
})
 .then(function (response) {
        return response.json()
})
.then (function (data) {
      let imageDiv = document.createElement('img')
      imageDiv.src = data.avatar_url
      profileDiv.appendChild(imageDiv)

      let nameDiv = document.createElement('h1')
      nameDiv.classList.add('name')
      nameDiv.innerText = data.name
      profileDiv.appendChild(nameDiv)

      let locationDiv = document.createElement('p')
      locationDiv.classList.add('location')
      locationDiv.innerHTML ='<h4>Location:</h4>'+ data.location
      profileDiv.appendChild(locationDiv)

      let urlDiv = document.createElement('p')
      urlDiv.classList.add('url')
        urlDiv.innerHTML ='<h4>Github URL:</h4>'+'<a href="' + data.html_url + '">'+ data.login+ "</a>" 
        profileDiv.appendChild(urlDiv)

  let usernameDiv = document.createElement('p')
      usernameDiv.classList.add('username')
      usernameDiv.innerHTML = '<h4>Github username:</h4>' + data.login
      profileDiv.appendChild(usernameDiv)

  let repoTitle = document.createElement('h2')
        repoTitle.innerText = "GitHub Repos"
        profileDiv.appendChild(repoTitle)

 })
 
 fetch ('https://api.github.com/users/canoay/repos', {
    method: 'GET',
    headers: {},
})
 .then(function (response) {
        return response.json()
})
.then (function (data) {
    for (let i of data) {
        let reposDiv = document.createElement('div')
        reposDiv.classList.add('repos')
        reposDiv.innerHTML = '<a href="' +
          i.html_url + '">' + i.name + "</a>" 
        profileDiv.appendChild(reposDiv)
    }

 })
