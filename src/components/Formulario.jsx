

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5" >
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>

      <p className="text-lg  mt-5  mb-10 text-center ">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>

      </p>


      <form className="bg-white shadow-md rounded-xl py-10 px-5" >

        <div className="mb-5">
          {/* htmlFor es para cuando den click en el label se habilite el input  */}
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 block w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />


        </div>


        <div className="mb-5">
          {/* htmlFor es para cuando den click en el label se habilite el input  */}
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">Nombre propietario</label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 block w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />

        </div>

        <div className="mb-5">
          {/* htmlFor es para cuando den click en el label se habilite el input  */}
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Email </label>

          <input
            id="email"
            type="email"
            placeholder="Nombre del Email"
            className="border-2 block w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />


        </div>

        <div className="mb-5">
          {/* htmlFor es para cuando den click en el label se habilite el input  */}
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">Alta</label>

          <input
            id="alta"
            type="date"

            className="border-2 block w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />

        </div>

        <div className="mb-5">
          {/* htmlFor es para cuando den click en el label se habilite el input  */}
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">Sintomas</label>

          <textarea
            id="sintomas"
            placeholder="Describe los Sintomas"
            className="border-2 block w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />

        </div>

        <input
          className="bg-blue-600 w-full p-3 text-white uppercase font-blod hover:bg-blue-700  cursor-pointer trasition-cursor "
          type="submit"
          value="Agregar Paciente" />




      </form>

    </div>
  )
}

export default Formulario