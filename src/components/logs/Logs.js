import React from 'react';
import { map, reverse } from 'lodash';

import eventLogs from 'util/eventLogs';

import * as styles from './Logs.module.scss';

const Logs = () => {
    let reverseLog = eventLogs.logs 
    return (
        <div className={styles.Game}>
            {map(reverseLog, (log, index) => {
                return (
                    <div key={index}>{index}: {log.timeStamp} :: {log.obj}</div>
                )
            })}
        </div>
    )
}

export default Logs