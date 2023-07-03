import { Container, DropContainer, UploadMessage } from "./styles";
import Dropzone from "react-dropzone";

export function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }

  function handleDropAccepted(acceptedFiles) {
    const imageFiles = acceptedFiles.filter(file => file.type.startsWith("image/"));
    onUpload(imageFiles);
    if (!imageFiles.length) {
      alert("Arquivo não suportado");
    }
  }

  return (
    <Container>
      <Dropzone onDropAccepted={handleDropAccepted}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </Container>
  );
}
