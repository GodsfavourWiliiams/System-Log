import {useState} from 'react';
import { FaAddressCard, FaChessBishop, FaTimes } from "react-icons/fa";
import Modal from '../logs/Modal';

const AddBtn = () => {
  const [ExportModal, setExportModal] = useState(false);
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const Submit = (e) => {
      e.preventDefault()
      if (message === '' || tech === '' ) {
          alert('please fill the input')
      } else {
      console.log(message, tech, attention)
      }
  }
  return (
    <>
    <div className='position-fixed bottom-0 gap-2 end-0 row m-3 d-flex align-items-center '>
        <button className="btn bg-primary" onClick={() => setExportModal(true)}><FaChessBishop className='text-white'/></button>
        <button className="btn bg-primary"><FaAddressCard className='text-white'/></button>
      
    </div>
    { ExportModal && (
        <Modal modalBackground="bg-white"> 
            <div className="p-4 bg-white rounded w-100">
            <FaTimes className='position-absolute end-0 me-2' onClick={() => setExportModal(false)}/>
                <div className="mb-3">
                    <h4 className='text-center'>System Log</h4>
                </div>
                <form onSubmit={Submit} className="">
                   <div className="form-group">
                    <label htmlFor="message" className='form-label fw-bold'>Log Message</label>
                        <input 
                        className="form-control"
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <div className="">
                            <select 
                            name="tech" 
                            className='form-select'
                            value={tech}
                            onChange={e => setTech(e.target.value)}>
                                <option value="" disabled>Select Technician</option>
                                <option value="Williams Godsfavour">Williams Godsfavour</option>
                                <option value="Joseph Atada">Joseph Atada</option>
                                <option value="Victory Michael">Victory Michael</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <div className="d-flex align-items-center my-3">
                                <div className="d-flex mb-3 ">
                                    <input
                                    type="checkbox"
                                    className="form-check"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)} 
                                    />
                                <label className="form-check-label ms-1" htmlFor="Check">Remember me </label>
                            </div>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100" >Enter</button>
                </form>
            </div>
        </Modal>)}
    </>
  )
}

export default AddBtn;