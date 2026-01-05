import chui from "../assets/regions/chui.jpg";
import batken from "../assets/regions/batken.jpg";
import jalalabad from "../assets/regions/jalalAbad.jpg";
import naryn from "../assets/regions/naryn.jpg";
import yssykKol from "../assets/regions/issykKol.jpg";
import talas from "../assets/regions/talas.jpg";
import bishkek from "../assets/regions/bishkek.jpg";
import osh from "../assets/regions/osh.jpg";

const images = [
  { id: 1, src: chui, span: "col-span-2 row-span-2"},
  { id: 2, src: batken, span: "col-span-1 row-span-1"},
  { id: 3, src: jalalabad, span: "col-span-1 row-span-1"},
  { id: 4, src: naryn, span: "col-span-2 row-span-2"},
  { id: 5, src: yssykKol, span:"col-span-2 row-span-1"},
  { id: 6, src: talas, span: "col-span-1 row-span-1"},
  { id: 7, src: bishkek, span: "col-span-2 row-span-1"},
  { id: 8, src: osh, span: "col-span-2 row-span-2"},
];
export default function Regions() {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <h2 className="text-xl mb-4">REGIONS IN KYRGYZSTAN</h2>
      <h4>You can visit the site any day and be sure that you will find everything for a great vacation.</h4>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img) => (
          <div
            key={img.id}
            className= {`relative overflow-hidden rounded-lg ${img.span}`}
          >
            <img src={img.src} className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

//chui- width 505 H 621
//batken 4 347 h 302
//jalalabad w 347 h 302
//naryn w 505 h 621
//yssykKil w715 h 299
//talas w 347 h 302
//bishkek w 715 h 299
//osh w 505 h 621
