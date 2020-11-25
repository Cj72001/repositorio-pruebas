const showModal = (model, target) => {
  target.innerHTML = "";
  target.appendChild(model);
  $("#end-modal").modal("show");
};

const createModalRoom = (info) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("modal-content");
  wrapper.classList.add("rounded");
  wrapper.style = "background-color: #eeeeee";

  let modelContent = `
    <div class="modal-content-header">
            <h5 class="modal-info px-4 pt-3 text-center">${info.header_info}</h5>
          </div>
          <div class="modal-content-body d-flex justify-content-center align-items-center" style="height: 100px;">
            <button type="button" class="btn btn-room-end mr-3" data-dismiss="modal">Finalizar</button>
            <button type="button" class="btn ml-3" data-dismiss="modal">Cancel</button>
          </div>
          <div class="modal-content-footer">
            <h6 class="modal-warning pl-3 text-left">
              <i class="fa fa-exclamation-circle ml-1"></i>${info.footer_info}
            </h6>
          </div>
    `;
  wrapper.innerHTML = modelContent;

  return wrapper;
};

const createJSON = (header, footer) => {
  return {
    header_info: header,
    footer_info: footer,
  };
};

const saveData = (infoRoom) => {
  const modal = createModalRoom(infoRoom);
  showModal(modal, document.querySelector("#end-modal .modal-dialog"));
};

const endRoomListener = () => {
  const btnEndRoom = document.getElementById("btn-end-room");

  btnEndRoom.addEventListener("click", () => {
    const infoRoom = createJSON(
      "¿Desear terminar la sesion de sala UCA?",
      "Algunas mesas pueden estar activas"
    );

    saveData(infoRoom);
  });
};

const endGrouplistener = () => {
  const btnEndGroup = document.getElementById("btn-end-group");

  btnEndGroup.addEventListener("click", () => {
    const infoRoom = createJSON(
      "¿Desear terminar la partida de la mesa 1?",
      "La mesa puede seguir activa"
    );

    saveData(infoRoom);
  });
};

const showInfoRoom = () => {
  const groupContent = document.querySelector(".group-content");
  const showGroup = document.querySelector(".group-body");

  groupContent.addEventListener("mouseover", () => {
    showGroup.style.visibility = "visible";
    groupContent.style.backgroundColor = "#0278ae";
  });

  /* UTILIZANDO JQUERY
  $(".group-content").on("mouseover", () => {
    $(".group-body").css("visibility", "visible");
    $(".group-content").css("background-color", "#0278ae");
  });
  */
};

const hideInfoRoom = () => {
  const groupContent = document.querySelector(".group-content");
  const hideGroup = document.querySelector(".group-body");

  groupContent.addEventListener("mouseleave", () => {
    hideGroup.style.visibility = "hidden";
    groupContent.style.backgroundColor = "#51adcf";
  });

  /* UTILIZANDO JQUERY :')
  $(".group-content").on("mouseleave", () => {
    $(".group-body").css("visibility", "hidden");
    $(".group-content").css("background-color", "#51adcf");
  });
  */
};

const addTutorListener = () => {
  const btnTutor = document.getElementById("btn-tutor");

  btnTutor.addEventListener("click", () => $("#tutor-modal").modal("show"));
};

const addListenersRooms = () => {
  endRoomListener();
  endGrouplistener();
};

const addListenersTutor = () => {
  addTutorListener();
};
const addMouseHoversRooms = () => {
  showInfoRoom();
  hideInfoRoom();
};

const App = () => {
  if (document.querySelector("#tutor-modal")) addListenersTutor();
  else {
    addListenersRooms();
    addMouseHoversRooms();
  }
};

window.onload = App;
