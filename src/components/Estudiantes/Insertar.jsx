import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar() {
    return (
        <form action={insertarEstudiante}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_nacimiento" type='date' />
            <input name="foto" placeholder="Foto" />
            <input name="tutor_legal" placeholder="Tutor legal" />

            <input type="number" name="grupoId" />

            <button className="border-2 border-black" >Insertar estudiante</button>
        </form>
    );
}

export default EstudianteInsertar;