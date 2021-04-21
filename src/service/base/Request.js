import http from './http'
import utils from '@/utils/utils'

const methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

function Exception(error) {
  let config = {
    method: error.config.method,
    url: error.config.url,
    status: error.response.status,
    statusText: error.response.statusText,
    data: error.response.data
  }

  return config
}

class Request {
  get(url, data = {}, headers = {}) {
    if (typeof data === 'object' && !data) {
      data = '?'.concat(utils.serialize(data))
    }

    if (typeof data === 'number' || typeof data === 'string') {
      url = `${url}${data}`
    }

    return this._send(methods.GET, url, data, headers)
  }

  post(url, data = {}, headers = {}) {
    return this._send(methods.POST, url, data, headers)
  }

  put(url, data = {}, headers = {}) {
    return this._send(methods.PUT, url, data, headers)
  }

  delete(url) {
    return this._send(methods.DELETE, url)
  }

  _send(method, urlService, data = {}, headers = {}) {
    let promise = http({
      method: method,
      url: urlService,
      data: method === methods.GET ? null : data
    })

    return promise
      .then(response => {
        return response.data
      })
      .catch(erro => {
        throw new Exception(erro)
      })
  }
}

export default Request
