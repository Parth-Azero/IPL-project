const CSK = [
  {
    name: "dhoni",
    role: "12",
  },
  {
    name: "mahi",
    role: "13",
  },
];

const MI = [
  {
    name: "dhoni",
    role: "12",
  },
];

//
const handelRenderTeam = async (team) => {
  if (team) {
    const renderPlace = document.querySelector("#displayTeam");
    team.map((item, index) => {
      const container = document.createElement("a");

      container.href = `/CSK-details.html`;
      const imageWarper = document.createElement("div");
      container.append(imageWarper);

      const displayName = document.createElement("h5");
      displayName.innerText = item?.name;
      container.append(displayName);

      const topBatsMan = document.createElement("p");
      topBatsMan.innerText = item?.role;
      container.append(topBatsMan);

      renderPlace.appendChild(container);
    });
  }
};

handelRenderTeam(CSK);

// document.querySelector("#searchPlayer")?.addEventListener("click", (e) => {
//   let searchedName = document.querySelector("#input-box").value);
//   console.log(CSK.filter(()=>searchedName);

// });
