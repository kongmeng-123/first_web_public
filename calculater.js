let delete_btn = document.getElementById("delete_btn");
let display = document.getElementById("display");
let clear_btn = document.getElementById("clear_btn")

function inputkey(value) {
    display.value += value
}
function persen_fun(value) {
    return value / 100
}

function power_fun(base, exponent) {
    return base ** exponent
}

function calculate() {
    if (display.value.slice(-1) === '%') {
        display.value = persen_fun(display.value.slice(0, -1))
    }

    else if (display.value.includes('^')) {
        let power = display.value.indexOf('^');
        let base = display.value.slice(0, power);
        let exponent = display.value.slice(power + 1);
        display.value = power_fun(base, exponent);

    }

    else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error"
        }
    }

}

clear_btn.addEventListener("click", () => {
    display.value = ""
})
delete_btn.addEventListener("click", () => {
    let pop_infor = display.value.slice(0, -1);
    display.value = pop_infor;
})
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let mark_keys = ['+', '-', '*', '/', '^', '%', '.']


window.addEventListener('keydown', event => {
    if (event.key in number) {
        inputkey(event.key)
    } 
    else if (event.key === "Backspace"){
        display.value = display.value.slice(0, -1)
    }
    else if(event.key === "Enter"){
        calculate()
    }
    else if(event.key === "c"){
        display.value= ''
    }
    else {
        for (let i = 0; i < mark_keys.length; i++) {
            if (mark_keys[i] === event.key) {
                inputkey(event.key)
            }
        }
    }

})