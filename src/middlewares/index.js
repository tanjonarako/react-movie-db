const app = store => next => action => {
  if (action.request) {
    return fetch(action.request.url, {
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    })
      .then(response => response.json())
      .then(response => {
        const successAction = {data: response, type: `${action.type}_SUCCESS`}
        console.log('[REMOTE] fetch success', successAction)
        next(successAction)
      })
  }
  return next(action)
}

export default app
