    <header class="flex flex-col bg-white justify-evenly w-full h-fit sticky items-center px-10 pb-2 gap-4">

        <!-- Navbar -->
        <div class="flex flex-col md:flex-row md: items-center justify-center md:justify-center md:gap-4 w-full h-fit">

            <!-- logo -->
            <div class="container flex justify-between items-center m-0 p-4 w-fit h-fit gap-4">
                <img id="Logo" class="hover:cursor-pointer shrink-0" src="../assets/made-logo-desktop.svg" alt="LOGO">

                <div class="hidden md:flex md:flex-row relative border-gray border-1">
                    <input class="border-2 border-dark pl-4 pr-10 py-2" type="text" placeholder="Search" autocomplete="on">
                    <img src="../assets/search-input-button.svg" alt="Search" class="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
                </div>

            </div>

            <div class="flex flex-row gap-4 w-fit h-fit justify-evenly items-center">

                <!-- Menu -->
                <div class="flex flex-row aspect-auto gap-4">

                    <!-- menu desktop/mobile -->
                        
                        <div class="flex flex-row justify-center items-center gap-x-6">

                            {{account}}

                            <a title="Mes favoris" href="#"> <img src="../assets/favourites-inactive-large.svg" alt="Favourites" class="aspect-square hover:cursor-pointer"></a>
                            
                            <a title="Mon Panier" data-id="account" id="cart" href="#"> <img src="../assets/shopping-bag-large.svg" alt="Shopping Bag" class="aspect-square hover:cursor-pointer"></a>
                        
                        </div>

                        <button type="button" data-id="validateCart" class="flex hover:bg-black transition-all bg-gray text-white text-base h-fit w-fit px-7 py-2">
                            Checkout
                        </button>

                </div>

            </div>
        </div>

        <!-- filtres -->
        <ul id="nav" class="flex flex-row gap-5 inset-8tems-center justify-center self-center *:cursor-pointer">
            <li data-id="category" class="hover:border-b-dark border-b-2 border-b-transparent" id="0">All</li>
            <li data-id="category" class="hover:border-b-dark border-b-2 border-b-transparent" id="1">Lights</li>
            <li data-id="category" class="hover:border-b-dark border-b-2 border-b-transparent" id="2">Sofas</li>
            <li data-id="category" class="hover:border-b-dark border-b-2 border-b-transparent" id="3">Tables</li>
        </ul>

    </header>