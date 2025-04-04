<div class="flex flex-row justify-center align-middle w-full h-full font-DM">
  <div class="list-none justify-center align-top">
    <ul>
      {{Product__image}}
    </ul>
  </div>

  <div class="w-full h-full">
    <img class="w-fit h-fit" src="{{image}}" alt="image du produit {{name}}" />
  </div>

  <div class="flex flex-col w-full h-fit gap-5 justify-center align-top">
    <div class="flex flex-row justify-evenly">
      <h2 class="font-bold">{{name}}</h2>
      <p class="font-light">{{price}}</p>
    </div>

    <div class="flex flex-col gap-5 justify-evenly w-full">
      <ul class="list-none">
        {{Product__option}}
      </ul>

      <button
        class="bg-black text-white font-DM font-semibold text-center w-full h-fit p-2"
      >
        Add to bag
      </button>
    </div>

  </div>
</div>
