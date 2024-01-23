const socket = io();

socket.on("allMessages", (data) => {
  render(data);
  let chat = document.getElementById("caja");
  chat.scrollTop = chat.scrollHeight;
});

const render = (data) => {
  let html = data
    .map((e) => {
      return `<div>
    <strong>${e.name}</strong> 
    <em>${e.text}</em>
    </div>`;
    })
    .join(" ");
  document.getElementById("caja").innerHTML = html;
};

const addMsj = () => {
  const msj = {
    name: document.getElementById("name").value,
    text: document.getElementById("text").value,
  };
  socket.emit("newMessage", msj);
  return false;
};
