import Modal from "@/components/Modal";
import { obtenerGrupos } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";
import GrupoEliminar from "./Eliminar";
import Link from "next/link";


export default async function Grupos() {
    const grupos = await obtenerGrupos()
    //console.log(grupos);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar grupo</p>}>
                <GrupoInsertar />
            </Modal>


            {
                grupos.map(grupo =>
                    <div key={grupo.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/grupos/${grupo.id}`} className="text-2xl block">
                                {grupo.nombre}
                            </Link>
                            < p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <GrupoModificar grupo={grupo} />
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <GrupoEliminar grupo={grupo} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}