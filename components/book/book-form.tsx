'use client';

import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Image, Transformer } from 'react-konva';
import { ChromePicker } from 'react-color';

const BookCoverDesigner = () => {
  const stageRef = useRef(null);
  const transformerRef = useRef(null);
  const [color, setColor] = useState('#6C63FF'); // Default color
  const [title, setTitle] = useState('Your Book Title');
  const [author, setAuthor] = useState('Author Name');
  const [textPositions, setTextPositions] = useState({
    title: { x: 20, y: 200 },
    author: { x: 20, y: 300 },
  });
  const [uploadedImage, setUploadedImage] = useState(null); // Image file
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image for resizing

  // Export the design as PNG
  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'book-cover.png';
    link.href = uri;
    link.click();
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => setUploadedImage(img);
    };
    reader.readAsDataURL(file);
  };

  // Attach Transformer to the selected image
  const handleSelectImage = (imageNode) => {
    setSelectedImage(imageNode);
    if (transformerRef.current) {
      transformerRef.current.nodes([imageNode]);
      transformerRef.current.getLayer().batchDraw();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Canvas Area */}
      <div className="border shadow-lg">
        <Stage width={300} height={450} ref={stageRef}>
          <Layer>
            {/* Background Rectangle */}
            <Rect
              width={300}
              height={450}
              fill={color}
              cornerRadius={10}
              shadowBlur={10}
            />

            {/* Uploaded Image */}
            {uploadedImage && (
              <Image
                image={uploadedImage}
                x={50}
                y={50}
                width={200}
                height={150}
                draggable // Allow dragging the image
                onClick={(e) => handleSelectImage(e.target)}
                onTap={(e) => handleSelectImage(e.target)}
              />
            )}

            {/* Transformer */}
            {selectedImage && (
              <Transformer
                ref={transformerRef}
                rotateEnabled={false} // Disable rotation
                keepRatio={true} // Maintain aspect ratio
              />
            )}

            {/* Draggable Title */}
            <Text
              text={title}
              fontSize={24}
              fill="white"
              fontStyle="bold"
              draggable // Allow dragging
              x={textPositions.title.x}
              y={textPositions.title.y}
              onDragEnd={(e) =>
                setTextPositions((prev) => ({
                  ...prev,
                  title: { x: e.target.x(), y: e.target.y() },
                }))
              }
            />

            {/* Draggable Author */}
            <Text
              text={author}
              fontSize={18}
              fill="white"
              fontStyle="italic"
              draggable // Allow dragging
              x={textPositions.author.x}
              y={textPositions.author.y}
              onDragEnd={(e) =>
                setTextPositions((prev) => ({
                  ...prev,
                  author: { x: e.target.x(), y: e.target.y() },
                }))
              }
            />
          </Layer>
        </Stage>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-start gap-4">
        {/* Color Picker */}
        <div>
          <label className="block text-sm font-medium">Background Color:</label>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>

        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        {/* Author Input */}
        <div>
          <label className="block text-sm font-medium">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded p-2"
          />
        </div>

        {/* Export Button */}
        <button
          onClick={handleExport}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Export as PNG
        </button>
      </div>
    </div>
  );
};

export default BookCoverDesigner;
