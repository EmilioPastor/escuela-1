import { obtenerAsignatura } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)
    // console.log(asignatura);

    if (!asignatura) notFound()

    return (
        <div>
            <p> {asignatura.nombre} </p>
            <p> {asignatura.profesor} </p>
            <p> {asignatura.num_horas} </p>
        </div>
    );
}

