// src/components/FileUpload.tsx
import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone';
import AuthContext from "./AuthContext";

type AuthToken = {
    access: string;
    refresh: string;
  };

interface FileUploadProps {
  onUpload: (files: File[]) => void;
  uploadedFiles: File[];
  token: AuthToken | undefined | null; // Prop for authentication token
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, uploadedFiles, token }) => {
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      onUpload(acceptedFiles); // Callback to set state in parent
      uploadFiles(acceptedFiles); // New function to handle file upload to backend
    },
    accept: {
        'application/pdf': ['.pdf'],

    },
  });

  const uploadFiles = (files: File[]) => {
    files.forEach(file => {
      const formData = new FormData();
      formData.append('pdf_document', file);
      console.log(file);
      fetch('http://127.0.0.1:8000/upload_pdf/', { // Assuming your Django API endpoint
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token?.access}`, // Assuming JWT for authentication
        },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  };

  return (
    <div>
    <div {...getRootProps()} className="UploadArea">
      <input {...getInputProps()} />
      <p>Drag and drop some PDF files here, or click to select files</p>
    </div>
    <ul className="FileList">
        <h3>Uploaded Files List</h3>
      {uploadedFiles.map((file, index) => (
        <li key={index} className="FileItem">{file.name}</li>
      ))}
    </ul>
  </div>
    
  );
};

export default FileUpload;
