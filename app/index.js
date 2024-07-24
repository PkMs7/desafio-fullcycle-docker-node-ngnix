const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

async function getName() {
    try {
        const response = await fetch('https://randomuser.me/api/?inc=name&nat=BR');
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }

        const data = await response.json();
        const name = data.results[0].name.first;

        const nameStr = `${name}`
        return nameStr

    } catch (error) {
        console.error('Erro ao buscar o nome:', error);
    }
}

async function saveNameToDatabase() {
    const nameStr = await getName();

    const insertPeople = `insert into people(name) values("${nameStr}")`;
    connection.query(insertPeople);

}

app.get("/", (req, res) => {

    saveNameToDatabase();

    connection.query("select * from people", function (err, rows) {
        if (err) throw err;

        var body = "<h1 style='color: blue; text-align: center;'> Full Cycle Rocks!! </h1> <ul style='list-style-type: none; padding: 0;'>";
        for (let i in rows) {
            body += "<li style='background-color: #f2f2f2; margin: 5px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px;'>" + rows[i].name + "</li>";
        }
        body += "</ul>";

        return res.send(body);
    });

});

app.listen(port, () => {
    console.log('Aplicação disponível na porta ' + port)
})