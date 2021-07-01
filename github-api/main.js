const btnSearch = document.getElementById('btn-search')
const formUsername = document.getElementById('username')
const cardAvatar = document.getElementById('card-avatar')
const cardUsername = document.getElementById('card-username')
const cardDetail = document.getElementById('card-detail')
const cardUrl = document.getElementById('card-profile-url')

btnSearch.addEventListener('click', function(){
  const username = formUsername.value
  fetch('https://api.github.com/users/' + username)
    .then(res => res.json())
    .then((data) => {
      cardUsername.innerText = data.name
      cardDetail.innerText = data.bio
      cardAvatar.src = data.avatar_url
      cardUrl.href = data.html_url
    })
})