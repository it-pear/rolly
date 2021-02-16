import { Apisful } from './index'

export default {
  async list () {
    const response = await Apisful.get('banners/')
    return response.data.results
  }
}
