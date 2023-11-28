import './App.css';
import { FlowableFlowApp } from '@flowable/work-views'
import '@flowable/work-views/dist/index.css'

window.flowable.httpClientCustomConfiguration = function (io) {
    //add custom headers
    io.interceptors.request.use(function (config) {
        config.headers = {
            ...config.headers,
            "Authorization": "Basic " + btoa("admin:test")
        };
        return config;
    })
};

function FlowableAppViewDemo() {
    return (
        <div>
            <FlowableFlowApp
                flowAppId="skeletonApp"
                container="my-container"
                showTopNavigationElements={true}
                hideNavigationElements={true}
                topNavigationBar={false}
                showUserProfile={true}
                showLogin={false}
                fullScreen={true}
                disableRouting={false}
                hideLogo={true}
            />
        </div>
    );
}

export default FlowableAppViewDemo;
