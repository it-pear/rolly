import { Apisful } from './index'

export default {
  async create (productIds, description, customerName, customerEmail, customerAdres) {
    const response = await Apisful.post('orders/', {
      products: productIds,
      description,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_adres: customerAdres
    })
    if (response.status === 201) {
      return true
    } else {
      return false
    }
  }
}
