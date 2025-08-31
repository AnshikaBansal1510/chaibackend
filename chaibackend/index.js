require('dotenv').config()

const express = require('express')
// import express from "express"

const app = express()
const port = 4000

const githubData = {
  "login": "AnshikaBansal1510",
  "id": 187004919,
  "node_id": "U_kgDOCyV39w",
  "avatar_url": "https://avatars.githubusercontent.com/u/187004919?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AnshikaBansal1510",
  "html_url": "https://github.com/AnshikaBansal1510",
  "followers_url": "https://api.github.com/users/AnshikaBansal1510/followers",
  "following_url": "https://api.github.com/users/AnshikaBansal1510/following{/other_user}",
  "gists_url": "https://api.github.com/users/AnshikaBansal1510/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AnshikaBansal1510/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AnshikaBansal1510/subscriptions",
  "organizations_url": "https://api.github.com/users/AnshikaBansal1510/orgs",
  "repos_url": "https://api.github.com/users/AnshikaBansal1510/repos",
  "events_url": "https://api.github.com/users/AnshikaBansal1510/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AnshikaBansal1510/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-01T07:38:27Z",
  "updated_at": "2025-07-15T18:10:01Z"
}

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('anshikabansaldotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

