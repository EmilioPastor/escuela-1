import Asignaturas from "@/components/Asignaturas/Lista";
import { Suspense } from "react";


function PaginaAsignaturas() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE ASIGNATURAS</h1>

            <Suspense fallback={"Obteniendo asignatura ..."}>
                <Asignaturas />
            </Suspense>
        </div>
    )

}

export default PaginaAsignaturas;

