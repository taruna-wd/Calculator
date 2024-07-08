

let btns = document.querySelectorAll(".button")
let input = document.getElementById("input")
let result = " "



btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerText;
        try {

            if (value == "=") {
                result = eval(result)
                input.value = result;
            } else if (value == "C") {
                result = "";
                input.value = result

            } else if (value == "Delete") {
                result = result.slice(0, -1);
                input.value = result

            } else {
                result = result + e.target.innerText
                input.value = result
            }

        } catch (error) {
            alert("some issue")
        }


    })

})

