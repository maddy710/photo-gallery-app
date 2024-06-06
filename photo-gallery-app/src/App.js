import { useState } from "react";
import { data } from "./content/data";
import Modal from "./modal/Modal";
import Header from "./components/Header";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setSelectedContent={setSelectedContent}
          content={selectedContent}
          data={data}
        />
      )}
      <div style={styles.main}>
        <Header
          title="Photo Gallery"
          subtitle="A simple photo gallery app built by stackup-username"
        />
        <div style={styles.container}>
          {data.map((image_data, index) => {
            return (
              <div
                style={styles.imageContainer}
                onClick={() => {
                  setShowModal(true);
                  setSelectedContent(image_data);
                }}
              >
                <img style={styles.image} src={image_data.url} />
                <div style={styles.imageDescription}>
                  <p style={styles.imageDescriptionText}>{image_data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
