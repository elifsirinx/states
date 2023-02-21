import { useState } from "react";

/**
 * ---STATES
 * Component ler üzerinde değerinin değişme potansiyali olan bütün verileri tutan bir js objesidir.
 * Componentin herhangi bir anında değeri değişme potansiyali olan bir veri "state" olarak tanımlanır.
 * Bu state değitiği andaysa ilgili component render edilerek değişim ekrana yansıtılmış olur.
 * React altında useState adında bir hook var. Bunu import etmeliyiz.
 *
 * Aşağıdaki örnekte bir butona basıldığında setName fonksiyonu çalışarak "name" değeri değişti.
 *
 * Herhangi bir state güncellendiği anda return kısmındaki render işlemi baştan yapılır.
 * Arayüzde görünen görüntü yeniden oluşturulur.
 * Bu yüzden aşağıdaki console kısmında yazdırdığımız name ve age kısımları butonlara basıldığı zaman
 * yeniden render edildikten sonra gösterilir.
 *
 */

function App() {
  //const [StateName, StateChangedFunctionName] = useState('defaultValue');
  const [name, setName] = useState("Elif");
  const [age, setAge] = useState("24");

  console.log(age, name);

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h1> {age}</h1>

      <button onClick={() => setName("Merve")}>Change Name</button>
      <button onClick={() => setAge("25")}>Change Age</button>
    </div>
  );
}

export default App;
