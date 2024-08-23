import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { Worker, Viewer} from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
import Background from '../components/background/Background';
import TitleH1 from '../components/title/TitleH1';
import Nav from '../components/nav/Nav';

function SheetMusic() {
  const [sheetMusic, setSheetMusic] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/partitura/${id}`)
      .then(response => {
        setSheetMusic(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener la clase:', error);
      })
  }, [id])

  return (
    <Background>
      <Nav goBack={`lista-partituras`}></Nav>
      <div className="w-10/12 mx-auto pt-1 pb-4 px-4 mt-4 rounded-xl bg-sistro-blue-200">
        <TitleH1 title={sheetMusic.title} />
        <p className='mt-2 text-center text-gray-400 text-xl'>{sheetMusic.author}</p>
        <div className="w-11/12 p-6 mt-4 mx-auto text-white h-screen">
          {sheetMusic.sheet_music ? (
            // <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            //   <div style={{ height: '750px' }}>
            //     <Viewer fileUrl={sheetMusic.sheet_music} />
            //   </div>
            // </Worker>
            <iframe
            src={`${sheetMusic.sheet_music}`}
            title="PDF Viewer"
            className='w-full h-full'
          />
          ) : (
            <p className='text-center'>No se pudo cargar la partitura</p>
          )}
        </div>
      </div>
    </Background>
  )
}

export default SheetMusic