// Db link
var mongolink = require('mongodb').MongoClient
//Connection to DB
var url = "mongodb+srv://sivertamundsen:clouddev12@cluster0.mteiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
// MQTT broker
var mosca = require('mosca')
var settings = { port: 8080 }
var broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!')
});



broker.on('published', (packet) => {
    message = packet.payload.toString()
    console.log(message)
    mongolink.connect(url, (error, client) => {
        var myCol = client.db('IoT').collection('IoT_Data');
        myCol.insertOne({
            message: message
        }, () => {
            console.log('Data is saved to MongoDB')
            client.close()
        })
    })
})