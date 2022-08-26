const executeOrder = ()=>{
   let orderId = document.getElementById('order-id-input').value
   if(orderId.length>=6){
    document.getElementById('orderid-invalid').style.display = 'none'
   document.getElementById('order-id-input').value =''
   createOrderCard(orderId)

chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => {
			executing.disabled = false;
		})
		.catch((err) => console.log(err))
		
	}
  else{
		document.getElementById('orderid-invalid').style.display = 'block'
		document.getElementById('order-id-input').value = ''
	}
}
	