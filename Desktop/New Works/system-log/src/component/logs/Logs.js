import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res =  await fetch('http://localhost:5000/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])
        if (loading) {
            return <h4>Loading........</h4>
        }
  return (
    <div className=' mt-5 mx-auto row w-100 container d-flex align-items-center justify-content-center'>
             <h4 className='my-3 text-center'>System Logs</h4>
        <div className="">
            {!loading && logs.length === 0 ? (<p>No Logs to show</p>) : (logs.map(log => 
            <LogItem log={log} key={log.id}/> 
            ))} 
        </div>
    </div>
  )
}

export default Logs;