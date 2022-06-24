import Modal from "./components/Modal";
import Sidebar from "./components/sidebar/Sidebar";
import Divider from "./components/Divider";
import useDisclosure from "./hooks/useDisclosure";
import "./styles.css";

export default function App() {
  const {
    isOpen: modalIsOpen,
    close: closeModal,
    toggle: toggleModal
  } = useDisclosure();
  const {
    isOpen: sidebarIsOpen,
    close: closeSidebar,
    toggle: toggleSidebar
  } = useDisclosure();

  return (
    <div className="App">
      <div className="container">
        <Sidebar visible={sidebarIsOpen} close={closeSidebar} />
        {/* 
        <h1>useDisclosure custom hook</h1>
        <div className="button-container">
          <button onClick={toggleSidebar}>Open sidebar</button>
          <button onClick={toggleModal}>Open modal</button>
        </div> */}
        <Divider />
        <Modal visible={modalIsOpen} close={closeModal} />
      </div>
    </div>
  );
}
