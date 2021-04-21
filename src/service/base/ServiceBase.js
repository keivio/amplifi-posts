import Request from './Request.js'

class ServiceBase {
  constructor() {
    this._request = new Request()
  }

  urlService() {
    throw new Error('Defina a URL do serviço')
  }

  get(id) {
    return this._request.get(this.urlService(), id)
  }

  post(params, headers = {}) {
    return this._request.post(this.urlService(), params, headers)
  }

  put(id, data = {}, headers = {}) {
    return this._request.put(`${this.urlService()}${id}`, data, headers)
  }

  delete(id) {
    if (window.underscore.isArray(id)) {
      let queryString = 'ids='

      queryString = queryString + id.join('&ids=')
      return this._request.delete(`${this.urlService()}?${queryString}`)
    }

    return this._request.delete(`${this.urlService()}${id}`)
  }
}

export default ServiceBase
