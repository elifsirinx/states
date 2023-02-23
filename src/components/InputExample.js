import { useState } from "react";

/**
 * onChange : input value kısmındaki değerin değişebilir olmasını sağlar.
 *
 */

function InputExample() {
  //DÜZENLENMEMİŞ KOD
  /*
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  
  const onChangeName = (event) => setName(event.target.value);
  const onChangeSurName = (event) => setSurname(event.target.value);

  return (
    <div>
      Please enter a name : <br />
      <input value={name} onChange={onChangeName} />
      <br />
      Please enter a surname : <br />
      <input value={surname} onChange={onChangeSurName} />
      <br />
      <br />
      {name} {surname}
    </div>
  );
  */

  //DÜZENLENMİŞ KOD
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Please enter a name : <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      Please enter a surname : <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}
export default InputExample;
