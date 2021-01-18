const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I75o4DfoPgyFqgKmrcvKMNZCeYg3AJDOH7W66H4LKhgMdzKWAoRlKyY9LEGdz6vCBVsS07JAdfkkAaO5cJ3KaYi00Du0Sipfm');


//API  

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send("Hello World!"));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Received BOOM! for this amount: ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd"
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	})
})

// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-8e1fe/us-central1/api