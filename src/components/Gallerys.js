import React, { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [userImages, setUserImages] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const description = prompt("Add a description for this image:");

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { src: reader.result, description };
        setUserImages((prevImages) => [...prevImages, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = (imageUrl, imageName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${imageName}.jpeg`;
    link.click();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      setUserImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }
  };

  const handleImageClick = (image, index, isUploaded) => {
    const action = window.confirm("Click OK to Download, Cancel to do nothing.");
    if (action) {
      handleDownload(image.src, isUploaded ? `UserImage_${index + 1}` : `Taehyung_${index + 1}`);
    }
    // Cancel will not delete or download; action ends here.
  };

  return (
    <div className="page-container">
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Gallery</h2>

      {/* Upload Section */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{ marginBottom: "1rem" }}
        />
        <p>Upload an image of Kim Taehyung with a description to add it to the gallery!</p>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        {/* Predefined Images */}
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Taehyung ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick({ src: image }, index, false)}
              title="Click to choose an action"
            />
          </div>
        ))}

        {/* User-Uploaded Images */}
        {userImages.map((image, index) => (
          <div key={`user-${index}`} className="gallery-item">
            <img
              src={image.src}
              alt={`User Uploaded ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(image, index, true)}
              title="Click to choose an action"
            />
            <p className="image-description">{image.description || "No description provided"}</p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
