import { useState } from "react";

function InputExample() {
const [form, setForm] = useState({name:'', surname:''});
const [friends, setFriends] = useState(["Ahmet", "Ali", "Fatma"]);
const formAll = form.name + " " + form.surname;

const onChangeInput= (e) => {
    console.log(e.target.name);
    setForm({...form, [e.target.name]: e.target.value})
}
return (
<div>
Please enter a name <br />
<input name="name" value={form.name} onChange={onChangeInput} />
<br />
Please enter a surname <br />
<input name="surname" value={form.surname} onChange={onChangeInput} />
<br />
<br />
{form.name} {form.surname}
<hr />
<h2>Friends</h2>
{friends.map((friend,index) =>(
    <div key={index}>{friend}</div>
)
)}
<br />
<button onClick={()=> setFriends([...friends, formAll])}>
    Add Friends
</button>
</div>


);
}
export default InputExample;