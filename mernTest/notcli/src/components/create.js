import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "apollo-server";
import { QUERY_MENUITEMS } from '../utils/queries';
import { ADD_MENUITEM } from '../utils/mutations';
 
export default function Create() {
 const [form, setForm] = useState({
   itemName: "",
   itemDescr: "",
   itemPrice: "",
 });
 const navigate = useNavigate();
 const [addmenuItem, { error }] = useMutation(ADD_MENUITEM, {
    update(cache, { data: { addmenuItem } }) {
      try {
        const { menuItems } = cache.readQuery({ query: QUERY_MENUITEMS });

        cache.writeQuery({
          query: QUERY_MENUITEMS,
          data: { menuItems: [addmenuItem, ...menuItems] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addmenuItem({
        variables: { ...form },
      });

      setForm({
        itemName: '',
        itemDescr: '',
        itemPrice: '',
      });
    } catch (err) {
      console.error(err);
    }
  };
 
 // This function will handle the submission.
//  async function onSubmit(e) {
//    e.preventDefault();
    
   // When a post request is sent to the create url, we'll add a new record to the database.
//    const newPerson = { ...form };
//     console.log(newPerson);
//     var attempt = JSON.stringify(newPerson);
//     console.log(attempt);
//    await fetch("http://localhost:3000/record/add", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });
 
//    setForm({ name: "", position: "", level: "" });
//    navigate("/");
//  }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={handleFormSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.itemName}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.itemDescr}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.itemPrice}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       {/* <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div> */}
       <div className="form-group">
         <input
           type="submit"
           value="Create item"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}