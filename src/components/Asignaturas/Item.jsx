import { obtenerAsignatura } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)
    // console.log(asignatura);

    if (!asignatura) notFound()

    return (
        <div>
            <p> Asignatura:  {asignatura.nombre} </p>
            <p> Profesor: {asignatura.profesor} </p>
            <p> Numero de Horas: {asignatura.num_horas} </p> Alumnos:  {
                asignatura.estudiantes.map(estudiante => 
                    <div key={estudiante.id}>
                        <p>{estudiante.nombre}</p>
                    </div>)
            }
            
        </div>
    );
}

