'use client';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import styles

const ResumeViewer = () => {
  const pdfFilePath = "/reginegalanaga.pdf"; // PDF is placed inside the 'public' folder in Next.js

  return (
    <div className="w-full h-[600px]">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfFilePath} />
      </Worker>
    </div>
  );
};

export default ResumeViewer;
