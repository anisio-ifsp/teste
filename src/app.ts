import { ProductRepository } from "./repository/ProductRepository";


const repository: ProductRepository = new ProductRepository();

// repository.createTable();
// repository.insertProduct("bolinho", 15.30);
// repository.deleteProduct(2);
repository.updateProduct(5,"Bolinho",23.45)