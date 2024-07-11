const qr = new QRCode(document.getElementById("qr"));
const inp = document.getElementById("inp");

inp.addEventListener("input", () => {
  qr.makeCode(inp.value);
});
