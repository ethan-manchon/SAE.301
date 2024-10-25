    <section class="container border-2 border-gray items-center flex flex-col gap-6 m-auto p-8 bg-gray-400 rounded-lg shadow-2xl">
        <img src="../assets/made-logo-desktop.svg" alt="logo">
        <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Gestion des Codes Promo</h1>
        
        <form id="addPromoForm" class="mb-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold mb-6 text-gray-800">Ajouter un Code Promo</h2>
            <div class="mb-6">
                <label for="addpromoCode" class="block text-gray-800 font-medium mb-3">Code Promo:</label>
                <input type="text" id="addpromoCode" name="promoCode" required class="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <label for="addpromodiscount" class="block text-gray-800 font-medium mb-3 mt-4">Discount:</label>
                <input type="number" min="1" max="99" id="addpromodiscount" name="promoDiscount" required class="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
            </div>
            <button id="addPromoButton" type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Ajouter</button>
        </form>
        
        <form id="deletePromoForm" method="DELETE" class="p-6 bg-white rounded-lg shadow-lg">
            <h2 id="title" class="text-3xl font-semibold mb-6 text-gray-800">Retirer un Code Promo</h2>
            <div class="mb-6">
                <label for="select" class="block text-gray-800 font-medium mb-3">Code Promo:</label>
                {{option}}
            </div>
            <div class="flex flex-col gap-4">
                <button type="submit" id="deletePromoButton" class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">Retirer</button>
            </div>
        </form>

    </section>