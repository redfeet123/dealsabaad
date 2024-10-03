document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");
    const form = document.getElementById("applicationForm");
    const messageDiv = document.getElementById("message");

   
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.classList.add("dragging");
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("dragging");
    });


    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.classList.remove("dragging");
        const files = event.dataTransfer.files;
        handleFiles(files);
    });

  
    dropArea.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
        const files = event.target.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        [...files].forEach((file) => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const imgDiv = document.createElement("div");
                    imgDiv.classList.add("preview-image");

                    const img = document.createElement("img");
                    img.src = event.target.result;
                    imgDiv.appendChild(img);

                    const removeBtn = document.createElement("button");
                    removeBtn.innerHTML = "&times;";
                    removeBtn.classList.add("remove-btn");
                    removeBtn.onclick = () => {
                        preview.removeChild(imgDiv);
                    };
                    imgDiv.appendChild(removeBtn);

                    preview.appendChild(imgDiv);
                };
            }
        });
    }

    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        messageDiv.textContent = ''; 

        const formData = new FormData(form);

        
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            messageDiv.textContent = 'Form submitted successfully!';
            
            form.reset();
            preview.innerHTML = ''; 
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'Error submitting form. Please try again.';
        });
    });
});
