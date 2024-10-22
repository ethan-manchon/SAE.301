<section data-id="{{id}}" class="flex flex-col font-DM justify-evenly items-center p-10 w-full h-50rem md:flex-row">

  <div class="flex flex-col w-fit h-fit gap-5 justify-center align-top">
    <div class="flex flex-row justify-between w-full h-fit">
      <h2 class="font-bold"> {{name}} </h2>
      <p class="font-light"> £ {{price}} </p>
    </div>
    <div class="flex flex-col gap-5 justify-evenly w-full">

      <div id="listeOption" class="flex flex-col gap-5"> 
      {{Option}}
      </div> 


          <!-- boutton "add to bag" -->
      <div class="flex flex-row justify-evenly items-center w-25rem h-fit p-2 gap-5">
          <div class="hover:cursor-pointer p-2 border-2 border-dark rounded-3xl"><img
                  src="../assets/favourites-inactive-large.svg" alt="Favourites" loading="lazy"></div>
          <button data-id="addToCart" class="bg-black text-white w-full h-10">Add to Bag</button>
      </div>

         <!-- description -->
          <p class="font-normal text-sm w-25rem">{{description}}</p>

    </div>

  </div>
</section>
