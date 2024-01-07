import { Outlet, Navigate } from "react-router"


const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
        {isAuthenticated ? (
            <Navigate to="/" />
        ):(
                <section        
                    className="flex justify-evenly">
                    <div className="flex flex-col justify-evenly">
                      <h1 className="text-4xl font-bold">GeminiChat</h1>
                      <div className="">
                        <Outlet />
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/assets/images/logo.svg" 
                        alt="logo"
                        className=" h-screen rounded-xl"
                      />
                    </div>
                </section>
        )}
    </>
  )
}

export default AuthLayout