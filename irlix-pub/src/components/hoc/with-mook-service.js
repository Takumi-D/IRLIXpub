import React from "react";
import { MockContextConsumer } from "../context";

const withMookService = () => (Wrapped) => {
    return (props) => {
        return (
            <MockContextConsumer>
                {
                    (mockServices) => {
                        return (
                            <Wrapped  {...props} mockServices={mockServices}/>
                        )
                    }
                }
            </MockContextConsumer>
        )
    }
}

export default withMookService;