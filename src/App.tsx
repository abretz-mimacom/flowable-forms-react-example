import '@flowable/forms/flwforms.min.css';
import "@flowable/work-views/dist/index.css";
import FlowableAppViewDemo from "./FlowableAppView";
import FlowableCaseViewDemo from "./FlowableCaseView";
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import '@fortawesome/free-solid-svg-icons';
// Wrapper components to extract route parameters
const AppRouteWrapper: React.FC = () => {
    return <FlowableAppViewDemo flowAppId={'breadcrumbExample'} />;
}

const CaseRouteWrapper: React.FC = () => {
    const { caseInstanceId } = useParams<{ caseInstanceId: string }>();
    return <FlowableCaseViewDemo caseInstanceId={caseInstanceId || ''} />;
}

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard/*" element={<AppRouteWrapper />} />
                <Route path="/cases/:caseInstanceId/*" element={<CaseRouteWrapper />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
