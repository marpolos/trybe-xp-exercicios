const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const product2 = {
    name: 'Tablet S6',
    price: '1500.00',
    seller: 'Mercado Livre',
  };
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
  printProductDetails(product2);