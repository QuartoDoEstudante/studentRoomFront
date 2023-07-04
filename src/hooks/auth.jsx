import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, password }){

    try{
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@studentroom:user", JSON.stringify(user));
      localStorage.setItem("@studentroom:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user, token});

    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível realizar o login");
      }
    }

  } 

  async function signOut(){
    localStorage.removeItem("@studentroom:user");
    localStorage.removeItem("@studentroom:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }){
    try {

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@studentroom:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso");

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@studentroom:user");  
    const token = localStorage.getItem("@studentroom:token");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      });
    };

  }, []);

  return(
    <AuthContext.Provider value={{
      signIn,
      updateProfile,
      signOut,
      user: data.user,
      }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

