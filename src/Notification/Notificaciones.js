import { useState, createContext } from 'react';
import './Notificaciones.css';

export const NotificacionContext = createContext();

export const NotificacionProvider = ({children})=>{

    const [mensaje, setMensaje] = useState('');
    const [estado, setEstado] = useState('true');

    const setNotificacion = (msj, estado)=>{
        setMensaje(msj);
        setEstado(estado);
        setTimeout(()=>{
            setMensaje('');
        },1200);
    }

    return(
        <NotificacionContext.Provider value={{setNotificacion}}>
            <Notificacion msj={mensaje} estado = {estado}/>
            {children}
        </NotificacionContext.Provider>
    );
};

const Notificacion = ({msj, estado})=>{

    if(msj === '') return;

    return(
      <div className={estado === 'true' ? 'exito' : 'error'}>{msj}</div>
    );
};

export default Notificacion;