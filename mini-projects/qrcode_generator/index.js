const spinner = document.getElementById("spinner");
const section = document.getElementById("display-qrcode");
const qrCode = document.getElementById("qrcode");
const btn = document.getElementById("generate");
const h3 = document.getElementById("display-url");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const url = document.getElementById("url-input");
  const size = document.getElementById("size-input");
  if (!url.value.trim()) {
    alert("URL cannot be empty...");
  } else if (!isValidUrl(url.value.trim())) {
    alert("Enter a valid URL...");
  } else {
    clearQR();
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      h3.innerText = url.value;
      generateQRCode(url.value, size.value);
      // Generate the save button after the qr code image src is ready
      setTimeout(() => {
        const saveUrl = qrCode.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
      url.value = "";
    }, 1000);
  }
});

const clearQR = () => {
  qrCode.innerHTML = "";
  h3.innerHTML = "";
  if (section.children.length > 3) {
    const lastSectionChild = section.children[section.children.length - 1];
    lastSectionChild.remove();
  }
};

const isValidUrl = (string) => {
  try {
    return Boolean(new URL(string));
  } catch (e) {
    return false;
  }
};

const hideSpinner = () => {
  spinner.style.display = "none";
};

const showSpinner = () => {
  spinner.style.display = "block";
};

const generateQRCode = (url, size) => {
  new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "btn btn-danger m-4";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save As Image";
  section.appendChild(link);
};
