import { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server or API
    console.log({ image, name, description });
  };

  return (
    <div className="upload-container">
      <h1>Upload Your Sofa</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label>
          Sofa Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {image && <img src={image} alt="Preview" className="image-preview" />}
        <label>
          Sofa Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter sofa name"
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter sofa description"
          />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
