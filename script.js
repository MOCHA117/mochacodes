function showMessage() {
    alert("Hello! Welcome to Mocha Codes.");
}

function runCode() {
    let code = document.getElementById("codeArea").value;
    try {
        let output = eval(code);
        document.getElementById("output").textContent = output !== undefined ? output : "Code ran successfully!";
    } catch (error) {
        document.getElementById("output").textContent = "Error: " + error.message;
    }
}
