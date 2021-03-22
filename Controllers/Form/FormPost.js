/*
export class FormPost {

  constructor(idForm, idTextarea, ListPost) {
    this.form = document.getElementById(idForm);
    this.textarea = document.getElementById(idTextarea);
    this.listPost = document.getElementById(ListPost);
    this.addSubmit();
  }

  formValidate(value) {
    if (value === '' || value === null || value === undefined || value.length < 3) {
      return false
    }
    return true
  }


  onSubmit(func) {
    this.form.addEventListener("submit", func)
  }



  addSubmit() {
    const handleSubmit = (event) => {

      event.preventDefault();
      if (this.formValidate(this.textarea.value)) {
        const newPost = document.createElement("li");
        newPost.classList.add('post')
        const time = this.getTime();
        newPost.innerHTML = `
        <div class="infoUserPost">
          <div class="imgUserPost"></div>

          <div class="nameAndHour">
            <strong>Douglas Pujol</strong>
            <p>${time}</p>
          </div>
        </div>

        <p>
         ${this.textarea.value}
        </p>

        <div class="actionBtnPost">
          <button type="button" class="filesPost like">
            <img src="./assets/heart.svg" alt="Curtir">
            Curtir
          </button>
          <button type="button" class="filesPost comment">
            <img src="./assets/comment.svg" alt="Comentar">
            Comentar
          </button>
          <button type="button" class="filesPost share">
            <img src="./assets/share.svg" alt="Compartilhar">
            Compartilhar
          </button>
        </div>
        `;
        this.listPost.appendChild(newPost);
        this.textarea.value = "";

      } else {
        alert('ALGUM ERRO');
      }
    }

    this.onSubmit(handleSubmit);
  }

  getTime() {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    return `${hour}h ${minutes}min`
  }

}

const postForm = new FormPost('formPost', 'textarea', 'posts')
 */
function sumAllEven(list) {
  let tamanho = list.length;
  let resultArray = [];
  let soma = 0;

  for (var i = 0; i < tamanho; i++) {
    let valor = list[i];



    if (valor.constructor.name == "Array") {
      let tamanho2 = valor.length;
      var somaArray = 0;

      for (var d = 0; d < tamanho2; d++) {
        let valor2 = valor[d]
        if (isNaN(valor2) || valor2 == null || valor2 == undefined) { continue }
        if (!(valor2 % 2) == 0) { continue }
        valor2 = parseInt(valor2);
        somaArray += valor2
      }
      soma += somaArray;
      continue
    }

    if (isNaN(valor) || valor == null || valor == undefined) { continue }


    //REMOVE IMPAR
    if (!(valor % 2) == 0) { continue }

    valor = parseInt(valor);

    resultArray.push(valor);

    soma += valor
  }
  return soma
}


const teste = sumAllEven([[2, 0, null, 'undeifas'], 30, 20, 15, 'jon', [5, 5, 5, 2]])
console.log(teste);
