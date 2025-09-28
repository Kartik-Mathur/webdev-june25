const socket = io();
const priceDiv = document.getElementById('price');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const chatoutput = document.getElementById('chatoutput');

// setTimeout(() => {
//     console.log(socket.id);
// }, 1000);


socket.on('stock-price', (data) => {
    priceDiv.innerText = data.price
})

btn.addEventListener('click',(ev)=>{
    socket.emit('chat',{
        message: message.value
    });
})

socket.on('chat-message',(msgData)=>{
    let li =document.createElement('li');
    console.log(msgData);
    li.innerText = msgData.message;
    chatoutput.appendChild(li)
})