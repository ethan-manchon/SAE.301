    <div id="cart-container" class="flex flex-col w-full h-fit justify-items-end gap-6 m-2">
        <h1 class="text-3xl font-bold">Shopping Bag</h1>
    
        <div id="cart-list" class="flex flex-col gap-4">
            <!-- Les articles du panier seront rendus ici -->
            {{CartProducts}}
        </div>
    
        <div class="flex justify-center">
            <div id="cart-summary" class="flex flex-row w-fit justify-between items-center">
                <p class="flex flex-row justify-center items-center gap-4 text-lg">Total: <span class="text-sm font-bold" id="cart-total">£ {{price}}</span></p>
            </div>
        </div>
    
        <div class="flex justify-end items-center">
            <div class="flex flex-row w-fit justify-between gap-4">
            
                <div class="flex flex-col w-fit">
                    <p class="text-lg">Promo Code</p>
                    <p class="text-sm font-light">Applied during Checkout</p>
                </div>
    
            <form id="addPromo" class="flex justify-end items-center gap-2">
                <input name="promo" class="h-full w-full p-2 border-gray border-2" placeholder="Enter Promo Code" autocomplete="on">
                <button type="submit" class="bg-black text-white w-full h-full p-2">Add my promo code</button>
                
            </form>
            </div>
        </div>
    
        <div class="w-full h-fit flex flex-row justify-end">
            <button data-id="validateCart" class="flex flex-row bg-black text-white text-base h-fit w-fit px-7 py-2">
                Checkout
            </button>
        </div>
    </div>