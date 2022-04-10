let inputToan;
let inputLy;
let inputHoa;
inputToan = prompt("Enter the Toan");
inputHoa = prompt("Enter the Hoa");
inputLy = prompt("Enter the Ly");
let Toan = parseInt(inputToan);
let Hoa = parseInt(inputHoa);
let Ly = parseInt(inputLy);
dtb = (Toan + Ly +Hoa)/3
document.write("dtb: " + dtb);