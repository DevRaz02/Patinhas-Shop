function Banners() {
  return (
    <div className="relative max-w-7xl h-[300px] mx-auto mt-40 px-4">
      <img
        className="absolute mt-10 banner1 rounded-2xl shadow-[-6px_10px_30px_1px_rgba(0,0,0,0.72)]"
        src="image/banners/Promo30.png"
        alt="promoção 1"
      />
      <img
        className="absolute mt-10 banner2 rounded-2xl shadow-[-6px_10px_30px_1px_rgba(0,0,0,0.72)]"
        src="image/banners/Promo40.png"
        alt="promoção 2"
      />
    </div>
  );
}

export default Banners;
