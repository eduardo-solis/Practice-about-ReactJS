import { useReducer } from 'react'

import { GET_PARTICIPANTES, GET_PARTICIPANTE, CLEAN_PARTICIPANTE, ADD_PARTICIPANTE, MODIFY_PARTICIPANTE, DELETE_PARTICIPANTE } from "./types";

import {ParticipanteReducer} from './ParticipanteReducer'
import { ParticipanteContext } from './ParticipanteContext'

import { collection, getDocs, doc, deleteDoc, addDoc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const ParticipanteProvider = ( { children } ) => {

    const initialState = {
        participantes: [],
        participanteObtenido: null,
        cargando: true
    };

    const [state, dispatch] = useReducer(ParticipanteReducer, initialState);

    const participantesCollection = collection(db, "participantes");

    const obtenerParticipantes = async () => {
        
        let auxData = [];

        const data = await getDocs(participantesCollection);

        data.docs.map( ( doc ) => {
            auxData.push( { ...doc.data(), id: doc.id } );
            
        } );

        dispatch({
            type: GET_PARTICIPANTES,
            payload: auxData
        });

    };

    const obtenerParticipantePorId = async ( id ) => {

        const participanteDoc = await getDoc( doc(db, "participantes", id) );
        
        if ( participanteDoc.exists() ){

            dispatch({
                type: GET_PARTICIPANTE,
                payload: { ...participanteDoc.data(), id: participanteDoc.id }
            });
        }
        else{
            console.log("Participante no encontrado");
        }
    };

    const limpiarParticipante = () => {
        dispatch({
            type: CLEAN_PARTICIPANTE,
            payload: null
        })
    }

    const registrarParticipante = async ( Nombre, Apellido, Avatar, Email, Link, Ocupacion ) => {

        await addDoc(participantesCollection, {
            nombre: Nombre,
            apellido: Apellido,
            avatar: Avatar,
            email: Email,
            link: Link,
            ocupacion: Ocupacion
        });

        obtenerParticipantes();

    }

    const modificarParticipante = async ( Id, Nombre, Apellido, Avatar, Email, Link, Ocupacion ) => {

        const participanteDoc = doc(db, "participantes", Id);

        const data = {
            nombre: Nombre,
            apellido: Apellido,
            avatar: Avatar,
            email: Email,
            link: Link,
            ocupacion: Ocupacion
        };

        await updateDoc(participanteDoc, data);
        obtenerParticipantes();

    }

    return (
        <ParticipanteContext.Provider
        value={{
            state,
            obtenerParticipantes,
            obtenerParticipantePorId,
            registrarParticipante,
            modificarParticipante,
            limpiarParticipante
        }}
        >
            {children}
        </ParticipanteContext.Provider>
    )
}

export default ParticipanteProvider