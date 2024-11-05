import React from 'react';

const ContactList = () => {
    const contactos = [
        { nombre: "Ingeniero Mora", mensaje: "Que tal mi pelon", hora: "4h", activo: true },
        { nombre: "MaooaMba", mensaje: "Simon yo le digo que sí", hora: "7h", activo: false },
    ];

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Mensajes</h2>
            {contactos.map((contacto, index) => (
                <div key={index} className="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                        <h3 className="font-medium">{contacto.nombre}</h3>
                        <p className="text-gray-500 text-sm">{contacto.mensaje}</p>
                    </div>
                    <div className="text-gray-400 text-sm">{contacto.hora}</div>
                    {contacto.activo && <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>}
                </div>
            ))}
        </div>
    );
};

export default ContactList;
