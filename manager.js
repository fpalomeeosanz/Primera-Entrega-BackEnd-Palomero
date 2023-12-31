class TicketManager {

    #priceUp = 1.15;

    constructor(){
        this.products = [];  
    }

    addProduct = (nombre, imgUrl, precio) => {

        let qProducts = this.products.length;

        if(!nombre || !imgUrl || !precio) {
        return 'Todos los campos son necesarios'
        }

        const productImgUrl = this.products.find(product => product.imgUrl == imgUrl);
        
        if (productImgUrl){
            return 'ya seleccionaste ${imgUrl}'
        }

        const evento = {
            nombre,
            imgUrl,
            precio: precio * this.#priceUp,
            fecha: Date(),
            participantes: [],
            id: ++ qProducts,
        }   

        this.products.push(evento);
    }

    getProducts = () => {
        return this.products;
    }

    getProduct = (idProduct) => {
        const product = this.products.find( product => product.id == idProduct );
        if(product){
            return product;
        }else{
            return 'not found'
        }
    }

  addUser = (idProduct) => {

    const product = this.getProduct(idProduct);

    if(product === 'not found'){

      return 'El evento no existe'

    }

    const registro = product.users.find(idPersona => idPersona == idUser);

    if(registro){

      return '${idUser} ya compraste este producto';

    }

    product.users.push(idUser);

    return product;

  }
}

const ticketManager = new TicketManager();

ticketManager.addEvento('Baradero Rock', 'Baradero', 2500)

product = ticketManager.addEvento('Baradero Rock', 'San Pedro', 2500)

const unEvento = ticketManager.getEvento(11)
