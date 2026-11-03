 document.addEventListener("DOMContentLoaded", () => {
            showSection("home");
        });
        
        function showSection(sectionId) {
            document.querySelectorAll(".section").forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(sectionId).classList.add("active");
        }
        
        let resultScreen = document.getElementById("result");
        
        function pressKey(value) {
            resultScreen.value += value;
        }
        
        function clearScreen() {
            resultScreen.value = "";
        }
        
        function deleteLast() {
            resultScreen.value = resultScreen.value.slice(0, -1);
        }
        
        function calculateResult() {
            try {
                resultScreen.value = eval(resultScreen.value);
            } catch {
                resultScreen.value = "Error";
            }
        }