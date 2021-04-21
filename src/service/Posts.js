import ServiceBase from '../service/base/ServiceBase'

class Service extends ServiceBase {
  urlService() {
    return '/posts'
  }

  GetAll() {
    return this._request.get(this.urlService())
  }
}

export default Service
