export default function Footer() {
  return (
    <div className="w-full pt-16 pb-8 text-center text-white/70 space-y-3">

      <div className="text-lg font-semibold">
        Contact
      </div>

      <div>
        <a 
          href="mailto:rushabhdolas221@gmail.com"
          className="hover:text-white underline"
        >
          rushabhdolas221@gmail.com
        </a>
      </div>

      <div>
        <a 
          href="tel:9325048812"
          className="hover:text-white underline"
        >
          9325048812
        </a>
      </div>

      <div className="pt-4 text-white/40">
        © {new Date().getFullYear()} Rushabh
      </div>

    </div>
  );
}