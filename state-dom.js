let list = document.getElementById("list");
let input = document.getElementById("addInput");
let textInput = document.getElementById("textInput");

let arr = [
  {
    text: "первое дело",
    done: true,
  },
  {
    text: "второе дело",
    done: true,
  },
  {
    text: "третье дело",
    done: true,
  },
  {
    text: " четвертое дело",
    done: true,
  },
  {
    text: "пятое дело",
    done: true,
  },
];

input.addEventListener("click", function (el) {
  el.preventDefault();
  addTodo(textInput.value);
});

function render(arr) {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = arr[i].text;
    const div = document.createElement("div");
    div.className = "lis";
    const but = document.createElement("button");
    but.addEventListener("click", function (el) {
      for (let i = 0; i < arr.length; i++) {
        if (el.target.parentElement.childNodes[1].textContent === arr[i].text) {
          remove(i);
        }
      }
      render(arr);
    });
    but.className = "but";
    but.innerText = "❌";
    const check = document.createElement("input");
    check.addEventListener("click", function (el) {
      for (let i = 0; i < arr.length; i++) {
        if (el.target.parentElement.childNodes[1].textContent === arr[i].text) {
          checkTodo(i);
          if (arr[i].done === false) {
            div.style.border = "1px solid black";
          } else {
            div.style.border = "none";

            div.style.borderBottom = "1px solid black";
          }
        }
      }
    });
    check.type = "checkbox";

    div.append(check, h1, but);
    if (arr[i].done === false) {
      div.style.border = "1px solid black";
      check.checked = "checked";
    } else {
      div.style.border = "none";

      div.style.borderBottom = "1px solid black";
    }

    list.prepend(div);
  }
}

function remove(index) {
  arr.splice(index, 1);
  render(arr);
}

function addTodo(text) {
  arr.push({ text: text, done: true });
  textInput.value = "";
  render(arr);
}

function checkTodo(index) {
  arr[index].done = !arr[index].done;
}

render(arr);
