import {convertObjectWithTemplates, processResponse} from '../utils'

function httpGetFactory (url, query = {}) {
  function httpGet ({http, path, resolve}) {
    return processResponse(http.get(resolve.value(url), convertObjectWithTemplates(query, resolve)), path)
  }

  return httpGet
}

export default httpGetFactory
