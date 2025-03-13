import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 bg-white text-center border-t border-[#e9e4dd] relative">
      {/* Elegant floral element */}
      

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-light text-[#55104d] mb-4">Lauri & Saúl</h2>
        <p className="text-[#86895d] mb-6 ">¡Esperamos contar con tu presencia!</p>
        <p className="text-[#86895d] text-sm">23 de Agosto, 2025</p>

        <div className="mt-4 mb-4 text-[#86895d] text-sm font-bold">
          <p>Hay momentos en la vida que son </p>
          <p>muy especiales por sí solos,</p>
          <p>pero al compartirlos con personas como tú</p>
          <p>se convierten en momentos imposibles de olvidar</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-64 h-64 opacity-40 pointer-events-none">
        <Image
          src="/elegant-floral-4.png"
          alt="Elegant floral element"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>
    </footer>
  )
}

