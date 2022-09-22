import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {

    test("span should contain status", () => {

        const component = create(<ProfileStatus status={"status for test"} updateStatus={() => {
        }}/>)
        const instance = component.root
        let span = instance.findByType("span")
        expect(span.children[0]).toBe("status for test")
    });

    test("after creation input shouldn't  be displayed", () => {

        const component = create(<ProfileStatus status={"status for test"} updateStatus={() => {
        }}/>)
        const instance = component.root
        expect(() => {
            let input = instance.findByType("input")
        }).toThrow()
    });

    test("span should be changed to input after double click on it", () => {

        const component = create(<ProfileStatus status={"status for test"} updateStatus={() => {
        }}/>)
        const instance = component.root
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input.props.value).toBe("status for test")
    });

    test("update status should be called", () => {
        const callback = jest.fn()
        const component = create(<ProfileStatus status={"status for test"} updateStatus={callback}/>)
        const instance = component.getInstance()
        instance?.props.updateStatus("updated status")
        instance?.props.updateStatus("updated status")
        instance?.props.updateStatus("updated status")
        instance?.props.updateStatus("updated status")
        expect(callback.mock.calls.length).toBe(4)
    });
})
