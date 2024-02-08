
function getRandomTime(){
	return Math.floor(Math.random()*3000)+1000;
}
// console.log(getRandomTime());

function createPromise(id) {
	 return new Promise((resolve,reject)=>{
		 let randomTime = getRandomTime();
		 setTimeout(()=>{
			 resolve({id:id,time:randomTime/1000})
		 },randomTime)
	 })
	
}

const promises = [
	createPromise('Promise 1'),
	createPromise('Promise 2'),
	createPromise('Promise 3')
]

Promise.all(promises)
.then((result)=>{
	 // console.log(result);
	const table = document.querySelector("#output");
	result.forEach((data)=>{
		let row = table.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		cell1.innerText = data.id;
		cell2.innerText = data.time; 
		 // console.log(data);
	})
	let totalTime= result.reduce((total,curr)=>(total +=curr.time),0);
	let row = table.insertRow();
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	cell1.innerText = "Total";
	cell2.innerText = totalTime;
	// console.log(totalTime);
	table.deleteRow(0);
})
.catch((error)=>console.log(error))

















