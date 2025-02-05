'use client'
import { insertarAsignatura } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function AsignaturaInsertar({ estudiantes }) {

    const formId = useId();

    const [state, action, pending] = useActionState(insertarAsignatura, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
        } document.getElementById(formId)?.closest('dialog')?.close();
    }, [state.success]);

    return (
        <form action={action} id={formId}>
            <input name="nombre" placeholder="Nombre" />
            <input name="profesor" placeholder="Profesor/a" />
            <input name="num_horas" placeholder="Num_horas" />

            {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id}>
                        <input
                            type="checkbox"
                            name={`estudiante${estudiante.id}`}
                            value={estudiante.nombre} />

                        {estudiante.nombre}

                    </label>
                )
            }

            <button
             disabled={pending}
             className="border-2 border-black disabled:bg-slate-400 disabled:text-slate-600 disabled:cursor-not-allowed"
            >
             {pending ? "Insertando..." : "Insertar asignatura"}  
            </button>
        </form>
    );
}

export default AsignaturaInsertar;