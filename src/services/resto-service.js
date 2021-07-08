export default class RestoService {
   text = null;
  _apiBase = 'https://my-json-server.typicode.com/OlgaKitova/demo';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, recerived ${res.status}`);
    }
    return await res.json();
  }
  async getMenuItems() {
    return await this.getResource(`/menu/`);
  }

    async setOrder(order) {
        const number = await this.getOrderNumber();
        const newOrder = {
        id: number,
         order: order
       }

        await fetch(`${this._apiBase}/orders/`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    async getOrderNumber(){
        const res = await this.getResource('/orders/');
        const orderNumber = res.length+1;

        return orderNumber
    }
  }