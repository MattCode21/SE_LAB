import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Login = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    new URLSearchParams(location.search).get("tab") === "register" ? "register" : "login"
  );
  
  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.title = "Login | Alumni Affairs Network-NITC";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
    // Implement Google sign-in integration here
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { loginEmail, loginPassword });
    // Implement login logic here
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with:", { 
      firstName, 
      lastName, 
      email: registerEmail, 
      password: registerPassword 
    });
    // Implement registration logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] animate-fade-in">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-[#f1f1f3] rounded-2xl shadow-sm p-6 md:p-10">
            {/* Tab headers */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab("login")}
                  className={cn(
                    "px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative animated-tab",
                    activeTab === "login" 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-gray-500 hover:text-gray-700"
                  )}
                  data-state={activeTab === "login" ? "active" : "inactive"}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={cn(
                    "px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative animated-tab",
                    activeTab === "register" 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-gray-500 hover:text-gray-700"
                  )}
                  data-state={activeTab === "register" ? "active" : "inactive"}
                >
                  Register
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section - Image or Info */}
              <div className="hidden md:flex flex-col justify-center items-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full bg-primary/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {activeTab === "login" ? "Welcome Back" : "Join Our Network"}
                </h3>
                <p className="text-gray-600 text-center max-w-xs">
                  {activeTab === "login" 
                    ? "Connect with your fellow alumni and stay updated with the latest events and opportunities." 
                    : "Create an account to connect with alumni, participate in events, and access exclusive resources."}
                </p>
              </div>

              {/* Right Section - Form */}
              <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 animate-slide-in">
                {activeTab === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="alumni@example.com" 
                        className="animated-input"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                        <Button variant="link" size="sm" asChild className="px-0 h-auto">
                          <Link to="/forgot-password" className="text-xs text-primary hover:text-primary/80">
                            Forgot password?
                          </Link>
                        </Button>
                      </div>
                      <Input 
                        id="password" 
                        type="password"
                        className="animated-input"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full button-hover-effect bg-primary hover:bg-primary/90"
                    >
                      Sign In
                    </Button>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button"
                      variant="outline" 
                      className="w-full bg-white hover:bg-gray-50 transition-colors"
                      onClick={handleGoogleSignIn}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
                        <path
                          d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.2154 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                          fill="#34A853"
                        />
                      </svg>
                      Sign in with Google
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          className="animated-input"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          className="animated-input"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="registerEmail" 
                        type="email" 
                        placeholder="alumni@example.com"
                        className="animated-input"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword" className="text-sm font-medium">Password</Label>
                      <Input 
                        id="registerPassword" 
                        type="password"
                        className="animated-input"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                      <Input 
                        id="confirmPassword" 
                        type="password"
                        className="animated-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full button-hover-effect bg-primary hover:bg-primary/90"
                    >
                      Create Account
                    </Button>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button"
                      variant="outline" 
                      className="w-full bg-white hover:bg-gray-50 transition-colors"
                      onClick={handleGoogleSignIn}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
                        <path
                          d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.2154 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                          fill="#34A853"
                        />
                      </svg>
                      Sign up with Google
                    </Button>

                    <p className="text-xs text-gray-500 mt-4">
                      By signing up, you agree to our{" "}
                      <Link to="/terms" className="text-primary hover:text-primary/80 underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary/80 underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
