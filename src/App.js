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
 * Statelerde obje atama işlemi yaparken ...address.title kısmını kullandık. Bu şekilde kullandığımız zaman title
 * kısmını defaulttaki değerden alır. Diğer alanlar için default almak istersek bu şekilde alabiliriz.
 * ...objectName.fieldName. Bütün alanları güncelleyeceksek bu kısma ihtiyacımız olamayacaktır.
 *
 */

function App() {
  //const [StateName, StateChangedFunctionName] = useState('defaultValue');
  const [name, setName] = useState("Elif");
  const [age, setAge] = useState("24");
  //Array state
  const [friends, setFriens] = useState(["Merve", "Ayse"]);
  //Object state
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

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

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br></br>
      <button
        onClick={() => setAddress({ ...address, title: "İzmir", zip: 35743 })}
      >
        Add New Address
      </button>
    </div>
  );
}

export default App;
