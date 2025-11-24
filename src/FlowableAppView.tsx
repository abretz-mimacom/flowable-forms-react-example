import './App.css';
import { FlowableFlowApp } from '@flowable/work-views'
import '@flowable/work-views/dist/index.css'
import React from 'react';

// Type declarations for window.flowable
declare global {
    interface Window {
        flowable: {
            httpClientCustomConfiguration?: (io: any) => void;
            endpoints?: {
                baseUrl: string;
            }
        };
    }
}

window.flowable.endpoints = { baseUrl: "/flowable-work" };

// Demo purposes only - pass web token or implement auth flow in real app
window.flowable.httpClientCustomConfiguration = function (io) {
    //add custom headers
    io.interceptors.request.use(function (config: any) {
        config.headers = {
            ...config.headers,
            "Authorization": "Basic " + btoa("admin:test")
        };
        return config;
    })
};

interface FlowableAppViewDemoProps {
    flowAppId: string;
}

const FlowableAppViewDemo: React.FC<FlowableAppViewDemoProps> = ({ flowAppId }) => {
    return (
        <div>
            <FlowableFlowApp
                flowAppId={flowAppId}
                container="my-container"
                showTopNavigationElements={false}
                hideNavigationElements={true}
                topNavigationBar={false}
                showUserProfile={false}
                showLogin={false}
                fullScreen={true}
                disableRouting={false}
                hideLogo={true}
            />
        </div>
    );
}

export default FlowableAppViewDemo;
