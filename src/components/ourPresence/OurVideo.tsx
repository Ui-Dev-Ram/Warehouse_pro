import { useState } from 'react';

const ModalVideoComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            {/* Modal video component */}
            <div className={modalOpen ? '' : 'block'}>
              {/* Video thumbnail */}
              <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                onClick={openModal}
                aria-label="Watch the video"
              >
                <img
                  className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                  src="https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg"
                  width="768"
                  height="432"
                  alt="Modal video thumbnail"
                />
                {/* Play icon */}
                <svg
                  className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                >
                  <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                  <path
                    className="drop-shadow-2xl"
                    d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                  />
                </svg>
              </button>
              {/* End: Video thumbnail */}
 
              {/* Modal backdrop */}
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity"
                style={{ display: modalOpen ? 'block' : 'none' }}
                onClick={closeModal}
              />
              {/* End: Modal backdrop */}

              {/* Modal dialog */}
              
              <div
                id="modal"
                className="fixed w-1/2 m-auto h-96 inset-0 z-50 px-4 md:px-6 py-6"
                role="dialog"
                aria-modal="true"
                style={{
                  display: modalOpen ? 'inline' : 'none',
                  opacity: modalOpen ? 1 : 0,
                  transform: modalOpen ? 'scale(1)' : 'scale(0.75)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
              >
                <div className="max-w-5xl mx-auto h-full flex items-center">
                  <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                    <video
                      autoPlay
                      width="1920"
                      height="1080"
                      loop
                      controls
                      src="https://cruip-tutorials.vercel.app/modal-video/video.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              {/* End: Modal dialog */}
            </div>
            {/* End: Modal video component */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModalVideoComponent;