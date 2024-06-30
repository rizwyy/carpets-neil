// plugins/colorMapping.js
export default defineNuxtPlugin(() => {
  const colorMapping = {
    grey: [
      "cinder",
      "flint grey",
      "coal",
      "silver mine",
      "iron linen",
      "ice berg",
      "griffin linen",
      "river basin",
    ],
    beige: ["sand", "chalk"],
    brown: ["clay", "carbon", "tundra", "griffin linen", "river basin"],
    blue: ["water fall", "fiord"],
    green: ["black"],
    Black: ["flint grey", "coal", "iron linen"],
    Red: [],
    purple: ["limestone", "river basin"],
    multiColored: ["01", "02", "03", "04", "05", "06", "07", "08"],
  };

  return {
    provide: {
      colorMapping,
    },
  };
});
