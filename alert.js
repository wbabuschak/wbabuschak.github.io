let i = 0;
setInterval(() => {
    i++;
    let alert_message = `This page has been loaded for ${i} seconds`;
    document.getElementById("tooltip").textContent = alert_message;
}, 1000);  