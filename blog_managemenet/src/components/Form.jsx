import React, { useState } from 'react';
import Button from './Button';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', content: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gradient-to-r from-indigo-100 to-blue-200 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex justify-center">
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
