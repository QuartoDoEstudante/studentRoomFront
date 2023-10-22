import { Container, Uploads, Form, DoubleInput, SaveAd, Header } from "./styles";
import { Upload } from "../../components/Upload";
import { FileList } from "../../components/FileList";
import { useState, useEffect } from "react";
import { uniqueId } from "lodash";
import {filesize} from "filesize";
import { useAuth} from "../../hooks/auth";
import { InputAd } from "../../components/InputAd";
import { Button } from "../../components/Button";
import { RadioInput } from "../../components/RadioInput";
import { api } from "../../services/api";
import {  useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function CreateAd() {

  const navigate = useNavigate();
  const { user } = useAuth();
  
  if(!user){
    return(
      <h1>Sem autorização /:</h1>
    )
  }

  const handleDelete = fileId => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
  };
  

  const [uploadedFiles, setUploadedFiles] = useState([]);

  let handleUpload = files => {
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

  async function handleNewProperty(){

    if(uploadedFiles.length === 0){
      alert('Você precisa adicionar imagens do seu imóvel');
      return;
    }
    if(!title || !description || !value || !contact || !road || !number || !cep || !neighborhood){
      alert('Você precisa preencher todos os campos');
      return;
    }

    const propertyData = {
      title: title,
      description: description,
      type: typeAd,
      value: value,
      contact: contact,
      available: "0",
      road: road,
      number: number,
      cep: cep,
      neighborhood: neighborhood,
    };


    const formData = new FormData();
    formData.append('data', JSON.stringify(propertyData));
    uploadedFiles.forEach(file => {
      formData.append('files', file.file); 
    });
    
    await api.post('/property/create', formData);
  
    alert('Anuncio criado com sucesso');
    navigate('/')

  }

const [ value, setValue ] = useState('');
const [ typeAd, setTypeAd ] = useState("0");
const [cep, setCep] = useState('');
const [ road, setRoad ] = useState('');
const [ number, setNumber ] = useState('');
const [neighborhood, setNeighborhood] = useState('');
const [ title, setTitle ] = useState('');
const [ description, setDescription ] = useState('');
const [ contact, setContact ] = useState('');


const handleOptionChange = (type) => {
  if(type === 'alugar-apto'){
    setTypeAd("0");
  }else{  
    setTypeAd("1");
  }

};

function handleBack() {
  navigate('/')
}

  return (
    <Container>
       <Form>
        
        
        <Header>
          <button type="button" onClick={handleBack} >
            <FiArrowLeft />
          </button>
          <h1>Apartamento do Estudante</h1>
        </Header>

        <DoubleInput>
          <InputAd 
              label="Valor do Aluguel"
              placeholder="R$ 1000,00"
              type="text"
              onChange={e => setValue(e.target.value)}
            />
          <RadioInput handleOptionChange={handleOptionChange} >
          </RadioInput>
        </DoubleInput>  
        
        <DoubleInput>

          <InputAd 
            label="CEP"
            placeholder="Somente Números"
            type="text"
            onChange={e => setCep(e.target.value)}
          />
          <InputAd 
            label="Logradouro"
            placeholder="Informe sua rua"
            type="text"
            onChange={e => setRoad(e.target.value)}
          />
        </DoubleInput>
        <DoubleInput>

          <InputAd 
            label="Número"
            placeholder="Digite aqui"
            type="text"
            onChange={e => setNumber(e.target.value)}
          />
          <InputAd 
            label="Bairro"
            placeholder="Digite aqui"
            type="text"
            onChange={e => setNeighborhood(e.target.value)}
          />
        </DoubleInput>

        <InputAd 
          label="Titulo do anuncio"
          placeholder="Crie um titulo chamativo para seu anuncio"
          type="text"
          onChange={e => setTitle(e.target.value)}
          
        />
        <label>Descrição do seu anuncio</label>
        <textarea 
          placeholder="Descreva seu anuncio"
          onChange={e => setDescription(e.target.value)}
        >

        </textarea>
        <DoubleInput>

          <InputAd 
            label="Contato"
            placeholder="Número para contato da locação"
            type="text"
            onChange={e => setContact(e.target.value)}
          />
          
        </DoubleInput>
        
      </Form>


      <SaveAd>
        <Uploads>
          <h1>Carregue imagens do seu imóvel</h1>
          <Upload onUpload={handleUpload} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
        </Uploads>

        <Button title="Anunciar" onClick={handleNewProperty} />
      </SaveAd>
      
    </Container> 
   
  );
  
}