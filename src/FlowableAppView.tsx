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

const FlowableAppViewDemo: React.FC = () => {
    return (
        <div>
            <FlowableFlowApp
                flowAppId="breadcrumbExample"
                container="my-container"
                showTopNavigationElements={true}
                hideNavigationElements={true}
                topNavigationBar={true}
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
