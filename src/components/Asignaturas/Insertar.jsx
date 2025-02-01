import { insertarAsignatura } from "@/lib/actions";

function AsignaturaInsertar({ estudiantes }) {
    return (
        <form action={insertarAsignatura}>
            <input name="nombre" placeholder="Nombre" />
            <input name="profesor" placeholder="Profesor/a" />
            <input name="num_horas" placeholder="Num_horas" />

            {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id}>
                        <input
                            type="checkbox"
                            value={estudiante.nombre} />

                        {estudiante.nombre}

                    </label>
                )
            }

            <button className="border-2 border-black">Insertar asignatura</button>
        </form>
    );
}

export default AsignaturaInsertar;