import resourcesModule from "./modules/resourcesModule.js";

const outputSection = document.querySelector("#output-section");

const showall = () => {

    const allResources = resourcesModule.getAll();

    let htmlText = "";

    allResources.forEach( resource => {
        htmlText += `
        <article class="col-12 col-md-6 col-lg-4"> 
        <div class="border shadow p-3 rounded h-100">
        <div class="text-center "  style="width: 10.6rem;"
                     <h3 class="">${resource.name}</h3>
            <img clas="img-fluid img-fluid img-thumbnail " src="images/${resource.image}">
           
         <button class="btn btn-success "> BuyWarrior </button>
             


        </div>

        </div>
        </article>
        `
    });
    outputSection.innerHTML = htmlText;
}
(()=>{
    showall();
})();
