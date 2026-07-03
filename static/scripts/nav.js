function openNav() {
    document.getElementById('sideNav').style.opacity = '1'
    // document.getElementById('sideNav').style.transform = 'translateY(0)'
    document.getElementById('sideNav').style.top = '100%'
    document.getElementById('navOpen').style.display = 'none'
    document.getElementById('navClose').style.display = 'block'
    document.getElementById('coverBg').style.display = 'block'
    // document.getElementById('sideNav').style.width = '100%'
}
function closeNav() {
    document.getElementById('sideNav').style.opacity = '0'
    // document.getElementById('sideNav').style.transform = 'translateY(0)'
    document.getElementById('sideNav').style.top = '-600%'
    document.getElementById('coverBg').style.display = 'none'
    document.getElementById('navOpen').style.display = 'block'
    document.getElementById('navClose').style.display = 'none'
    // document.getElementById('navOpen').style.visibility = 'visible'
    // document.getElementById('sideNav').style.width = '100%'
}