import { executarComandoSQL } from "../database/mysql";

export class ProductRepository{

    async createTable() {
        try {
            const resultado = await executarComandoSQL("CREATE TABLE Vendas.Product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)", []);
            await console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    async insertProduct(name: string, price: number) {
        try {
            const resultado = await executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price]
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }

    async deleteProduct( id: number) {
        try {
            const resultado = await executarComandoSQL(
                "DELETE FROM Vendas.Product WHERE ID = ?",
                [id]
            );
            console.log('Produto deletado com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao deletar o produto:', err);
        }
    }

    async updateProduct( id: number, name:string, price:number) {
        try {
            const resultado = await executarComandoSQL(
                "UPDATE Vendas.Product SET name = ?, price = ? WHERE ID = ?",
                [name, price, id]
            );
            console.log('Produto alterado com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao alterar o produto:', err);
        }
    }

}