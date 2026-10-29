const floatingBits=document.querySelector('#floatingBits'); 
function createBit(){ 
    const bit=document.createElement('span'); 
    bit.classList.add('bit'); 
    const values=['01','10','11','00']; 
    bit.textContent=values[Math.floor(Math.random()*values.length)];
    bit.style.left=Math.random()*100+'%'; 
    bit.style.animationDuration=8+Math.random()*10+'s'; 
    floatingBits.appendChild(bit); 
    setTimeout(()=>{ 
        bit.remove(); 
    },18000);
}
setInterval(createBit,500);
