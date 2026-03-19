/**
 * Archivo: Servicios.tsx
 * Sirve para: reservar la sección donde listarás servicios ofrecidos.
 * Consejo: define primero el tipo de dato de un servicio (titulo, descripcion, icono) antes del diseño.
 */

import SectionTitle from "../components/main/SectionTittle";
import { Servicios as ServiciosList } from "../components/main/servicios/ServiciosCard";
import DatasServicios from "../components/main/servicios/DatasServicios";



export default function Servicios() {
  return (
    <section id="servicios" className="py-32 scroll-mt-16">
      <SectionTitle title="Servicios" />
      <h1 id="servicios" className="text-3xl font-bold mb-6">
        Servicios Ofrecidos
      </h1>
	  <ServiciosList servicios={DatasServicios} />

    </section>
  );
}
