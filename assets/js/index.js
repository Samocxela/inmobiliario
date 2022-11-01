
let total = document.getElementById("total");

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo ",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    },
    {
      name: "Bungalow",
      description: "El mejor bungalow con las mejores comodidades ",
      src:
        "https://s.hdnux.com/photos/01/05/06/37/18114549/3/rawImage.jpg",
      rooms: 5,
      m: 400
    }
  ];

  window.onload= function(){
      cargarPropiedades();
  }  

  //se cargan las propiedades al html  
  function cargarPropiedades(){
      let html='';
      let contenedorPropiedades = document.querySelector('.propiedades');

      //ordeno el array por metros cuadrados
      propiedadesJSON.sort((a,b)=>{
        if(a.m == b.m){
          return 0;
        }
        if (a.m < b.m){
          return -1;
        }
        else{
          return 1;
        }
        console.log(propiedadesJSON)
 
      });
      

      for (let propiedad of propiedadesJSON) {
          html +=`<div class="propiedad">
                    <div class="img" id="imagen" style="background-image: url('${propiedad.src}')"></div>
                    <section>
                      <h5 id="name">${propiedad.name}</h5>
                      <div class="d-flex justify-content-between">
                        <p id="cuartos">Cuartos: ${propiedad.rooms} </p>
                        <p id="metros">Metros:${propiedad.m} </p>
                      </div>
                      <p class="my-3" id="nombre">${propiedad.description}</p>
                      <button class="btn btn-info ">Ver más</button>
                    </section>
                  </div>`
      }
      contenedorPropiedades.innerHTML = html;
      total.innerHTML = propiedadesJSON.length;
  }
  
  function buscar(){
      let cantCuartos = document.querySelector("#cantCuartos");
      let desde = document.querySelector("#desde");
      let hasta = document.querySelector("#hasta");

   // se realiza la validacion de campos vacios
      if (cantCuartos.value == ""){
          alert('Debes ingresar el número de cuartos');
          cantCuartos.focus();
          return false;
      } else if (desde.value == ""){
          alert('Debes ingresar el número de metros desde');
          desde.focus();
          return false;
      } else if (hasta.value == ""){
          alert('Debes ingresar el número de metros hasta');
          hasta.focus();
          return false;
      }else{
        buscarPropiedades(cantCuartos.value,desde.value,hasta.value);
      }

  }

document.querySelector('#btnBuscar').addEventListener("click",function(){
    buscar();
});

function buscarPropiedades( numCuartos,desde,hasta){
  let html='';
  let contenedorPropiedades = document.querySelector('.propiedades');
  numCuartos = document.querySelector("#cantCuartos").value;
  desde = document.querySelector("#desde").value;
  hasta = document.querySelector("#hasta").value;

  let cantPropiedades=[];

  for (let propiedades of propiedadesJSON) {
     
      if((propiedades.rooms == numCuartos)&&(propiedades.m>=desde)&&(propiedades.m<=hasta)){
         cantPropiedades.push(propiedades);
          html +=`<div class="propiedad">
          <div class="img" id="imagen" style="background-image: url('${propiedades.src}')"></div>
          <section>
            <h5 id="name">${propiedades.name}</h5>
            <div class="d-flex justify-content-between">
              <p id="cuartos">Cuartos: ${propiedades.rooms} </p>
              <p id="metros">Metros:${propiedades.m} </p>
            </div>
            <p class="my-3" id="nombre">${propiedades.description}</p>
            <button class="btn btn-info ">Ver más</button>
          </section>
        </div>`
      }
  }
  console.log(cantPropiedades)
  total.innerHTML = cantPropiedades.length;
  contenedorPropiedades.innerHTML = html;
}


    
    