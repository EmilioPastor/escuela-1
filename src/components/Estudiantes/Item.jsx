import { obtenerEstudiante } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id)
    //console.log(estudiante);

    if (!estudiante) notFound()

    return (
        <div>
            <p><img src={estudiante.foto} /></p>
            <p> {estudiante.nombre} </p>
            <p> {estudiante.fecha_nacimiento.toLocaleDateString()} </p>
            <p> {estudiante.tutor_legal} </p>
            <p> {estudiante.grupo?.nombre} </p>
        </div>
    );
}
