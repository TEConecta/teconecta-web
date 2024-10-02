'use client'
import React, { useState } from 'react'

const Login = () => {
    const [Correo, setCorreo] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(Correo, Password);
    }

    return (
        <div className="flex items-center justify-center h-screen bg">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">TEConecta</h1>
                <img src="" alt="" className="mx-auto mb-4" />

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Correo institucional"
                            id="correo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            value={Correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login;
