export default function Login() {
    return (
        <div className="min-h-screen bg-no-repeat bg-cover bg-center"
	style={"background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"}>
        <div className = "flex justify-end">
            <div className = "bg-white min-h-screen w-1/2 flex justify-center items-center">
                <form>
                    <div>
                        <span className = "text-sm text-gray-900">Selamat Datang</span>
                        <h1 className = "text-2xl font-bold">Login ke akun Anda</h1>
                    </div>
                    <div className = "mt-5">
                        <label className = "px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">Password</label>
                        <input className = "px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password"/>
                    </div>
                    <div className = "my-3">
                        <label className = "block text-md mb-2" for="email">Email</label>
                        <input className = "px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email"/>
                    </div>
                    <div className = "flex justify-between">
                        <div>
                            <input className = "cursor-pointer" type="radio" name="rememberme"/>
                            <span className = "text=sm text-blue-700 hover:underline cursor-pointer">Lupa Password?</span>
                        </div>
                    </div>
                    <div className = "">
                        <button className = "mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition-duration-100">Login Sekarang</button>                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
