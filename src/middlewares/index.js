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
        localStorage["data"] = JSON.stringify(response);
        var storedDatas = JSON.parse(localStorage["data"]);
        if (storedDatas){
          const successAction = {data: storedDatas, type: `${action.type}_SUCCESS`}
          console.log('[REMOTE] fetch success', successAction)
          next(successAction)
        }
      })
  }
  return next(action)
}

export default app
