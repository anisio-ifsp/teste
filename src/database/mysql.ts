import mysql, { Connection, QueryError } from 'mysql2';

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'anisio',
    password: 'mysql',
    database: 'vendas'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig);

// function conectarDb(err: QueryError | null){
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err.message);
//         throw err;
//     }
//     console.log('Conexão bem-sucedida com o banco de dados MySQL');
// }

// mysqlConnection.connect(conectarDb);


mysqlConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

// export function executarComandoSQL(query: string, valores: any[], callback: (err:any, resultado:any)=> void) {
//     mysqlConnection.query(query, valores, (err, resultado) => {
//         if (err) {
//             console.error('Erro ao verificar se a tabela existe:', err);
//             callback(err, false);
//             return;
//         }
//         callback(null, resultado );
//         console.log(resultado);
//     });
// }

// export function executarComandoSQL(query: string, valores: any[]) : Promise<any> {
//     return new Promise((resolve, reject) => {
//         mysqlConnection.query(query, valores, (err, resultado:any) => {
//             if (err) {
//                 console.error('Erro ao executar a query.', err);
//                 reject(err); // Rejeita a Promessa em caso de erro
//                 return;
//             }
//             console.log(resultado);
//             resolve(resultado); // Resolve a Promessa com o resultado
//         });
//     });
// }

export function executarComandoSQL(query: string, valores: any[]) : any{
    mysqlConnection.query(query, valores, (err, resultado:any) => {
        if (err) {
            console.error('Erro ao executar a query.', err);
            throw err;
        }
        console.log(resultado);
        return resultado;
    });
}

function closeConnection(){
    mysqlConnection.end();
}

