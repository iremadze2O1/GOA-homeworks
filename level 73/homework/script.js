        // Task 2

        // Change Text Content
        function changeTextContent() {
            document.getElementById("textElement").textContent = "The text has been changed!";
            console.log("Text content changed!");
        }

        // Swap Colors (Text and Background)
        function swapColors() {
            const div = document.getElementById("colorDiv");
            const textColor = div.style.color;
            const backgroundColor = div.style.backgroundColor;

            div.style.color = backgroundColor;
            div.style.backgroundColor = textColor;
        }

        // Hide Element
        function hideElement() {
            document.getElementById("elementToHide").style.display = "none";
        }

        // Change Font for Elements with the Same Class
        function changeFont() {
            const elements = document.querySelectorAll('.fontElement');
            elements.forEach(element => {
                element.style.fontFamily = "Courier New, monospace";
            });
        }

        // Task 3

        // Change Paragraph Content
        function changeParagraphContent() {
            document.getElementById("paragraph").textContent = "This is the new content of the paragraph.";
        }

        // Change Image Source
        function changeImageSource() {
            document.getElementById("imageElement").src = "https://via.placeholder.com/150/0000FF/808080";
        }

        // Display Input Text in Paragraph
        function displayInputText() {
            const inputText = document.getElementById("inputText").value;
            document.getElementById("paragraph").textContent = inputText;
        }