
document.addEventListener("DOMContentLoaded", function () {
    let messageOpened = false; 

    //Google Font
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);


    // WhatsApp Button Container
    const whatsappContainer = document.createElement("div");
    whatsappContainer.style.position = "fixed";
    whatsappContainer.style.bottom = "128px";
    whatsappContainer.style.right = "16px";
    whatsappContainer.style.width = "60px";
    whatsappContainer.style.height = "60px";
    whatsappContainer.style.borderRadius = "50%";
    whatsappContainer.style.backgroundColor = "#25D366";
    whatsappContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    whatsappContainer.style.display = "flex";
    whatsappContainer.style.alignItems = "center";
    whatsappContainer.style.justifyContent = "center";
    whatsappContainer.style.cursor = "pointer";
    whatsappContainer.style.transition = "transform 0.5s ease-in-out";
    whatsappContainer.style.zIndex = "1000";
    whatsappContainer.style.animation = "ringAnimation 2.5s infinite";

    // WhatsApp Logo
    const whatsappLogo = document.createElement("img");
    whatsappLogo.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
    whatsappLogo.alt = "WhatsApp";
    whatsappLogo.style.width = "35px";
    whatsappLogo.style.height = "35px";

    whatsappContainer.appendChild(whatsappLogo);
    document.body.appendChild(whatsappContainer);

    // Message Box
    const textBox = document.createElement("div");
    textBox.style.position = "fixed";
    textBox.style.bottom = "128px";
    textBox.style.right = "16px";
    textBox.style.width = "60px";
    textBox.style.height = "60px";
    textBox.style.backgroundColor = "#B2F7CF";
    textBox.style.borderRadius = "30px";
    textBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    textBox.style.display = "flex";
    textBox.style.alignItems = "center";
    textBox.style.overflow = "hidden";
    textBox.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    textBox.style.zIndex = "999";
    textBox.style.cursor = "pointer";

    const whatsappButtonInside = whatsappContainer.cloneNode(true);
    whatsappButtonInside.style.position = "absolute";
    whatsappButtonInside.style.width = "50px";
    whatsappButtonInside.style.height = "50px";
    whatsappButtonInside.style.left = "5px"; 
    whatsappButtonInside.style.top = "5px"; 
    whatsappButtonInside.style.transition = "all 0.5s ease-in-out";
    whatsappButtonInside.style.animation = "none";


    const textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.marginLeft = "70px"; 
    textContainer.style.maxWidth = "230px";
    textContainer.style.opacity = "0";
    textContainer.style.transition = "opacity 0.3s ease-in-out";

    const firstLine = document.createElement("span");
    firstLine.textContent = "Got any Queries?";
    firstLine.style.color = "#181B1F";
    firstLine.style.fontSize = "14px";
    firstLine.style.marginBottom = "4px";
    firstLine.style.fontFamily = "roboto";
    firstLine.style.lineHeight = "20px";
    firstLine.style.fontWeight = "500";

    const secondLine = document.createElement("span");
    secondLine.textContent = "Quickly chat with our Experts on WhatsApp!";
    secondLine.style.color = "#5B5F69";
    secondLine.style.fontSize = "10px";
    secondLine.style.fontFamily = "roboto";
    secondLine.style.fontWeight = "400";
    secondLine.style.lineHeight = "16px";

    textContainer.appendChild(firstLine);
    textContainer.appendChild(secondLine);
    textBox.appendChild(whatsappButtonInside);
    textBox.appendChild(textContainer);
    document.body.appendChild(textBox);

    // Toggle Functionality
    function openMessageBox() {
        if (!messageOpened) {
            textBox.style.width = "295px";
            textBox.style.height = "60px";
            whatsappContainer.style.transform = "translateX(-240px)"; // Slide with message box
            setTimeout(() => {
                textContainer.style.opacity = "1";
            }, 300);
            whatsappContainer.style.animation = "none";
            
            setTimeout(() => {
                closeMessageBox();
            }, 3000); // Close after 3 seconds

            messageOpened = true;
        }
    }

    function closeMessageBox() {
        textBox.style.width = "60px";
        textBox.style.height = "60px";
        textContainer.style.opacity = "0";
        whatsappContainer.style.transform = "translateX(0px)"; 
        whatsappContainer.style.animation = "ringAnimation 2.5s infinite";
    }

    setTimeout(openMessageBox, 2000);

    const whatsappRedirectUrl = "https://wa.me/1234567890";

    whatsappContainer.addEventListener("click", () => {
        window.open(whatsappRedirectUrl, "_blank");
    });

    textBox.addEventListener("click", () => {
        window.open(whatsappRedirectUrl, "_blank");
    });

    // Keyframes for WhatsApp Button Animation
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
    @keyframes ringAnimation {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.3), 0 0 0 20px rgba(37, 211, 102, 0.2); }
      100% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0), 0 0 0 30px rgba(37, 211, 102, 0), 0 0 0 40px rgba(37, 211, 102, 0); }
    }`;
    document.head.appendChild(styleSheet);

    window.addEventListener("beforeunload", () => {
        document.body.removeChild(whatsappContainer);
        document.body.removeChild(textBox);
        document.head.removeChild(styleSheet);
    });
});


