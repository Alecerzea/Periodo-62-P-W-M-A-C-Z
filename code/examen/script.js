function showBookForm() {
    var formContainer = document.getElementById("form-container");
   
    var formHTML = `
      <div class="form-container">
        <label class="form-label" for="ISBN">ISBN:</label>
        <input class="form-input" type="text" id="ISBN" name="ISBN">
        <label class="form-label" for="titulo">Titulo:</label>
        <input class="form-input" type="text" id="Titulo" name="Titulo">
        <label class="form-label" for="subtitulo">Subtítulo:</label>
        <input class="form-input" type="text" id="subtitulo" name="subtitulo">
        <label class="form-label" for="ano">Año de publicación:</label>
        <input class="form-input" type="text" id="ano" name="ano">
      </div>
    `;
   
    formContainer.innerHTML = formHTML;
  }
 
  function showEditorialForm() {
    var formContainer = document.getElementById("form-container");
   
    var formHTML = `
      <div class="form-container">
        <label class="form-label" for="editorial-titulo">Título:</label>
        <input class="form-input" type="text" id="editorial-titulo" name="editorial-titulo">
        <label class="form-label" for="nombre">Nombre:</label>
        <input class="form-input" type="text" id="nombre" name="nombre">
        <label class="form-label" for="domicilio">Domicilio:</label>
        <input class="form-input" type="text" id="domicilio" name="domicilio">
      </div>
    `;
   
    formContainer.innerHTML = formHTML;
  }