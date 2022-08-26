const chefReceived = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='chef recieved'
			resolve(orderId)
		}, 2000)
	})
}

const pizzaSauceAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='pizza Sauce Added'
			resolve(orderId)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='first Layer Of Cheeze Added'
			resolve(orderId)
		}, 5000)
	})
}

const toppingsAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='toppings Added'
			resolve(orderId)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            document.getElementById(orderId).innerText='second Layer Of Cheeze Added'
			resolve(orderId)
		}, 5000)
	})
}

const pizzaBaked = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='pizza Baked'
			resolve(orderId)
		}, 15000)
	})
}

const oreganoAddedAndPacked = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='oregano Added And Packed'
			resolve(orderId)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText='package Received At Counter'
			resolve(orderId)
		}, 2000)
	})
}