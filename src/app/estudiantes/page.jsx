import Estudiantes from "@/components/Estudiantes/Lista";
import { Suspense } from "react";


function PaginaEstudiantes() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE ESTUDIANTES</h1>

            <Suspense fallback={"Obteniendo estudiantes ..."}>
                <Estudiantes />
            </Suspense>
        </div>
    )

}

export default PaginaEstudiantes;

