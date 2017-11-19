
'use strict'

const schema = require('./schema.json')

const avro = require('avsc')
const type = avro.parse(schema)

const kafka = require('kafka-node')
const HighLevelProducer = kafka.HighLevelProducer
const KeyedMessage = kafka.KeyedMessage
const Client = kafka.Client

/* ========= CLIENT ======== */
const client = new Client('localhost:2181', 'my-client-id', {
	sessionTimeout: 300,
	spinDelay: 100,
	retries: 2
})

// For this demo we just log client errors to the console.
client.on('error', error => {
	console.error(error)
})

var producer = new HighLevelProducer(client)

producer.on('ready', () => {
	// Create message and encode to Avro buffer
	var messageBuffer = type.toBuffer({
		enumField: 'sym1',
		id: '3e0c63c4-956a-4378-8a6d-2de636d191de',
		timestamp: Date.now()
	})

	// Create a new payload
	var payload = [{
		topic: 'node-test',
		messages: messageBuffer,
		attributes: 1 /* Use GZip compression for the payload */
	}]

	//Send payload to Kafka and log result/error
	producer.send(payload, (error, result) => {
		console.info('Sent payload to Kafka: ', payload)
		if (error) {
			console.error(error)
		} else {
			var formattedResult = result[0]
			console.log('result: ', result)
		}
	})
})