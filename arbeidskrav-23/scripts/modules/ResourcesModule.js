const ResourcesModule = (() => {
  const resources = [
    {
      amount: 0,
      image: "../../images/gold-coin.png",
    },
    {
      amount: 0,
      image: "../../images/metal.png",
    },
    {
      amount: 0,
      image: "../../images/wood.png",
    },
  ];

  const getResources = [...resources];

  return { getResources };
})();

export default ResourcesModule;
