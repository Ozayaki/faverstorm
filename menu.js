let mb = document.getElementById('mb');
let mbc = document.getElementById('mbc');
let leave = document.getElementById('mcont')
let body = document.body

mb.onclick = function () {
    mb.style.display = "none"
    mbc.style.display = "inline"
    leave.style.transform = "translateX(0)"
    body.style.overflow = "hidden"
}
mbc.onclick = function () {
    mbc.style.display = "none"
    mb.style.display = "inline"
    leave.style.transform = "translateX(-50vw)"
    body.style.overflow = "visible"
}