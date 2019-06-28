import React from 'react';

const LastSyncView = (prop) => {
    switch (prop.service) {
        case 'Slack':
            return <p className="sync-status ">Last synced: 27.06.19</p>;
        case 'Gmail':
            return <p className="sync-status ">Last synced: 18.06.19</p>;
        case 'Google Drive':
            return <p className="sync-status ">Last synced: 26.06.19</p>;
        default: return null;
    }
};

export default LastSyncView;