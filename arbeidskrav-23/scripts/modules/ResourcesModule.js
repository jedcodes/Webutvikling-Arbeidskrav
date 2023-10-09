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

/* Dette er ResourcesModule jeg har lagd (Abdifatah)

const ResourcesModule = (()=>{


    const Resources =[
        {
                name: "Snake",
                warriorPrice: 200,
                image: "warrior-1.jpg",
                coin: "gold-coin.png"}, 
            {
                name: "Giant",
                warriorPrice: 500 ,
                image: "warrior-2.jpg",
                coin: "gold-coin.png"

            },
            {
                name: "Big Axe",
                warriorPrice: 150,
                image: "warrior-3.jpg",
                coin: "gold-coin.png"
            },
            {
                name: "Thief",
                warriorPrice: 50,
                image: "warrior-4.jpg",
                coin: "gold-coin.png"
            },
            {
                name: "Tanks",
                warriorPrice: 250,
                image: "warrior-5.jpg",
                coin: "gold-coin.png"
            },
            {
                name: "Berserker",
                warriorPrice: 275,
                image: "warrior-6.jpg",
                coin: "gold-coin.png"
            },


    ];

    const getAll = () => structuredClone( Resources  );
    return{
        getAll
    }

})();

export default ResourcesModule;
