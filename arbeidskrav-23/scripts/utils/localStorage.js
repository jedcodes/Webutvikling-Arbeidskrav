import ResourcesModule from "../modules/ResourcesModule.js";

const setResources = () => {
  const resources = ResourcesModule.getResources();
  if (!localStorage.getItem("resources")) {
    localStorage.setItem("resources", JSON.stringify(resources));
  }
};

setResources();

export const resources = JSON.parse(localStorage.getItem("resources"));

// UPDATE RESOURCE AMOUNT
const updateAmount = (resourceType, action) => {
  const resource = resources.find((res) => res.resourceType === resourceType);

  console.log(resource);
  switch (action) {
    case "ICREAMENT":
      resource.amount += 2000;
      break;
    case "DECREAMENT":
      resource.amount -= 1000;
      break;
    default:
      console.log("Not here!");
  }

  localStorage.setItem("resources", JSON.stringify(resources));
};

updateAmount("Gold", "ICREAMENT");
updateAmount("Metal", "ICREAMENT");
updateAmount("Gold", "DECREAMENT");
