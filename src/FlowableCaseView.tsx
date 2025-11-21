import './App.css';
import { FlowableCase } from '@flowable/work-views'
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

interface FlowableCaseViewDemoProps {
    caseInstanceId: string;
}

const FlowableCaseViewDemo: React.FC<FlowableCaseViewDemoProps> = ({ caseInstanceId }) => {
    return (
        <div>
            <FlowableCase
                caseInstanceId={caseInstanceId}
                fullScreen={true}
                hideNavigationElements={true}
                hideLogo={true}
                container={"case-view-container"}
                topNavigationBar={false}
                showTopNavigationElements={false}
            />
        </div>
    );
}

export default FlowableCaseViewDemo;
