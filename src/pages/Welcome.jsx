import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const userData = location.state.userData;

  // Ahora puedes usar los datos en userData como desees
  // Por ejemplo, puedes renderizarlos en la página
  return (
    <div>
      <h1>Bienvenido/a</h1>
      <p>Nombre: {userData.name}</p>
      <p>Correo electrónico: {userData.email}</p>
      {/* ...otros datos */}
    </div>
  );
}

export default Welcome;
