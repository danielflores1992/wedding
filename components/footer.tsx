import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 bg-white text-center border-t border-[#e9e4dd] relative">
      {/* Elegant floral element */}
      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-50 pointer-events-none">
        <Image
          src="/elegant-floral-4.png"
          alt="Elegant floral element"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-light text-[#8a7f71] mb-4">Lauri & Saúl</h2>
        <p className="text-[#a39a8e] mb-6">¡Esperamos contar con tu presencia!</p>
        <p className="text-[#a39a8e] text-sm">23 de Agosto, 2025</p>

        <div className="mt-8 text-[#a39a8e] text-sm">
          <p>Hay momentos en la vida que son muy especiales por sí solos,</p>
          <p>pero al compartirlos con personas tan especiales como tú</p>
          <p>se convierten en momentos imposibles de olvidar</p>
        </div>
      </div>
    </footer>
  )
}

