

    <header class="flex flex-col bg-white justify-evenly w-full h-fit items-center px-10 pb-2 sticky top-0 z-50">
        <div class="flex flex-row items-center justify-evenly w-full h-fit gap-5">
            <div class="container flex justify-between items-center m-0 p-4 w-fit h-fit min-w-full min-h-full aspect-auto gap-4">

                <a href="#"><img id="Logo" class="hover:cursor-pointer min-w-full" src="../assets/made-logo-desktop.svg" alt="LOGO" /></a>

                <div class="hidden md:inline relative border-gray border-1">
                    <input class="border-2 border-dark pl-4 pr-10 py-2" type="text" placeholder="Search" autocomplete="on" />
                                        <img src="../assets/search-input-button.svg" alt="Search"
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer" />
                </div>

            </div>
            <div class="flex flex-row gap-4 w-fit h-fit justify-evenly items-center">
                <div class="flex flex-row aspect-auto gap-4 scale-110 items-center">

                    <a href="#"> <img src="../assets/hamburger-menu.svg" alt="Menu" 
                        class="aspect-square hover:cursor-pointer md:hidden" </a>

                    <a href="#"> <img src="../assets/made_my-account_desktop.svg" alt="My Account"
                        class="hidden aspect-square hover:cursor-pointer md:inline" </a>

                    <a href="#"> <img src="../assets/favourites-inactive-large.svg" alt="Favourites"
                        class="hidden aspect-square hover:cursor-pointer md:inline" </a>

                    <a href="#"> <img src="../assets/shopping-bag-large.svg" alt="Shopping Bag"
                        class="hidden aspect-square hover:cursor-pointer md:inline" </a>

                </div>
                <button type="button" class="flex flex-row hover:bg-black bg-gray text-white text-base h-fit w-fit px-7 py-2">
                    Checkout
                </button>
            </div>
        </div>

        <nav id="nav" class="flex flex-row justify-center space-x-4 mt-4 gap-5 inset-8tems-center justify-center self-center">
            <button class="hover:border-b-black border-b-2 border-b-transparent" type="submit" id="0">All</button>
            <button class="hover:border-b-black border-b-2 border-b-transparent" type="submit" id="1">Lights</button>
            <button class="hover:border-b-black border-b-2 border-b-transparent" type="submit" id="2">Sofas</button>
            <button class="hover:border-b-black border-b-2 border-b-transparent" type="submit" id="3">Tables</button>
        </nav>

    </header>