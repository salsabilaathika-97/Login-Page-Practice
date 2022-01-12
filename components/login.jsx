export default function Login() {
    return (
        <div class="min-h-screen bg-no-repeat bg-cover bg-center">
        <div class = "flex justify-start">
            <div class = "bg-white min-h-screen w-1/2 flex justify-center items-center">
                <form>
                    <div>
                        <span class = "text-sm text-gray-900">Selamat Datang</span>
                        <h1 class = "text-2xl font-bold">Login ke akun Anda</h1>
                    </div>
                    <div class = "mt-5">
                        <label class = "block text-md mb-2" type="email" name="email" placeholder="email">Email</label>
                        <input class = "px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email"/>
                    </div>
                    <div class = "my-3">
                        <label class = "block text-md mb-2" htmlFor="password">Password</label>
                        <input class = "px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password"/>
                    </div>
                    <div class="flex justify-between">
								<div>
									<input class="cursor-pointer"  type="radio" name="ingatsaya"/>
									<span class="text-sm ml-2">Ingat saya</span>
								</div>
								<span class="text-sm text-blue-700 hover:underline cursor-pointer">Lupa password?</span>
							</div>
                    <div class = "">
                        <button class = "mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition-duration-100">Login Sekarang</button>                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
