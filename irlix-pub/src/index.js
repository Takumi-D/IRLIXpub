import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import store from "./store";
import MockServices from "./services/mock-services";
import { MockContextProvider } from "./components/context";

const mockServices = new MockServices();

ReactDOM.createRoot(document.querySelector("#root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <MockContextProvider value={mockServices}>
                <App/>
            </MockContextProvider>
        </BrowserRouter>
    </Provider>
);
