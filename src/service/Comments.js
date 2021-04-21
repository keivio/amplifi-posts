import ServiceBase from '../service/base/ServiceBase'

class Service extends ServiceBase {
  urlService() {
    return '/comments'
  }

  GetAll() {
    return this._request.get(this.urlService())
  }

  GetById(postId) {
    return this._request.get(`${this.urlService()}/?postId=${postId}`)
  }
}

export default Service
