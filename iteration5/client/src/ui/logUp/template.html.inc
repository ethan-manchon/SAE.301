    <!-- TEMPLATE REGISTER -->
<section class="flex flex-col items-center gap-8">

        <div class="flex bg-white justify-between items-center w-full h-14 py-2">
            <div class="flex justify-center items-center w-6 h-6 ml-8">
                <img class="w-full h-full object-contain" src="../assets/arrow-left.svg" alt="Arrow Left">
            </div>
            <p class="text-sm font-normal">Registration</p>
            <div class="w-16 h-16"></div>
        </div>

            <form id="register" class="flex flex-col justify-start items-center w-30rem p-4">
                <div class="flex flex-col gap-8 w-full">
                    <p class="max-w-full">Looks like you don’t have an account with this email address. Let's take some details
                        from you.</p>

                    <!-- First Name -->
                    <div class="flex flex-col gap-0 items-start">

                        <div class="flex w-full h-fit gap-0 border-gray border-2">
                            <input name="firstname" class="w-full h-10 p-2" type="text" placeholder="First Name" autocomplete="on">
                        </div>
                        <p class="text-gray text-xs">First Name</p>
                    </div>


                    <!-- Last Name -->
                    <div class="flex flex-col gap-0 items-start">

                        <div class="flex w-full h-fit gap-0 border-gray border-2">
                            <input name="name" class="w-full h-10 p-2" type="text" placeholder="Last Name" autocomplete="on">
                        </div>
                        <p class="text-gray text-xs">Last Name</p>
                    </div>

                    <!-- Phone Number -->
                    <div class="flex flex-col gap-0 items-start">

                        <div class="flex w-full h-fit gap-0 border-gray border-2">
                            <input name="phone" min="0000000000" max="0999999999" class="w-full h-10 p-2" type="tel" maxlength="14" placeholder="Phone Number" autocomplete="on">
                        </div>
                        <p class="text-gray text-xs">Phone Number</p>
                    </div>


                    <!-- Password -->
                    <div class="flex flex-col gap-0 items-start">

                        <div class="flex w-full h-fit gap-0 border-gray border-2">
                            <input name="password" class="w-full h-10 p-2" type="password" placeholder="Password" autocomplete="on">
                        </div>
                        <p class="text-xs font-medium text-red-500 max-w-full">Please enter a password containing both numbers
                            and letters that is 6-12 characters long, using English characters only.</p>

                    </div>

                    <!-- Register -->
                    <div class="flex flex-col justify-center items-center border-black rounded-lg border-2 p-2 gap-8">
                        <div class="flex flex-col gap-0 items-center">
                            <h3 class="font-semibold text-sm">Register now and save 10% on your order</h3>
                            <p class="border-b-black border-b-2 font-normal text-sm"><a href="#">Term and Conditions</a></p>
                        </div>
                        <button id="register" type="submit" class="bg-black text-white w-full h-fit p-2">Great, Register my Account</button>
                    </div>
            </form>
</section>