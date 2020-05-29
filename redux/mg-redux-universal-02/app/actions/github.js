import 'whatwg-fetch'
import parseLinkHeader from 'parse-link-header'
import handleActionError from '../utils/handleActionError'
import processResponse from '../utils/processResponse'

import {
  FETCH_USER,
  FETCH_REPO,
  FETCH_USER_STARGAZERS,
  FETCH_REPO_STARGAZERS
} from '../constants'

const GITHUB_API = 'https://api.github.com'

export const fetchUser = (options) => {
  const { username } = options

  return dispatch => {
    fetch(`${GITHUB_API}/users/${username}`)
      .then(processResponse)
      .then(res => dispatch({
        type: FETCH_USER,
        user: res
      }))
      .catch(error => handleActionError(dispatch, error, FETCH_USER))
  }
}

export const fetchUserStargazers = (options) => {
  const { page, username } = options
  const url = page ? page : `${GITHUB_API}/users/${username}/starred`

  return dispatch => {
    fetch(url)
      .then(res => {
        const pagination = parseLinkHeader(res.headers.get('link'))
        return processResponse(res)
          .then(result => dispatch({
            type: FETCH_USER_STARGAZERS,
            stargazers: result,
            pagination
          }))
      })
      .catch(error => handleActionError(dispatch, error, FETCH_USER_STARGAZERS))
  }
}

export  const fetchRepo = (options) => {
  const { username, repo } = options

  return dispatch => {
    fetch(`${GITHUB_API}/repos/${username}/${repo}`)
      .then(processResponse)
      .then(res => dispatch({
        type: FETCH_REPO,
        repo: res
      }))
      .catch(error => handleActionError(dispatch, error, FETCH_REPO))
  }
}

export const fetchRepoStargazers = (options) => {
  const { page, username, repo } = options
  const url = page ? page :
    `${GITHUB_API}/repos/${username}/${repo}/stargazers`

  return dispatch => {
    fetch(url)
      .then(res => {
        const pagination = parseLinkHeader(res.headers.get('link'))
        return processResponse(res)
          .then(result => dispatch({
            type: FETCH_REPO_STARGAZERS,
            stargazers: result,
            pagination
          }))
      })
      .catch(error => handleActionError(dispatch, error, FETCH_REPO_STARGAZERS))
  }
}
