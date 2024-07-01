
export const Register = () => {
  return (
    <main>
      <section>
        <h1 className="text-center m-10 text-2xl text-black underline underline-offset-8 font-semibold dark:text-white" >Register</h1>
        <form class="mx-auto">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your name</label>
            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abhishek Sadhwani" required />
          </div>
          <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>    
        </form>
      </section>
    </main>
  )
}
