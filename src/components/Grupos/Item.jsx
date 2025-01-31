import { obtenerGrupo } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Grupo({ id }) {
    const grupo = await obtenerGrupo(id)
    //console.log(grupo);

    if (!grupo) notFound()

    return (
        <div>
            <p> {grupo.nombre} </p>
            <p> {grupo.tutor} </p>
            <p> {grupo.aula} </p>
        </div>
    );
}


