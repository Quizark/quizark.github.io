function copyText() {
    // Get the text from the span
    var copyText = document.getElementById("email").textContent;
  
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
  
    // Select the text field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(tempInput.value).then(function() {
      // Remove the temporary input element
      document.body.removeChild(tempInput);
  
      // Alert the copied text
      alert("Copied the text: " + copyText);
    }).catch(function(err) {
      console.error('Failed to copy text: ', err);
    });
  }