function applyFunctionToContainers() {
  //essa funcao será aplicada as divs/exercicios
  const containers = [1, 2, 3, 4, 5, 6]; //quais? todas

  containers.forEach((N) => {
    const containerN = document.querySelector(`#exercicio${N}`); // Declara container
    const btnN = document.querySelector(`#snd_btn${N}`); // Declara botão

    if (!containerN || !btnN) {
      //checa se algo nao foi encontrado
      console.error(`Elemento não encontrado para exercício ${N}`);
      return;
    }

    console.log(btnN); // Para depuração

    // Declaração dos inputs
    const inputs = [...containerN.querySelectorAll(".input")]; // Declara inputs em uma array

    if (N === 2 && inputs.length === 2) {
      // Se estiver na div 2 e houver 2 inputs, soma os valores, caso do exercicio 2
      btnN.addEventListener("click", () => {
        console.log("Botão clicado!");
        const soma = Number(inputs[0].value) + Number(inputs[1].value);
        let istorXXNnElement = document.createElement("p");
        istorXXNnElement.textContent = soma;
        containerN.appendChild(istorXXNnElement);
      });
      return; // Sai da função para não executar o restante do código para div 2
    }

    btnN.addEventListener("click", () => {
      // Função de clique

      console.log("Botão clicado!");

      inputs.forEach((input) => {
        //me diz o tipo do input
        const inputType =
          input.tagName.toLowerCase() === "input" && input.type === "text"
            ? "TF"
            : input.tagName.toLowerCase() === "input" && input.type === "number"
            ? "NF"
            : input.tagName.toLowerCase() === "select"
            ? "SLC"
            : input.tagName.toLowerCase() === "input" &&
              input.type === "checkbox"
            ? "CB"
            : input.tagName.toLowerCase() === "input" && input.type === "radio"
            ? "RD"
            : "";
        const ivXXNnValue = input.value; //declara o valor do input

        if (ivXXNnValue === "") {
          alert("O campo não foi preenchido, preencha algo!"); // Se valor do input não tiver nada, mostre alerta
        } else {
          let istorXXNnElement = document.createElement("p"); // Crie um elemento p por padrão

          if (inputType === "SLC") {
            istorXXNnElement = document.createElement("h3"); // Se o input type for SLC, crie um elemento h3
            const existingElement = containerN.querySelector("h3");
            if (existingElement) {
              existingElement.remove(); // Remove elemento h3 anterior antes de adicionar um novo
            }
          }

          if (N === 3 && containerN.querySelector("#list3")) {
            // Se o container tiver uma list3, crie o elemento li
            istorXXNnElement = document.createElement("li");
            istorXXNnElement.textContent = ivXXNnValue;
            const list3 = containerN.querySelector("#list3");
            list3.appendChild(istorXXNnElement); // Adiciona o li dentro da ul --- SERÁ???
          } else {
            istorXXNnElement.textContent = ivXXNnValue; // Coloque o valor do input no elemento
            containerN.appendChild(istorXXNnElement); // Se não tiver lista, coloque o elemento no final da div
          }
        }
      });
    });

    if (N === 5 && inputs.some((input) => input.type === "checkbox")) {
      //DIV 5 - Deve printar somente o que foram flegados
      inputs.forEach((input, index) => {
        input.addEventListener("change", () => {
          const cbValue = input.value;
          const existingElement = containerN.querySelector(
            `#istorCB${N}${index + 1}`
          );
          if (input.checked) {
            //crie p a cada clique de checkbox
            if (!existingElement) {
              let istorXXNnElement = document.createElement("p");
              istorXXNnElement.id = `istorCB${N}${index + 1}`;
              istorXXNnElement.textContent = cbValue;
              containerN.appendChild(istorXXNnElement);
            }
          } else if (existingElement) {
            existingElement.remove(); // Remove o elemento p se a checkbox for desmarcada
          }
        });
      });
    }

    if (N === 6 && inputs.some((input) => input.type === "radio")) {
      //os botoes nao podem ser selecionados mais de um por vez (usei name), somente o botao selecionado da vez pode exibir o p.
      inputs.forEach((input) => {
        input.addEventListener("change", () => {
          const selectedRadio = containerN.querySelector(
            'input[type="radio"]:checked'
          );
          if (selectedRadio) {
            // Remover qualquer elemento "p" existente antes de adicionar um novo
            const existingElement = containerN.querySelector("p");
            if (existingElement) {
              existingElement.remove();
            }

            let istorXXNnElement = document.createElement("p");
            istorXXNnElement.textContent = selectedRadio.value;
            containerN.appendChild(istorXXNnElement);
          }
        });
      });
    }
  });
}

applyFunctionToContainers();
