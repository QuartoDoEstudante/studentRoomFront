import { Container } from "./styles";
import { Upload } from "../../components/Upload";
import { FileList } from "../../components/FileList";
import { useState } from "react";
import { uniqueId } from "lodash";
import {filesize} from "filesize";


export function UploadImages() {

  const handleDelete = fileId => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
  };
  

  const [uploadedFiles, setUploadedFiles] = useState([]);

  let handleUpload = files => {
    console.log(files);
    setUploadedFiles(prevFiles => [
      ...prevFiles,
      ...files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: true,
        error: false,
        url: null
      }))
    ]);
  };


  

  return (
    <Container>
      <Upload onUpload={handleUpload} />
      {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
    </Container>
  );
  
}