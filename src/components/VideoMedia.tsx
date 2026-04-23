import Image from "next/image";

export function VideoMedia() {
  return (
    <section className="bg-white py-10 md:py-20 lg:py-20">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[1440/463]">
          <Image
            src="/images/asset-33385-209240df8e.png"
            alt="Unternehmen digital gründen — Qonto"
            fill
            sizes="(min-width: 1024px) 1344px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
