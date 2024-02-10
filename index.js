let firstbtn = document.getElementById("firstbtn");
let colchange = document.getElementById("colchange");
firstbtn.addEventListener('click', () => { alert(`"Button Clicked!"`); });
colchange.addEventListener('mouseenter', () => {
    colchange.style.backgroundColor = "green";
    colchange.style.color = "white";
    colchange.style.transition = "0.3s";
});
colchange.addEventListener('mouseleave', () => {
    colchange.style.backgroundColor = "white";
    colchange.style.color = "black";
});
