/**
 * Archivo que contiene la lista de acciones para
 * usar dentro del Reducer
 */

export const GET_PARTICIPANTES = "GET_PARTICIPANTES";
export const GET_PARTICIPANTE = "GET_PARTICIPANTE";
export const ADD_PARTICIPANTE = "ADD_PARTICIPANTE";
export const MODIFY_PARTICIPANTE = "MODIFY_PARTICIPANTE";
export const DELETE_PARTICIPANTE = "DELETE_PARTICIPANTE";

/**
 * 
 * 
    const participantesCollection = collection(db, "participantes")

    const getParticipantes = async () => {
        const data = await getDocs(participantesCollection)
        data.docs.map( (doc) => {
            console.log(doc.data());
            console.log(doc.id);
        } )
    }

    const getParticipantePorId = async (id) => {
        const participanteDoc = await getDoc(doc(db, "participantes", id))

        if (participanteDoc.exists()){
            console.log(participanteDoc.data());
        }
        else{
            console.log("No existe este participante");
        }
    }

    const updateParticipante = async (id) => {
        const participanteDoc = doc(db, "participantes", id)
        const data = {
            nombre: "Lalo",
            apellido: "Solis",
            avatar: "Hombre",
            email: "solis@correo.com",
            link: "https://twitter.com/EduardoRubnSol1",
            ocupacion: "Estudiante"
        }
        await updateDoc(participanteDoc, data)
        getParticipantes()
    }

    const deleteParticipante = async (id) => {
        const participanteDoc = doc(db, "participantes", id)
        await deleteDoc(participanteDoc)
        getParticipantes()
    }

    const addParticipante = async () => {
        await addDoc(participantesCollection, {
            nombre: "Eduardo",
            apellido: "Solis",
            avatar: "Hombre",
            email: "solis@correo.com",
            link: "https://twitter.com/EduardoRubnSol1",
            ocupacion: "Estudiante"
        })
        getParticipantes()
    }

 */