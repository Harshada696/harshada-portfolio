import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full p-2 border rounded" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {submitted && <p className="text-green-600 mt-2">Message sent!</p>}
    </form>
  );
}