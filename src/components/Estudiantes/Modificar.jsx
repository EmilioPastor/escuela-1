import { modificarEstudiante } from "@/lib/actions";

function EstudianteModificar({ estudiante, grupos }) {
    return (
        <form action={modificarEstudiante}>
            <input type="hidden" name="id" defaultValue={estudiante.id} />
            <input name='nombre' defaultValue={estudiante.nombre} />
            <input name='fecha_nacimiento' type='date' defaultValue={estudiante.fecha_nacimiento.toISOString().split('T')[0]} />
            <input name='foto' defaultValue={estudiante.foto} />
            <input name='tutor_legal' defaultValue={estudiante.tutor_legal} />

            <select
                key={estudiante.grupoId}
                name="grupoId"
                defaultValue={estudiante.grupoId}>
                {
                    grupos.map(grupo =>
                        <option key={grupo.id} value={grupo.id}>
                            {grupo.nombre}
                        </option>
                    )
                }
            </select>


            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default EstudianteModificar;