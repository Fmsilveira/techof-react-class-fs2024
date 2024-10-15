import { useState, useEffect } from 'react';

import { storageRef } from './firebase/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import './App.css';

const uploadImage = async (file) => {
  const imageRef = ref(storageRef, file.name);
  await uploadBytes(imageRef, file);
  console.log('Image uploaded successfully');
};

const getImageUrl = async () => {
  const imageRef = ref(storageRef, 'luffy.svg');
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
};

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState('');

  useEffect(() => {
    getImageUrl().then((url) => setImageUrl(url));
  }, [imageUrl]);

  return (
    <div>
      {imageUrl === '' ? (<p>Loading....</p>) : (<img src={imageUrl} alt="Luffy" />)}
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={() => uploadImage(file)}>Upload</button>
    </div>
  );
}

export default App;
