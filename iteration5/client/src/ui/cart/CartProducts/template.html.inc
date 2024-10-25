
    <section id="{{id}}" class="flex flex-row font-DM w-full h-fit my-4 bg-transparent justify-evenly">

        <div class="flex flex-col gap-4 w-fit p-2">
            <p class="font-normal text-lg">Items</p>

            <div class="flex flex-col gap-4">

                <div class="flex p-2 justify-center items-center w-full h-fit min-w-20 max-w-40 overflow-hidden">
                    <img class="w-full h-fit bg-cover aspect-auto" src="{{url}}" alt="image de {{name}}" loading="lazy">
                </div>

                <div class="flex flex-col items-start gap-4 max-w-full h-fit">
                    <p class="font-light text-sm max-w-full">{{name}}</p>
                    <p class="hover:border-b-black hover:cursor-pointer border-b-2 border-b-transparent ease-in-out">View More
                        Details</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4 w-fit p-2">
            <p class="font-normal text-lg">Option</p>
            <p class="text-sm">{{option}}</p>
        </div>

        <div class="flex flex-col gap-4 w-fit p-2">
            <p class="font-normal text-lg">Quantity</p>
            <div class="flex flex-row w-full justify-evenly items-center p-2 gap-4">
                <button data-id="remove"
                    class="p-2 border-b-2 border-b-transparent transition-all ease-in-out hover:border-b-black text-dark">-</button>
                <p class="font-semibold text-sm">{{quantity}}</p>
                <button data-id="add"
                    class="p-2 border-b-2 border-b-transparent transition-all ease-in-out hover:border-b-black text-dark">+</button>
            </div>
        </div>

        <div class="flex flex-col gap-4 w-fit p-2">
            <p class="font-normal text-lg">Availability</p>
            <p class="text-sm">PAS ENCORE</p>
        </div>

        <div class="flex flex-col gap-4 w-fit p-2">
            <div class="flex flex-col text-end">
                <p class="font-normal text-lg">Order Value</p>
                <p class="">£ {{price}}</p>
            </div>
            <button data-id="delete" class="p-2 w-full rounded-none bg-black text-white">Remove Item</button>
        </div>

    </section>