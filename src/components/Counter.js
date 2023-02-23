import { useState } from "react";

/**
 *Developer Tool kısmını açtığımızda 3 nokta kısmındaki >> More Tools >> Rendering >> Paint Flashin
 Paint Flashing : Ekranda render edilen alanları ışık yakarak gösteriyor.
 jQuery : Bütün DOM render edildiğinden sayfayı yenilediğimizde tüm sayfa yanıp söner. 
 Ekrandaki butona basıldığı zaman değişen kısım yanıp söner. Değer değişmese bile render ediliyor.
 Bu işlemden dolayı gereksiz render ediliyor.
 React : Render edilen componentler yanıp sönüyor. Ancak değer değişmediği zaman render edilmiyor.
 Gereksiz render edilmiyor. Zaten state in değeri 1 tekrardan butona tıkladığımızda sanal DOM'daki değeri
 de 1 olduğundan dolayı tekrardan render etmiyor. Yani zaten sanal DOM'daki değer Real DOM ile aynı olduğundan
 dolayı tekrardan gidip real DOM'a yazmaya çalışmıyor. 
 Bir REACT uygulaması geliştirirken dikkat edilmesi en önemli konu gereksiz renderlardan kaçınmak olmalıdır.
 JQuery ile React arasındaki en temel farklardan bir tanesi de yukarıda bahsettiğim render farklarıdır.*/
function Counter() {
  const [count, setCount] = useState(0);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => setCount(1)}>Increase</button>
    </div>
  );
}

export default Counter;
