import { Container } from "./styles";
import { Upload } from "../../components/Upload";
import { FileList } from "../../components/FileList";


export function UploadImages() {
  return (
    <Container>
      <Upload />
      <FileList />
    </Container>
  );
}