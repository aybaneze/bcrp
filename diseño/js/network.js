//pintar los datos iniciales del usuario
const writeUserData = (userId, name, nickName, email, imageUrl) => {
  const userData = {
    usersId: userId,
    userName: name,
    userNickName: nickName,
    email: email,
    profile_picture: imageUrl
  }
  console.log(userData);
  
  firebase.database().ref(`users/${userId}`).set(userData);
  return userData;
}

window.writeUserData = writeUserData;
