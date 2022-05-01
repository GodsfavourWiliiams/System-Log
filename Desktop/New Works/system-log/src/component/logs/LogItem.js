import React from 'react';
import { FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types'

const LogItem = ({ log }) => {
  return (
    <div className="border my-2 p-2 rounded">
        <div className='d-flex align-items-center justify-content-between'>
            <a href="#edit-log-modal" className={`text-decoration-none
            ${log.attention ? "text-danger" : "text-primary"}`}>
                {log.message}
            
            </a>
            <FaTrash className='text-danger'/>
        </div>
        <br />
        <span className='text-secondary'>
            <span className="me-1 text-black">
                ID #{log.id}
            </span>
            Last Updated by
            <span className="ms-1 text-black fw-medium">
                {log.tech}
            </span> on
            <span className="ms-1">{log.date}</span>
        </span>
    </div>
  )
}

LogItem.propTypes = {
    log: PropTypes.objectOf.isRequired
}

export default LogItem;