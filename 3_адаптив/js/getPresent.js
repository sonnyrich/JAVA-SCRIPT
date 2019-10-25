let buttonShowModalPresent = document.getElementById('getPresentModal')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closeModalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')

buttonShowModalPresent.onclick = function() {
    modalPresentWindow.style.display = 'block'
}
closePresentWindow.onclick = function() {
    modalPresentWindow.style.display = 'none'

}
sendPresentInfo.onclick = function() {
    let nameGuest = document.getElementById('name__guest').value
    let selectGuest = document.getElementById('selectGuest').value
}

console.log('modalPresentWindow', modalPresentWindow)
console.log('sendPresentInfo', sendPresentInfo)