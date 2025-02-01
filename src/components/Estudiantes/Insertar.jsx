import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar({ grupos }) {
    return (
        <form action={insertarEstudiante}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" type='date' />
            <input name="foto" placeholder="Foto" />
            <input name="tutor_legal" placeholder="Tutor legal" />

            <select name="grupoId">
                {
                    grupos.map(grupo =>
                        <option key={grupo.id} value={grupo.id}>
                            {grupo.nombre}
                        </option>
                    )
                }
            </select>



            <button className="border-2 border-black" >Insertar estudiante</button>
        </form>
    );
}

export default EstudianteInsertar;