'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'



//  ------------------------ GRUPOS ------------------------


export async function insertarGrupo(formData) {
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    await prisma.grupo.create({
        data: {
            nombre: nombre,
            tutor: tutor,
            aula: aula,
        }
    })

    revalidatePath('/grupos')

}



export async function modificarGrupo(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')


    await prisma.grupo.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            tutor: tutor,
            aula: aula,
        }
    })

    revalidatePath('/grupos')
}



export async function eliminarGrupo(formData) {
    const id = Number(formData.get('id'))

    await prisma.grupo.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/grupos')

}


//  ------------------------ ESTUDIANTES ------------------------


export async function insertarEstudiante(formData) {
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor_legal = formData.get('tutor_legal')

    const grupoId = Number(formData.get('grupoId'))

    await prisma.estudiante.create({
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            foto: foto,
            tutor_legal: tutor_legal,
            grupoId: grupoId,
        }
    })

    revalidatePath('/estudiantes')

}



export async function modificarEstudiante(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fecha_nacimiento = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor_legal = formData.get('tutor_legal')

    const grupoId = Number(formData.get('grupoId'))

    await prisma.estudiante.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            foto: foto,
            tutor_legal: tutor_legal,
            grupoId: grupoId,
        }
    })

    revalidatePath('/estudiantes')
}



export async function eliminarEstudiante(formData) {
    const id = Number(formData.get('id'))

    await prisma.estudiante.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/estudiantes')

}

// ------------------------------- ASIGNATURAS -----------------------


export async function insertarAsignatura(prevState, formData) {
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = Number(formData.get('num_horas'))

    const estudiantesIDs = await prisma.estudiante.findMany({
        select: { id: true }
    });
    // console.log(estudiantesIDs);

    const connect = estudiantesIDs.filter(estudiante => formData.get(`estudiante${estudiante.id}`) !== null);

    // console.log(connect);

    await prisma.asignatura.create({
        data: {
            nombre: nombre,
            profesor: profesor,
            num_horas: num_horas,
            estudiantes: {
                connect: connect
            }
        }
    })

    revalidatePath('/asignaturas')
    return {success: 'Exito al registrar la asignatura'}

}



export async function modificarAsignatura(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = Number(formData.get('num_horas'))

    const estudiantesIDs = await prisma.estudiante.findMany({
        select: { id: true }
    });
    // console.log(estudiantesIDs);

    const connect = estudiantesIDs.filter(estudiante => formData.get(`estudiante${estudiante.id}`) !== null);
    const disconnect = estudiantesIDs.filter(estudiante => formData.get(`estudiante${estudiante.id}`) === null);

    // console.log(connect);

    await prisma.asignatura.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            profesor: profesor,
            num_horas: num_horas,
            estudiantes: {
                connect: connect,
                disconnect: disconnect
            }
        }
    })

    revalidatePath('/asignaturas')
}



export async function eliminarAsignatura(formData) {
    const id = Number(formData.get('id'))

    await prisma.asignatura.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/asignaturas')

}

