import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth} from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";



export function Profile(){
  const { user, updateProfile } = useAuth();
  if(!user){
    return(
      <h1>Sem autorização /:</h1>
    )
  }
  
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  
  
  

  function handleBack(){
    navigate(-1);
  }
  
  

  const [avatarUrl, setAvatarUrl] = useState(() => {
    if(user){
      return user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    }
    }
  );

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const updated = {
      first_name,
      last_name,
      email,
      password: passwordNew,
      OldPassword: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({user: userUpdated, avatarFile});
  }

  async function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack} >
          <FiArrowLeft />
        </button>
      </header>

      <Form>    
        <Avatar>
          <img 
            src={ avatar ? avatar : avatarPlaceHolder}
            alt="foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Primeiro Nome"
          type="text"
          icon={FiUser}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <Input 
          placeholder="Último Nome"
          type="text"
          icon={FiUser}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
        />
        <Input 
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />

      </Form>
    </Container>
  )
}