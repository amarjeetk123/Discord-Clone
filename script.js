let box = document.getElementById("box")
let cross = document.getElementById("cross")
let three_line = document.getElementById("three-line")
cross.style.display = 'none'

let nav_list = document.getElementById("nav-list")
box.style.display = 'none'
let downarrow = document.getElementById("down-arrow")
downarrow.addEventListener("click" , () => {
  if(box.style.display === 'none'){
    box.style.display = 'block'
  }
  else{
    box.style.display = 'none'
  }
} )
cross.addEventListener("click" , () => {
    cross.style.display = 'none'
    nav_list.style.left = '100%'
    box.style.display = 'none'
} )
three_line.addEventListener("click" , () => {
  if(cross.style.display === 'none'){
    cross.style.display = 'block'
    nav_list.style.left = '30%'
  }
  else{
    cross.style.display = 'none'
  }
} )

