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
 * Statelerde atama işlemi yaparken tanımlanan state in ilk baştaki veri tipine uygun atama yapılmalı.
 * Mesela aşağıdaki gibi friends arrayine yeni bir eleman eklerken ...friends vererek daha sonra eklenen eleman
 * yazılmalıdır.Atama yapılırken arrayName... kısmı array içindeki önceki değerlerin korunmasını sağlar.
 *
 */

function App() {
  //const [StateName, StateChangedFunctionName] = useState('defaultValue');
  const [name, setName] = useState("Elif");
  const [age, setAge] = useState("24");
  //Array states
  const [friends, setFriens] = useState(["Merve", "Ayse"]);

  console.log(age, name);

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h1> {age}</h1>

      <button onClick={() => setName("Merve")}>Change Name</button>
      <button onClick={() => setAge("25")}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriens([...friends, "Elf"])}>
        Add New Friend
      </button>
    </div>
  );
}

export default App;
