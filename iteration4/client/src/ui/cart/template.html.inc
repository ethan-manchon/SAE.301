<div id="cart-container" class="flex flex-col h-fit justify-items-end gap-6 m-2">
    <h1 class="text-3xl font-bold">Shopping Bag</h1>

    <div id="cart-list">
        <!-- Les articles du panier seront rendus ici -->
        {{CartProducts}}
    </div>

    <div class="flex justify-end">
        <div id="cart-summary" class="flex flex-row w-25rem justify-between items-center">
            <p class="text-lg">Total: <span class="text-sm font-normal" id="cart-total">£{{price}}</span></p>
        </div>
    </div>

    <div class="flex justify-end items-center">
        <div class="flex flex-row w-fit justify-between gap-4">
            <div class="flex flex-col w-fit">
                <p class="text-lg">Promo Code</p>
                <p class="text-sm font-light">Applied during Checkout</p>
            </div>
            <input class="h-full w-60 p-4 border-gray border-2" placeholder="Enter Promo Code" autocomplete="on">
        </div>
    </div>

    <div class="w-full h-fit flex flex-row justify-end">
        <button id="checkout-button" class="flex flex-row bg-black text-white text-base h-fit w-fit px-7 py-2">
            Checkout
        </button>
    </div>
</div>

<!--

-->