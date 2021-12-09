document.getElementById("button_file").addEventListener("click", button);
async function button(){
alert("file")
await window.showOpenFilePicker()
}
